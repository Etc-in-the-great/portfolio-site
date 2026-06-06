import { NextResponse } from "next/server";

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

function buildPrompt(note) {
  return [
    "你是一个面向大学生的 AI Study Assistant。",
    "请把用户的课程笔记整理成适合复习的结构。",
    "必须只返回 JSON，不要使用 Markdown，不要添加额外解释。",
    "JSON 格式如下：",
    '{"summary":"中文总结","keyPoints":["重点1","重点2","重点3"],"questions":["问题1","问题2","问题3"]}',
    "要求：中文解释自然，保留必要 English technical terms，例如 Summary、Key Points、Review Questions。",
    "用户笔记：",
    note,
  ].join("\n");
}

function parseAssistantContent(content) {
  const cleaned = content
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "");

  const parsed = JSON.parse(cleaned);

  return {
    summary: String(parsed.summary ?? ""),
    keyPoints: Array.isArray(parsed.keyPoints) ? parsed.keyPoints.map(String).slice(0, 5) : [],
    questions: Array.isArray(parsed.questions) ? parsed.questions.map(String).slice(0, 5) : [],
  };
}

export async function POST(request) {
  try {
    const { note } = await request.json();
    const normalizedNote = typeof note === "string" ? note.trim() : "";

    if (!normalizedNote) {
      return NextResponse.json({ error: "请输入一段学习笔记后再生成。" }, { status: 400 });
    }

    if (!process.env.DEEPSEEK_API_KEY) {
      return NextResponse.json(
        { error: "DeepSeek API Key 还没有配置。请在 .env.local 或 Vercel Environment Variables 中添加 DEEPSEEK_API_KEY。" },
        { status: 503 },
      );
    }

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You turn study notes into concise study summaries and review questions.",
          },
          {
            role: "user",
            content: buildPrompt(normalizedNote),
          },
        ],
        temperature: 0.4,
        max_tokens: 900,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `DeepSeek API 调用失败：${response.status} ${errorText.slice(0, 180)}` },
        { status: 502 },
      );
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json({ error: "DeepSeek API 没有返回可解析内容。" }, { status: 502 });
    }

    return NextResponse.json(parseAssistantContent(content));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "生成失败，请稍后重试。" },
      { status: 500 },
    );
  }
}

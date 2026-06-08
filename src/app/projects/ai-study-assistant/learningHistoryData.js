export const learningHistoryStorageKey = "portfolio.aiStudyAssistant.history";

export const mockLearningHistory = [
  {
    id: "python-string-note",
    title: "Python string note",
    content:
      "Python string 是不可变序列。常用操作包括索引、切片、拼接、格式化和常见方法，例如 lower(), strip(), split()。处理文本时，先明确输入是什么，再决定要清理空格、拆分字段还是提取关键词。",
    summary:
      "Python 字符串是不可变的序列，适合用索引、切片和常见方法完成文本处理。学习时可以把任务拆成清理、拆分和提取三个步骤。",
    keyPoints: [
      "string 是 immutable sequence，不能直接修改原字符串",
      "索引和切片适合提取局部文本",
      "strip、split、lower 常用于清理和格式统一",
    ],
    questions: [
      "Python string 为什么是不可变的？",
      "切片和 split 分别适合解决什么问题？",
      "处理文件名时可以用哪些 string 方法？",
    ],
    createdAt: "2026-06-06T09:20:00.000Z",
  },
  {
    id: "english-active-reading",
    title: "English reading note",
    content:
      "Active reading means asking questions, predicting ideas, marking confusing sentences, and writing a short summary after reading.",
    summary:
      "这段 English reading note 强调 active reading：读者需要边读边提问，并在读后用自己的话整理 main idea。",
    keyPoints: [
      "Active reading 不是被动看文字",
      "读者需要关注 main idea 和 supporting details",
      "short summary 可以检查自己是否理解",
    ],
    questions: [
      "What is active reading?",
      "Why should readers write a short summary?",
      "How do supporting details help explain the main idea?",
    ],
    createdAt: "2026-06-05T14:10:00.000Z",
  },
];

export function createHistoryItem({ title, content, summary, keyPoints, questions }) {
  return {
    id: `note-${Date.now()}`,
    title,
    content,
    summary,
    keyPoints,
    questions,
    createdAt: new Date().toISOString(),
  };
}

export function formatHistoryDate(createdAt) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(createdAt));
}

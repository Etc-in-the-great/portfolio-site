# AI Learning System 项目架构说明

## 1. 当前结构

```text
Portfolio Site
    ↓
AI Study Assistant
    ↓
DeepSeek API
    ↓
Learning History
    ↓
Database（Future）
    ↓
Project Management Module（Future）
```

## 2. 模块关系

### Portfolio Site

Portfolio Site 是当前系统入口，用于展示个人项目、学习路线、case study 和后续开发方向。导师或访客可以先通过首页理解项目整体情况，再进入具体模块查看功能。

### AI Study Assistant

AI Study Assistant 是当前系统的核心 AI 功能模块。用户输入课程笔记后，系统会生成 Summary、Key Points 和 Review Questions，用于辅助学习和复习。

### DeepSeek API

DeepSeek API 负责生成 AI 结果。当前项目通过 Next.js API Route 在服务器端调用 DeepSeek，前端不会直接保存或暴露 API Key。

### Learning History

Learning History 负责保存 AI 生成后的学习记录。当前版本使用 localStorage，已经支持 Save Note、History Page、Note Detail 和 Delete Note。

### Database（Future）

未来会把 Learning History 的数据从 localStorage 迁移到数据库中。计划先设计学习记录表、标签表、项目记录表，再决定使用 Supabase 或 MySQL。

### Project Management Module（Future）

后续计划加入项目管理模块，用于记录项目目标、任务、里程碑、README 状态和开发日志。这个模块会让系统从“学习助手”进一步扩展为“AI 辅助学习与项目管理系统”。

## 3. 数据流向

```text
用户输入学习笔记
    ↓
前端 AI Study Assistant
    ↓
Next.js API Route
    ↓
DeepSeek API
    ↓
返回 Summary / Key Points / Review Questions
    ↓
用户点击 Save Note
    ↓
Learning History 保存记录
    ↓
History Page / Note Detail 展示记录
```

## 4. 当前数据结构

Learning History 当前使用的数据字段：

- `title`
- `content`
- `summary`
- `keyPoints`
- `questions`
- `createdAt`

这些字段后续可以直接作为数据库表设计的基础。

## 5. 未来扩展路线

### Phase 1：当前已完成

- Portfolio Site
- AI Study Assistant
- DeepSeek API integration
- Learning History localStorage prototype
- Python Study Utilities

### Phase 2：数据库设计

- 设计学习记录表
- 设计项目记录表
- 设计标签和分类
- 评估 Supabase / MySQL

### Phase 3：数据库接入

- 将 Learning History 从 localStorage 迁移到数据库
- 增加记录筛选、搜索和分类
- 支持长期保存学习记录

### Phase 4：项目管理模块

- 项目任务管理
- 里程碑记录
- README 状态检查
- AI-generated README 草稿

### Phase 5：毕业设计版本

- 增加用户管理
- 增加基础后台管理
- 增加学习分析
- 完成系统测试和文档整理

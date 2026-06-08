# AI Learning System 导师项目概览

## 1. 项目名称

AI Learning System

## 2. 项目定位

AI-assisted Learning and Project Management System

这是一个基于 Portfolio Site 逐步演进的个人学习与项目管理系统。当前版本先完成可展示的作品集入口、AI 学习助手原型、学习记录模块和 Python 学习工具方向，后续计划继续扩展数据库、项目管理和学习分析能力。

## 3. 当前已完成模块

### Portfolio Site

- 已部署到 Vercel
- 用于展示个人学习路线、项目进度、case study 和后续扩展方向
- 包含首页、项目卡片、技能树、学习路线和联系入口

### AI Study Assistant

- 用于把课程笔记转成 Summary、Key Points 和 Review Questions
- 已完成前端交互原型
- 已通过 Next.js API Route 接入 DeepSeek API

### DeepSeek API

- API Key 通过环境变量管理
- 前端不会直接暴露密钥
- 当前用于生成学习笔记总结、重点和复习问题

### Learning History Module

- 支持 Save Note
- 支持 History Page
- 支持 Note Detail
- 支持 Delete Note
- 当前使用 localStorage，不接数据库

### Python Study Utilities

- 学生学习工具箱方向
- 用于探索文件整理、批量处理、Markdown / TXT 工具等实用脚本

### Batch File Renamer

- 已完成前端 prototype
- 已完成真实 Python dry-run script
- 当前只预览重命名结果，不会实际修改文件
- 包含 conflict warning、no overwrite 等安全设计

## 4. 技术栈

- Next.js
- React
- Tailwind CSS
- JavaScript
- DeepSeek API
- localStorage
- Python
- GitHub
- Vercel

## 5. 当前系统能力

- 通过 Portfolio Site 展示项目进展和个人学习路线
- 通过 AI Study Assistant 生成学习笔记的 Summary、Key Points、Review Questions
- 通过 Learning History 保存和查看本地学习记录
- 通过 Python Study Utilities 展示学习自动化脚本方向
- 通过 README、Dashboard、Project-Journal 维护项目状态和开发记录

## 6. 当前系统限制

- Learning History 目前只使用 localStorage，暂未接入数据库
- 暂无用户登录和多用户数据隔离
- AI Study Assistant 暂不支持 PDF 上传
- 学习记录暂不支持课程、标签、日期筛选
- Project Management Module 仍处于后续规划阶段

## 7. 后续扩展方向

- Database：设计学习记录、项目记录、标签和用户表结构
- Project Management Module：管理项目任务、里程碑、开发日志和 README 状态
- User Management：加入登录、用户数据隔离和基础权限
- AI-generated README：根据项目结构和日志自动生成 README 草稿
- Learning Analytics：统计学习记录、复习次数、项目推进情况

## 8. 为什么适合作为软件开发方向项目

这个项目不是单一页面展示，而是一个可以持续迭代的软件系统原型。它包含前端页面、API 调用、数据结构设计、本地数据保存、Python 工具脚本、部署和文档维护流程，后续也可以自然扩展到数据库、用户管理、项目管理和学习分析。

从软件开发方向看，它适合继续作为毕设方向探索，因为它有明确用户场景、可分阶段实现、技术栈完整，并且每一步都可以沉淀为可展示、可测试、可扩展的模块。

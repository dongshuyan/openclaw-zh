# 🦞 OpenClaw 中文版

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

<p align="center">
  <strong>基于 <a href="https://github.com/openclaw/openclaw">OpenClaw</a> 的中文本地化版本</strong>
</p>

## 关于本项目

本项目是 [OpenClaw](https://github.com/openclaw/openclaw) 的中文本地化分支，为 WebUI 添加了中文界面支持。

### 主要特性

- 🌐 **中英文双语界面** - WebUI 支持中文和英文切换
- 🔄 **语言偏好保存** - 自动保存语言设置到本地
- 🎯 **跟随系统语言** - 默认根据浏览器语言自动选择
- 📝 **翻译简洁易懂** - 面向普通用户的友好翻译

### 已翻译内容

- ✅ 侧边栏导航（标签组、标签页）
- ✅ 页面标题和副标题
- ✅ 概览页面
- ✅ 会话页面（部分）
- ✅ 消息渠道页面（部分）
- ✅ 技能页面（部分）
- ⏳ 其他页面（持续完善中）

## 安装和使用

### 从源码构建

```bash
# 克隆本仓库
git clone https://github.com/YOUR_USERNAME/openclaw-zh.git
cd openclaw-zh

# 安装依赖
pnpm install

# 构建 UI
cd ui && pnpm build && cd ..

# 构建项目
pnpm build

# 启动 Gateway
pnpm openclaw gateway --port 18789 --verbose
```

### 切换语言

1. 打开 WebUI（默认 http://127.0.0.1:18789）
2. 在页面顶部右侧找到语言切换下拉框
3. 选择「简体中文」或「English」

## 与上游同步

本项目基于 OpenClaw 主仓库开发，如需同步上游更新：

```bash
# 添加上游仓库
git remote add upstream https://github.com/openclaw/openclaw.git

# 拉取上游更新
git fetch upstream

# 合并更新（可能需要解决冲突）
git merge upstream/main
```

## 贡献翻译

欢迎贡献翻译！翻译文件位于：

- `ui/src/ui/i18n/locales/en.ts` - 英文
- `ui/src/ui/i18n/locales/zh-CN.ts` - 简体中文

### 翻译原则

1. **简洁** - 使用最少的文字表达清楚
2. **易懂** - 避免过于专业的术语，照顾普通用户
3. **一致** - 相同概念使用相同翻译
4. **贴切** - 符合中文表达习惯

## 相关链接

- [OpenClaw 官方仓库](https://github.com/openclaw/openclaw)
- [OpenClaw 官方文档](https://docs.openclaw.ai)
- [OpenClaw 官网](https://openclaw.ai)

## 许可证

本项目遵循原项目的 MIT 许可证。

---

**致谢**：感谢 [OpenClaw](https://github.com/openclaw/openclaw) 团队创建了这个优秀的开源项目。

/**
 * 简体中文翻译
 */
export const zhCN: Record<string, string> = {
  // 导航 - 标签组
  "nav.group.chat": "对话",
  "nav.group.control": "控制台",
  "nav.group.agent": "智能体",
  "nav.group.settings": "设置",

  // 导航 - 标签页
  "nav.tab.overview": "概览",
  "nav.tab.channels": "消息渠道",
  "nav.tab.instances": "实例",
  "nav.tab.sessions": "会话",
  "nav.tab.cron": "定时任务",
  "nav.tab.skills": "技能",
  "nav.tab.nodes": "节点",
  "nav.tab.chat": "对话",
  "nav.tab.config": "配置",
  "nav.tab.debug": "调试",
  "nav.tab.logs": "日志",
  "nav.tab.control": "控制台",

  // 导航 - 资源链接
  "nav.resources": "资源",
  "nav.docs": "文档",

  // 导航 - 副标题说明
  "nav.subtitle.overview": "网关状态、入口信息和健康检查。",
  "nav.subtitle.channels": "管理消息渠道和相关设置。",
  "nav.subtitle.instances": "最近连接的客户端和节点信息。",
  "nav.subtitle.sessions": "查看活跃会话，调整会话级别的设置。",
  "nav.subtitle.cron": "设置定时唤醒和周期性任务。",
  "nav.subtitle.skills": "管理技能的可用性和 API 密钥注入。",
  "nav.subtitle.nodes": "已配对的设备、功能和命令暴露。",
  "nav.subtitle.chat": "直接与网关对话，用于快速测试。",
  "nav.subtitle.config": "安全地编辑 ~/.openclaw/openclaw.json 配置文件。",
  "nav.subtitle.debug": "网关快照、事件和手动 RPC 调用。",
  "nav.subtitle.logs": "实时查看网关日志文件。",

  // 概览页面
  "overview.gatewayAccess": "网关连接",
  "overview.gatewayAccess.sub": "配置控制面板如何连接和认证网关。",
  "overview.wsUrl": "WebSocket 地址",
  "overview.token": "网关令牌",
  "overview.password": "密码（不保存）",
  "overview.sessionKey": "默认会话标识",
  "overview.connect": "连接",
  "overview.refresh": "刷新",
  "overview.connectHint": "修改连接信息后，点击「连接」生效。",
  "overview.snapshot": "状态快照",
  "overview.snapshot.sub": "网关握手返回的最新信息。",
  "overview.status": "状态",
  "overview.connected": "已连接",
  "overview.disconnected": "未连接",
  "overview.uptime": "运行时长",
  "overview.tickInterval": "心跳间隔",
  "overview.lastChannelsRefresh": "渠道刷新时间",
  "overview.instances": "实例数",
  "overview.instances.hint": "最近 5 分钟内的活跃实例。",
  "overview.sessions": "会话数",
  "overview.sessions.hint": "网关跟踪的近期会话数量。",
  "overview.cron": "定时任务",
  "overview.cron.enabled": "已启用",
  "overview.cron.disabled": "已禁用",
  "overview.cron.nextWake": "下次唤醒 {time}",
  "overview.notes": "提示",
  "overview.notes.sub": "远程控制设置的快速提醒。",
  "overview.notes.tailscale": "Tailscale 服务",
  "overview.notes.tailscale.hint": "建议使用 serve 模式，让网关仅监听本地回环并通过 tailnet 认证。",
  "overview.notes.session": "会话管理",
  "overview.notes.session.hint": "使用 /new 或 sessions.patch 重置上下文。",
  "overview.notes.cron": "定时任务提示",
  "overview.notes.cron.hint": "为周期性任务使用独立的会话。",
  "overview.channelsHint": "前往「消息渠道」连接 WhatsApp、Telegram、Discord、Signal 或 iMessage。",
  "overview.authRequired": "此网关需要认证。请添加令牌或密码，然后点击「连接」。",
  "overview.authFailed": "认证失败。请重新复制带令牌的 URL：",
  "overview.authDocs": "文档：控制面板认证",
  "overview.insecureHint": "当前页面使用 HTTP，浏览器阻止了设备身份验证。请使用 HTTPS（Tailscale Serve）或打开",
  "overview.insecureHint2": "（在网关主机上）。",
  "overview.insecureHint3": "如果必须使用 HTTP，请设置",

  // 消息渠道页面
  "channels.health": "渠道健康状态",
  "channels.health.sub": "从网关获取的渠道状态快照。",
  "channels.noSnapshot": "暂无快照数据。",
  "channels.status.sub": "渠道状态和配置信息。",
  "channels.configured": "已配置",
  "channels.running": "运行中",
  "channels.connected": "已连接",
  "channels.lastInbound": "最后消息",
  "channels.yes": "是",
  "channels.no": "否",
  "channels.active": "活跃",
  "channels.na": "无",
  "channels.schemaUnavailable": "配置模式不可用，请使用原始编辑。",
  "channels.configSchemaUnavailable": "渠道配置模式不可用。",
  "channels.loadingSchema": "加载配置模式中…",

  // 会话页面
  "sessions.title": "会话管理",
  "sessions.sub": "查看活跃会话，调整会话级别的设置。",
  "sessions.loading": "加载中…",
  "sessions.activeMinutes": "活跃时间（分钟）",
  "sessions.limit": "数量限制",
  "sessions.includeGlobal": "包含全局",
  "sessions.includeUnknown": "包含未知",
  "sessions.store": "存储位置：{path}",
  "sessions.noSessions": "暂无会话。",
  "sessions.col.key": "标识",
  "sessions.col.label": "标签",
  "sessions.col.kind": "类型",
  "sessions.col.updated": "更新时间",
  "sessions.col.tokens": "Token 数",
  "sessions.col.thinking": "思考模式",
  "sessions.col.verbose": "详细模式",
  "sessions.col.reasoning": "推理模式",
  "sessions.col.actions": "操作",
  "sessions.inherit": "继承",
  "sessions.delete": "删除",
  "sessions.optional": "（可选）",

  // 技能页面
  "skills.title": "技能管理",
  "skills.sub": "管理技能的可用性和 API 密钥注入。",
  "skills.noSkills": "暂无技能。",
  "skills.enabled": "已启用",
  "skills.disabled": "已禁用",
  "skills.enable": "启用",
  "skills.disable": "禁用",

  // 节点页面
  "nodes.title": "节点管理",
  "nodes.sub": "已配对的设备、功能和命令暴露。",
  "nodes.noNodes": "暂无节点。",
  "nodes.capabilities": "功能",
  "nodes.commands": "命令",

  // 定时任务页面
  "cron.title": "定时任务",
  "cron.sub": "设置定时唤醒和周期性任务。",
  "cron.noCron": "暂无定时任务。",
  "cron.schedule": "执行计划",
  "cron.nextRun": "下次执行",
  "cron.lastRun": "上次执行",
  "cron.status": "状态",

  // 配置页面
  "config.title": "配置编辑",
  "config.sub": "安全地编辑 ~/.openclaw/openclaw.json 配置文件。",
  "config.save": "保存",
  "config.reset": "重置",
  "config.saved": "配置已保存。",
  "config.error": "保存配置失败。",

  // 调试页面
  "debug.title": "调试工具",
  "debug.sub": "网关快照、事件和手动 RPC 调用。",
  "debug.snapshot": "快照",
  "debug.events": "事件",
  "debug.rpc": "RPC 调用",

  // 日志页面
  "logs.title": "日志查看",
  "logs.sub": "实时查看网关日志文件。",
  "logs.noLogs": "暂无日志。",
  "logs.follow": "跟随",
  "logs.clear": "清空",

  // 对话
  "chat.placeholder": "输入消息…",
  "chat.send": "发送",
  "chat.thinking": "思考中…",
  "chat.newSession": "新建会话",

  // 通用
  "common.loading": "加载中…",
  "common.error": "错误",
  "common.save": "保存",
  "common.cancel": "取消",
  "common.delete": "删除",
  "common.edit": "编辑",
  "common.close": "关闭",
  "common.confirm": "确认",
  "common.yes": "是",
  "common.no": "否",
  "common.on": "开",
  "common.off": "关",
  "common.enabled": "已启用",
  "common.disabled": "已禁用",
  "common.na": "无",
  "common.ago": "{time}前",
  "common.never": "从未",

  // 设置
  "settings.language": "语言",
  "settings.language.sub": "选择界面显示语言。",
  "settings.theme": "主题",
  "settings.theme.sub": "选择界面主题风格。",
  "settings.theme.light": "浅色",
  "settings.theme.dark": "深色",
  "settings.theme.system": "跟随系统",

  // WhatsApp
  "whatsapp.title": "WhatsApp",
  "whatsapp.sub": "连接你的 WhatsApp Web 会话。",
  "whatsapp.scanQR": "使用手机 WhatsApp 扫描此二维码。",
  "whatsapp.linking": "连接中…",
  "whatsapp.linked": "已连接",
  "whatsapp.notLinked": "未连接",
  "whatsapp.link": "连接",
  "whatsapp.unlink": "断开",
  "whatsapp.refresh": "刷新",

  // Telegram
  "telegram.title": "Telegram",
  "telegram.sub": "配置你的 Telegram 机器人。",
  "telegram.botToken": "机器人令牌",
  "telegram.configured": "已配置",
  "telegram.notConfigured": "未配置",

  // Discord
  "discord.title": "Discord",
  "discord.sub": "配置你的 Discord 机器人。",
  "discord.botToken": "机器人令牌",
  "discord.configured": "已配置",
  "discord.notConfigured": "未配置",

  // Slack
  "slack.title": "Slack",
  "slack.sub": "配置 Slack 集成。",
  "slack.configured": "已配置",
  "slack.notConfigured": "未配置",

  // Signal
  "signal.title": "Signal",
  "signal.sub": "配置 Signal 消息。",
  "signal.configured": "已配置",
  "signal.notConfigured": "未配置",

  // iMessage
  "imessage.title": "iMessage",
  "imessage.sub": "配置 iMessage 集成。",
  "imessage.configured": "已配置",
  "imessage.notConfigured": "未配置",

  // Google Chat
  "googlechat.title": "Google Chat",
  "googlechat.sub": "配置 Google Chat 集成。",
  "googlechat.configured": "已配置",
  "googlechat.notConfigured": "未配置",

  // Nostr
  "nostr.title": "Nostr",
  "nostr.sub": "配置 Nostr 集成。",
  "nostr.configured": "已配置",
  "nostr.notConfigured": "未配置",
};

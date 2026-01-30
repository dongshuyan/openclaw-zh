/**
 * English translations
 */
export const en: Record<string, string> = {
  // Navigation - Tab Groups
  "nav.group.chat": "Chat",
  "nav.group.control": "Control",
  "nav.group.agent": "Agent",
  "nav.group.settings": "Settings",

  // Navigation - Tabs
  "nav.tab.overview": "Overview",
  "nav.tab.channels": "Channels",
  "nav.tab.instances": "Instances",
  "nav.tab.sessions": "Sessions",
  "nav.tab.cron": "Cron Jobs",
  "nav.tab.skills": "Skills",
  "nav.tab.nodes": "Nodes",
  "nav.tab.chat": "Chat",
  "nav.tab.config": "Config",
  "nav.tab.debug": "Debug",
  "nav.tab.logs": "Logs",
  "nav.tab.control": "Control",

  // Navigation - Resources
  "nav.resources": "Resources",
  "nav.docs": "Docs",

  // Navigation - Subtitles
  "nav.subtitle.overview": "Gateway status, entry points, and a fast health read.",
  "nav.subtitle.channels": "Manage channels and settings.",
  "nav.subtitle.instances": "Presence beacons from connected clients and nodes.",
  "nav.subtitle.sessions": "Inspect active sessions and adjust per-session defaults.",
  "nav.subtitle.cron": "Schedule wakeups and recurring agent runs.",
  "nav.subtitle.skills": "Manage skill availability and API key injection.",
  "nav.subtitle.nodes": "Paired devices, capabilities, and command exposure.",
  "nav.subtitle.chat": "Direct gateway chat session for quick interventions.",
  "nav.subtitle.config": "Edit ~/.openclaw/openclaw.json safely.",
  "nav.subtitle.debug": "Gateway snapshots, events, and manual RPC calls.",
  "nav.subtitle.logs": "Live tail of the gateway file logs.",

  // Overview page
  "overview.gatewayAccess": "Gateway Access",
  "overview.gatewayAccess.sub": "Where the dashboard connects and how it authenticates.",
  "overview.wsUrl": "WebSocket URL",
  "overview.token": "Gateway Token",
  "overview.password": "Password (not stored)",
  "overview.sessionKey": "Default Session Key",
  "overview.connect": "Connect",
  "overview.refresh": "Refresh",
  "overview.connectHint": "Click Connect to apply connection changes.",
  "overview.snapshot": "Snapshot",
  "overview.snapshot.sub": "Latest gateway handshake information.",
  "overview.status": "Status",
  "overview.connected": "Connected",
  "overview.disconnected": "Disconnected",
  "overview.uptime": "Uptime",
  "overview.tickInterval": "Tick Interval",
  "overview.lastChannelsRefresh": "Last Channels Refresh",
  "overview.instances": "Instances",
  "overview.instances.hint": "Presence beacons in the last 5 minutes.",
  "overview.sessions": "Sessions",
  "overview.sessions.hint": "Recent session keys tracked by the gateway.",
  "overview.cron": "Cron",
  "overview.cron.enabled": "Enabled",
  "overview.cron.disabled": "Disabled",
  "overview.cron.nextWake": "Next wake {time}",
  "overview.notes": "Notes",
  "overview.notes.sub": "Quick reminders for remote control setups.",
  "overview.notes.tailscale": "Tailscale serve",
  "overview.notes.tailscale.hint": "Prefer serve mode to keep the gateway on loopback with tailnet auth.",
  "overview.notes.session": "Session hygiene",
  "overview.notes.session.hint": "Use /new or sessions.patch to reset context.",
  "overview.notes.cron": "Cron reminders",
  "overview.notes.cron.hint": "Use isolated sessions for recurring runs.",
  "overview.channelsHint": "Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",
  "overview.authRequired": "This gateway requires auth. Add a token or password, then click Connect.",
  "overview.authFailed": "Auth failed. Re-copy a tokenized URL with",
  "overview.authDocs": "Docs: Control UI auth",
  "overview.insecureHint": "This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open",
  "overview.insecureHint2": "on the gateway host.",
  "overview.insecureHint3": "If you must stay on HTTP, set",

  // Channels page
  "channels.health": "Channel health",
  "channels.health.sub": "Channel status snapshots from the gateway.",
  "channels.noSnapshot": "No snapshot yet.",
  "channels.status.sub": "Channel status and configuration.",
  "channels.configured": "Configured",
  "channels.running": "Running",
  "channels.connected": "Connected",
  "channels.lastInbound": "Last inbound",
  "channels.yes": "Yes",
  "channels.no": "No",
  "channels.active": "Active",
  "channels.na": "n/a",
  "channels.schemaUnavailable": "Schema unavailable. Use Raw.",
  "channels.configSchemaUnavailable": "Channel config schema unavailable.",
  "channels.loadingSchema": "Loading config schema…",

  // Sessions page
  "sessions.title": "Sessions",
  "sessions.sub": "Active session keys and per-session overrides.",
  "sessions.loading": "Loading…",
  "sessions.activeMinutes": "Active within (minutes)",
  "sessions.limit": "Limit",
  "sessions.includeGlobal": "Include global",
  "sessions.includeUnknown": "Include unknown",
  "sessions.store": "Store: {path}",
  "sessions.noSessions": "No sessions found.",
  "sessions.col.key": "Key",
  "sessions.col.label": "Label",
  "sessions.col.kind": "Kind",
  "sessions.col.updated": "Updated",
  "sessions.col.tokens": "Tokens",
  "sessions.col.thinking": "Thinking",
  "sessions.col.verbose": "Verbose",
  "sessions.col.reasoning": "Reasoning",
  "sessions.col.actions": "Actions",
  "sessions.inherit": "inherit",
  "sessions.delete": "Delete",
  "sessions.optional": "(optional)",

  // Skills page
  "skills.title": "Skills",
  "skills.sub": "Manage skill availability and API key injection.",
  "skills.noSkills": "No skills found.",
  "skills.enabled": "Enabled",
  "skills.disabled": "Disabled",
  "skills.enable": "Enable",
  "skills.disable": "Disable",

  // Nodes page
  "nodes.title": "Nodes",
  "nodes.sub": "Paired devices, capabilities, and command exposure.",
  "nodes.noNodes": "No nodes found.",
  "nodes.capabilities": "Capabilities",
  "nodes.commands": "Commands",

  // Cron page
  "cron.title": "Cron Jobs",
  "cron.sub": "Schedule wakeups and recurring agent runs.",
  "cron.noCron": "No cron jobs configured.",
  "cron.schedule": "Schedule",
  "cron.nextRun": "Next run",
  "cron.lastRun": "Last run",
  "cron.status": "Status",

  // Config page
  "config.title": "Config",
  "config.sub": "Edit ~/.openclaw/openclaw.json safely.",
  "config.save": "Save",
  "config.reset": "Reset",
  "config.saved": "Configuration saved.",
  "config.error": "Failed to save configuration.",

  // Debug page
  "debug.title": "Debug",
  "debug.sub": "Gateway snapshots, events, and manual RPC calls.",
  "debug.snapshot": "Snapshot",
  "debug.events": "Events",
  "debug.rpc": "RPC",

  // Logs page
  "logs.title": "Logs",
  "logs.sub": "Live tail of the gateway file logs.",
  "logs.noLogs": "No logs yet.",
  "logs.follow": "Follow",
  "logs.clear": "Clear",

  // Chat
  "chat.placeholder": "Type a message…",
  "chat.send": "Send",
  "chat.thinking": "Thinking…",
  "chat.newSession": "New Session",

  // Common
  "common.loading": "Loading…",
  "common.error": "Error",
  "common.save": "Save",
  "common.cancel": "Cancel",
  "common.delete": "Delete",
  "common.edit": "Edit",
  "common.close": "Close",
  "common.confirm": "Confirm",
  "common.yes": "Yes",
  "common.no": "No",
  "common.on": "on",
  "common.off": "off",
  "common.enabled": "Enabled",
  "common.disabled": "Disabled",
  "common.na": "n/a",
  "common.ago": "{time} ago",
  "common.never": "never",

  // Settings
  "settings.language": "Language",
  "settings.language.sub": "Choose your preferred language.",
  "settings.theme": "Theme",
  "settings.theme.sub": "Choose your preferred theme.",
  "settings.theme.light": "Light",
  "settings.theme.dark": "Dark",
  "settings.theme.system": "System",

  // WhatsApp
  "whatsapp.title": "WhatsApp",
  "whatsapp.sub": "Link your WhatsApp Web session.",
  "whatsapp.scanQR": "Scan this QR code with WhatsApp on your phone.",
  "whatsapp.linking": "Linking…",
  "whatsapp.linked": "Linked",
  "whatsapp.notLinked": "Not linked",
  "whatsapp.link": "Link",
  "whatsapp.unlink": "Unlink",
  "whatsapp.refresh": "Refresh",

  // Telegram
  "telegram.title": "Telegram",
  "telegram.sub": "Configure your Telegram bot.",
  "telegram.botToken": "Bot Token",
  "telegram.configured": "Configured",
  "telegram.notConfigured": "Not configured",

  // Discord
  "discord.title": "Discord",
  "discord.sub": "Configure your Discord bot.",
  "discord.botToken": "Bot Token",
  "discord.configured": "Configured",
  "discord.notConfigured": "Not configured",

  // Slack
  "slack.title": "Slack",
  "slack.sub": "Configure your Slack integration.",
  "slack.configured": "Configured",
  "slack.notConfigured": "Not configured",

  // Signal
  "signal.title": "Signal",
  "signal.sub": "Configure Signal messaging.",
  "signal.configured": "Configured",
  "signal.notConfigured": "Not configured",

  // iMessage
  "imessage.title": "iMessage",
  "imessage.sub": "Configure iMessage integration.",
  "imessage.configured": "Configured",
  "imessage.notConfigured": "Not configured",

  // Google Chat
  "googlechat.title": "Google Chat",
  "googlechat.sub": "Configure Google Chat integration.",
  "googlechat.configured": "Configured",
  "googlechat.notConfigured": "Not configured",

  // Nostr
  "nostr.title": "Nostr",
  "nostr.sub": "Configure Nostr integration.",
  "nostr.configured": "Configured",
  "nostr.notConfigured": "Not configured",
};

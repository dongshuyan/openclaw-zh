#!/bin/bash
# OpenClaw 源码版启动脚本

PORT=19001
TOKEN="SDjVLK5HsHkDLJNDqHGOHatzKoVlmJK4"
URL="http://127.0.0.1:${PORT}/?token=${TOKEN}"

cd "$(dirname "$0")"

echo "🦞 启动 OpenClaw Gateway (端口 ${PORT})..."

# 后台启动 gateway
pnpm openclaw gateway --port $PORT --verbose &
GATEWAY_PID=$!

# 等待 gateway 启动
sleep 5

# 打开浏览器
echo "🌐 打开 WebUI: ${URL}"
open "$URL"

echo "✅ Gateway 已启动 (PID: $GATEWAY_PID)"
echo "📍 WebUI: ${URL}"
echo "🛑 按 Ctrl+C 停止"

# 前台等待，Ctrl+C 时会终止 gateway
wait $GATEWAY_PID

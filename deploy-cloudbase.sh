#!/bin/bash
# 部署到腾讯云 CloudBase 静态网站托管（国内可访问）
# 用法：
#   ./deploy-cloudbase.sh
#   ./deploy-cloudbase.sh <环境ID>
set -euo pipefail
cd "$(dirname "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:${HOME}/.nvm/versions/node/v22.22.2/bin:${PATH}"

ENV_ID="${1:-}"

echo "==> 安装 / 检查 CloudBase CLI"
if ! command -v tcb >/dev/null 2>&1; then
  npm i -g @cloudbase/cli
fi

echo "==> 登录腾讯云（浏览器会打开）"
tcb login || true

echo "==> 构建静态站（根路径，无 /portfolio 前缀）"
unset BASE_PATH
npm run build

if [ -n "$ENV_ID" ]; then
  echo "==> 部署到环境: ${ENV_ID}"
  tcb hosting deploy out -e "$ENV_ID"
else
  echo "==> 部署（交互选择环境）"
  tcb hosting deploy out
fi

echo ""
echo "========================================"
echo " 部署完成。"
echo " 1. 打开 https://tcb.cloud.tencent.com/dev"
echo " 2. 进入对应环境 -> 静态网站托管"
echo " 3. 复制默认域名，用手机流量打开测试"
echo "========================================"

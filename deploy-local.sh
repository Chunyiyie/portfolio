#!/bin/bash
# 本地一键部署到 Cloudflare Pages（不依赖控制台构建设置）
set -euo pipefail
cd "$(dirname "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:${HOME}/.nvm/versions/node/v22.22.2/bin:${PATH}"

PROJECT_NAME="${1:-wang-yichun-portfolio}"

echo "==> Building static site"
npm run build

echo "==> Checking Cloudflare login"
if ! npx wrangler whoami >/dev/null 2>&1; then
  echo "请在打开的浏览器里登录 Cloudflare"
  npx wrangler login
fi

echo "==> Deploying to Cloudflare Pages: ${PROJECT_NAME}"
npx wrangler pages deploy out --project-name="${PROJECT_NAME}" --commit-dirty=true

echo ""
echo "完成。请用终端打印的 *.pages.dev 链接，在手机上打开测试。"

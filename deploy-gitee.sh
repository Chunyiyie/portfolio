#!/bin/bash
# 部署到 Gitee Pages（国内可访问）
# 用法：
#   ./deploy-gitee.sh <Gitee用户名> <私人令牌>
# 例：
#   ./deploy-gitee.sh ayiyi xxxxxxxxxxxxxxxxxxxxxxxx
set -euo pipefail
cd "$(dirname "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:${HOME}/.nvm/versions/node/v22.22.2/bin:${PATH}"

GITEE_USER="${1:-}"
GITEE_TOKEN="${2:-}"

if [ -z "$GITEE_USER" ] || [ -z "$GITEE_TOKEN" ]; then
  echo "用法："
  echo "  ./deploy-gitee.sh <Gitee用户名> <私人令牌>"
  echo ""
  echo "1) 确认仓库已创建：https://gitee.com/<用户名>/portfolio （公开）"
  echo "2) 私人令牌：头像 -> 设置 -> 安全设置 -> 私人令牌"
  echo "   权限至少勾选：projects"
  echo "3) 再执行上面的命令（令牌粘贴为第二参数，不要交互输入）"
  exit 1
fi

REPO_URL="https://oauth2:${GITEE_TOKEN}@gitee.com/${GITEE_USER}/portfolio.git"
BASE_PATH="/portfolio"

echo "==> 检查远程仓库是否存在"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://gitee.com/${GITEE_USER}/portfolio" || true)
if [ "$HTTP_CODE" = "404" ]; then
  echo "仓库不存在：https://gitee.com/${GITEE_USER}/portfolio"
  echo "请先在 Gitee 网页新建公开仓库 portfolio"
  exit 1
fi

echo "==> 用 basePath=${BASE_PATH} 构建静态站"
BASE_PATH="${BASE_PATH}" npm run build

echo "==> 推送到 Gitee: https://gitee.com/${GITEE_USER}/portfolio.git"
TMP_GIT="/tmp/portfolio-gitee-git-$$"
rm -rf "$TMP_GIT"
git --git-dir="$TMP_GIT" init -b master
git --git-dir="$TMP_GIT" --work-tree="$(pwd)/out" add -A
git --git-dir="$TMP_GIT" --work-tree="$(pwd)/out" \
  -c user.name="${GITEE_USER}" \
  -c user.email="${GITEE_USER}@users.noreply.gitee.com" \
  commit -m "Deploy to Gitee Pages $(date +%Y-%m-%d-%H%M)"
git --git-dir="$TMP_GIT" remote add origin "$REPO_URL"
git --git-dir="$TMP_GIT" push -f origin master

rm -rf "$TMP_GIT"

echo ""
echo "========================================"
echo " 推送完成。请开启 Gitee Pages："
echo " 1. https://gitee.com/${GITEE_USER}/portfolio"
echo " 2. 服务 -> Gitee Pages -> 启动"
echo " 3. 分支 master，目录 /"
echo ""
echo " 访问地址："
echo " https://${GITEE_USER}.gitee.io/portfolio/"
echo "========================================"

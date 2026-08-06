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
  echo "用户名看仓库地址："
  echo "  https://gitee.com/这里就是用户名/portfolio"
  exit 1
fi

API_URL="https://gitee.com/api/v5/repos/${GITEE_USER}/portfolio"
REPO_URL="https://oauth2:${GITEE_TOKEN}@gitee.com/${GITEE_USER}/portfolio.git"
BASE_PATH="/portfolio"

echo "==> 用令牌检查仓库 https://gitee.com/${GITEE_USER}/portfolio"
API_CODE=$(curl -s -o /tmp/gitee-repo-check.json -w "%{http_code}" \
  "${API_URL}?access_token=${GITEE_TOKEN}" || true)

if [ "$API_CODE" != "200" ]; then
  echo "仓库检查失败（HTTP ${API_CODE}）。"
  echo "请打开浏览器确认这两个信息完全一致："
  echo "  1) 仓库地址是：https://gitee.com/${GITEE_USER}/portfolio"
  echo "  2) 私人令牌属于同一个账号，并勾选了 projects 权限"
  echo ""
  echo "若仓库在别的路径（组织/不同用户名），把浏览器地址栏完整链接发我。"
  if [ -f /tmp/gitee-repo-check.json ]; then
    echo "接口返回："
    head -c 400 /tmp/gitee-repo-check.json
    echo ""
  fi
  exit 1
fi

echo "==> 仓库已确认，开始构建 basePath=${BASE_PATH}"
BASE_PATH="${BASE_PATH}" npm run build

echo "==> 推送到 Gitee"
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

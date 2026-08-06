#!/bin/bash
# 部署到 Gitee Pages（国内可访问）
# 用法：
#   ./deploy-gitee.sh <你的Gitee用户名>
# 例：
#   ./deploy-gitee.sh wangyichun
set -euo pipefail
cd "$(dirname "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:${HOME}/.nvm/versions/node/v22.22.2/bin:${PATH}"

GITEE_USER="${1:-}"
if [ -z "$GITEE_USER" ]; then
  echo "请提供 Gitee 用户名："
  echo "  ./deploy-gitee.sh <Gitee用户名>"
  echo ""
  echo "若还没有仓库，先打开 https://gitee.com 新建公开仓库：portfolio"
  exit 1
fi

REPO_URL="https://gitee.com/${GITEE_USER}/portfolio.git"
BASE_PATH="/portfolio"

echo "==> 1) 用 basePath=${BASE_PATH} 构建静态站"
BASE_PATH="${BASE_PATH}" npm run build

echo "==> 2) 推送到 Gitee: ${REPO_URL}"
TMP_GIT="/tmp/portfolio-gitee-git-$$"
rm -rf "$TMP_GIT"
git --git-dir="$TMP_GIT" init -b master
git --git-dir="$TMP_GIT" --work-tree="$(pwd)/out" add -A
git --git-dir="$TMP_GIT" --work-tree="$(pwd)/out" \
  -c user.name="Chunyiyie" \
  -c user.email="1054622758@qq.com" \
  commit -m "Deploy to Gitee Pages $(date +%Y-%m-%d-%H%M)"
git --git-dir="$TMP_GIT" remote add origin "$REPO_URL"

echo "即将推送。若提示登录，请输入 Gitee 用户名和密码/私人令牌。"
git --git-dir="$TMP_GIT" push -f origin master

rm -rf "$TMP_GIT"

echo ""
echo "========================================"
echo " 推送完成。请到 Gitee 开启 Pages："
echo " 1. 打开 https://gitee.com/${GITEE_USER}/portfolio"
echo " 2. 服务 -> Gitee Pages -> 启动"
echo " 3. 部署分支选 master，目录选 /"
echo " 4. 点击启动"
echo ""
echo " 访问地址："
echo " https://${GITEE_USER}.gitee.io/portfolio/"
echo "========================================"

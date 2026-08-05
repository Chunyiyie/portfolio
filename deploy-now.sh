#!/bin/bash
# One-shot: create GitHub repo, push, and deploy to Vercel.
set -euo pipefail
cd "$(dirname "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:${HOME}/.nvm/versions/node/v22.22.2/bin:${PATH}"

echo "==> Checking tools"
command -v git >/dev/null
command -v npm >/dev/null

if ! command -v gh >/dev/null 2>&1; then
  echo "==> Installing GitHub CLI"
  brew install gh
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "==> Login to GitHub (browser will open)"
  gh auth login -p https -w
fi

USERNAME="$(gh api user --jq .login)"
echo "==> GitHub user: ${USERNAME}"

if git remote get-url origin >/dev/null 2>&1; then
  echo "==> Pushing to existing origin"
  git push -u origin main
else
  echo "==> Creating public repo and pushing"
  if gh repo view "${USERNAME}/portfolio" >/dev/null 2>&1; then
    git remote add origin "https://github.com/${USERNAME}/portfolio.git"
    git push -u origin main
  else
    gh repo create portfolio --public --source=. --remote=origin --push
  fi
fi

echo "==> Repo: https://github.com/${USERNAME}/portfolio"

echo "==> Deploying to Vercel"
if ! npx vercel whoami >/dev/null 2>&1; then
  echo "==> Login to Vercel (browser will open)"
  npx vercel login
fi

URL="$(npx vercel deploy --prod --yes)"
echo ""
echo "========================================"
echo "  Public URL: ${URL}"
echo "========================================"

#!/bin/bash
set -euo pipefail
cd /Users/wangyichun/Documents/portfolio
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"
LOG=/Users/wangyichun/Documents/portfolio/deploy.log
exec > >(tee "$LOG") 2>&1
echo "== start $(date) =="

# Ensure gh
if ! command -v gh >/dev/null 2>&1; then
  if command -v brew >/dev/null 2>&1; then
    brew install gh || true
  fi
fi

# Auth check for gh
if command -v gh >/dev/null 2>&1; then
  if ! gh auth status >/dev/null 2>&1; then
    echo "GH_AUTH_NEEDED"
    # Prefer tokenless web login if possible in interactive terminal
    gh auth login -p https -w || true
  fi
  gh auth status || true
fi

# Create repo + push if possible
if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  USERNAME=$(gh api user --jq .login)
  echo "GitHub user: $USERNAME"
  if ! git remote get-url origin >/dev/null 2>&1; then
    gh repo create portfolio --public --source=. --remote=origin --push || {
      # repo may already exist
      git remote add origin "https://github.com/$USERNAME/portfolio.git" 2>/dev/null || git remote set-url origin "https://github.com/$USERNAME/portfolio.git"
      git push -u origin main
    }
  else
    git push -u origin main
  fi
  echo "REPO_URL=https://github.com/$USERNAME/portfolio"
else
  echo "SKIP_GITHUB: gh not authenticated"
fi

# Vercel deploy
if ! command -v vercel >/dev/null 2>&1; then
  npm install -g vercel || true
fi

# Non-interactive deploy if already logged in; otherwise print instructions
if npx vercel whoami >/dev/null 2>&1; then
  URL=$(npx vercel deploy --prod --yes)
  echo "VERCEL_URL=$URL"
else
  echo "VERCEL_AUTH_NEEDED"
  echo "Run: cd /Users/wangyichun/Documents/portfolio && npx vercel login && npx vercel --prod"
fi

echo "== done $(date) =="

# 国内可访问部署说明

`vercel.app` 在国内经常打不开或很慢。本项目已改为静态导出（`out/`），并推送了 `gh-pages` 分支。

## 方案 A（推荐）：腾讯 EdgeOne Pages

国内访问较稳，可直接连接 GitHub。

1. 打开 https://edgeone.ai/pages （或搜索「腾讯云 EdgeOne Pages」）
2. 使用 GitHub 登录并导入仓库 **Chunyiyie/portfolio**
3. 构建设置二选一：
   - **用源码构建**：Build command `npm run build`，Output `out`
   - **直接发布静态分支**：选择分支 `gh-pages`，根目录 `/`，无需构建
4. 部署完成后会得到类似 `https://xxx.edgeone.app` 的链接  
   **手机 + 国内网络**都可打开。

## 方案 B：Cloudflare Pages

1. 打开 https://dash.cloudflare.com → Workers & Pages → Create
2. 连接 GitHub 仓库 `Chunyiyie/portfolio`
3. 构建设置：
   - Build command：`npm run build`
   - Build output directory：`out`
4. 得到 `https://xxx.pages.dev` 链接（多数地区比 Vercel 更稳）

本地一键部署（需先 `npx wrangler login`）：

```bash
cd /Users/wangyichun/Documents/portfolio
npm run deploy:cf
```

## 方案 C：Gitee Pages（国内最稳的免费方案之一）

1. 在 https://gitee.com 新建仓库（如 `portfolio`）
2. 本地执行：

```bash
cd /Users/wangyichun/Documents/portfolio
npm run build
cd out
git init
git add -A
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin https://gitee.com/<你的用户名>/portfolio.git
git push -u origin main
```

3. 仓库页 → 服务 → Gitee Pages → 启动  
4. 得到 `https://<用户名>.gitee.io/portfolio/` 链接

## 现有海外链接（备用）

https://portfolio-flax-tau-30jddi3om8.vercel.app

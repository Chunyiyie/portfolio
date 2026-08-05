# 个人作品集网站

基于 **Next.js + TypeScript + Tailwind CSS** 的单页作品集，内容写在 `src/data/*`，部署到 Vercel 后任何人可通过链接访问。

## 本地开发

```bash
cd /Users/wangyichun/Documents/portfolio
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 修改内容

只改这些文件即可，无需数据库或 CMS：

| 文件 | 内容 |
|------|------|
| `src/data/profile.ts` | 姓名、简介、邮箱、社交链接 |
| `src/data/education.ts` | 教育经历 |
| `src/data/skills.ts` | 技能分组 |
| `src/data/experience.ts` | 工作经历 |
| `src/data/projects.ts` | 作品项目 |
| `public/projects/` | 项目预览图 |

## 部署到 Vercel（公开链接）

1. 在 GitHub 新建仓库（例如 `portfolio`），不要勾选自动生成 README。
2. 在本项目目录执行：

```bash
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/portfolio.git
git push -u origin main
```

3. 打开 [https://vercel.com](https://vercel.com)，用 GitHub 登录。
4. 点击 **Add New… → Project**，导入刚推送的仓库。
5. 保持默认 Framework Preset（Next.js），点击 **Deploy**。
6. 部署完成后会得到类似 `https://portfolio-xxxx.vercel.app` 的公开链接，任何人点击即可查看。

之后每次 `git push`，Vercel 会自动重新部署。

### 可选：自定义域名

在 Vercel 项目 **Settings → Domains** 中绑定你自己的域名即可。

## 常用脚本

```bash
npm run dev    # 本地开发
npm run build  # 生产构建
npm run start  # 本地预览生产构建
npm run lint   # ESLint
```

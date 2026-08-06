# 个人作品集网站

基于 **Next.js + TypeScript + Tailwind CSS** 的单页作品集，内容写在 `src/data/*`，部署到 Vercel 后任何人可通过链接访问。

## 公网 / 手机 / 国内访问

**国内推荐（Gitee Pages）：**  
https://ayiyi_1.gitee.io/portfolio/

开启方式：仓库 [ayiyi_1/portfolio](https://gitee.com/ayiyi_1/portfolio) → 服务 → Gitee Pages → 启动（分支 `master`，目录 `/`）。

海外备用：https://portfolio-flax-tau-30jddi3om8.vercel.app

不要用 EdgeOne Preview / `*.edgeone.cool` 临时链接（手机会 401）。  
其他部署说明见 [deploy-china.md](./deploy-china.md)。

## 本地开发

```bash
cd /Users/wangyichun/Documents/portfolio
npm install
npm run dev
```

电脑浏览器打开 [http://localhost:3000](http://localhost:3000)。  
`localhost` 仅本机可访问，手机请用上方公网链接。

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

本地代码已 commit。在系统自带终端执行：

```bash
cd /Users/wangyichun/Documents/portfolio
./deploy-now.sh
```

脚本会完成 GitHub 登录/建仓/`git push`，以及 Vercel 登录与生产部署，最后打印公开 URL（类似 `https://portfolio-xxxx.vercel.app`）。

### 手动方式（可选）

1. 推送到 GitHub 后，打开 [https://vercel.com](https://vercel.com) 用 GitHub 登录。
2. **Add New… → Project**，导入 `portfolio` 仓库，保持 Next.js 默认设置并 Deploy。

之后每次 `git push`（若已绑定仓库）会自动重新部署。

### 可选：自定义域名

在 Vercel 项目 **Settings → Domains** 中绑定你自己的域名即可。

## 常用脚本

```bash
npm run dev    # 本地开发
npm run build  # 生产构建
npm run start  # 本地预览生产构建
npm run lint   # ESLint
```

# 国内可访问部署（无需 EdgeOne 实名）

EdgeOne 正式域名需要腾讯云实名，认证不了就换下面方案。

## 方案 1：Cloudflare Pages（推荐，一般不用国内实名）

只需邮箱注册 Cloudflare，用 GitHub 导入即可。

1. 打开 https://dash.cloudflare.com 注册/登录（邮箱即可）
2. 左侧进入 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 授权 GitHub，选择仓库 **Chunyiyie/portfolio**
4. 构建设置：
   - Framework preset: **Next.js (Static HTML Export)** 或 None
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`
5. **Save and Deploy**
6. 得到类似地址：

`https://wang-yichun-portfolio.pages.dev`

用**手机流量**打开测试。多数情况比 `vercel.app` / EdgeOne 预览链接更适合分享。

### 本地命令部署（可选）

在电脑终端执行：

```bash
cd /Users/wangyichun/Documents/portfolio
npx wrangler login
npm run deploy:cf
```

浏览器完成 Cloudflare 登录后，会打印公网链接。

---

## 方案 2：Gitee Pages（国内通常最稳，推荐）

1. 打开 https://gitee.com 用手机号注册/登录
2. 新建**公开**仓库，名称必须是：`portfolio`
3. 在电脑终端执行（把用户名换成你的）：

```bash
cd /Users/wangyichun/Documents/portfolio
./deploy-gitee.sh <你的Gitee用户名>
```

4. 打开仓库页 → **服务** → **Gitee Pages** → **启动**
   - 部署分支：`master`
   - 部署目录：`/`
5. 访问：

`https://<你的Gitee用户名>.gitee.io/portfolio/`

说明：脚本会自动用 `/portfolio` 作为路径前缀，避免样式和图片丢失。

---

## 不要用这些给手机分享

- EdgeOne 的 Preview / `edgeone.cool` 临时链接（会 401）
- `localhost`
- 未关闭鉴权的 Vercel 保护链接

## 备用（海外）

https://portfolio-flax-tau-30jddi3om8.vercel.app

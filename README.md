# SOFT-V1

高端企业官网 —— Vue 3 + Vite + Naive UI 构建的响应式企业站点。

本仓库存放的是**构建后的静态产物**（`dist/`），可直接用于静态托管（Nginx、GitHub Pages、Vercel、Netlify、对象存储等）。

## 技术栈

- **框架**：Vue 3
- **构建**：Vite 5
- **UI 库**：Naive UI
- **状态管理**：Pinia
- **路由**：Vue Router 4
- **国际化**：Vue I18n（中 / 英）
- **样式**：Sass

## 功能概览

- 首页：品牌 Banner、核心业务、企业优势、案例轮播、新闻动态
- 关于我们：企业简介、发展历程、团队、荣誉资质、企业文化
- 业务模块：业务分类、业务详情（图文 / 视频）、解决方案、服务流程
- 案例模块：列表筛选、案例详情、案例下载
- 互动模块：在线留言、客服弹窗、预约咨询、招商加盟
- 基础：多语言（中 / 英）、SEO、暗黑模式、响应式、大屏适配

## 目录结构

```
dist/
├── index.html            # 入口页面
├── placeholder.html      # 占位页
├── assets/               # JS / CSS 资源（带 hash 指纹）
└── images/               # 图片、视频、画廊素材
    ├── gallery/
    │   ├── bio/          # 生物方向案例图
    │   ├── dft/          # DFT 方向案例图
    │   ├── md/           # 分子动力学案例图
    │   └── qc/           # 量子化学案例图
    └── ...
```

## 部署

### 方式一：静态服务器（Nginx 示例）

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/soft-v1/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|mp4|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 方式二：本地预览

```bash
# 任一静态服务器都行，举例 serve
npx serve dist
```

### 方式三：GitHub Pages

仓库 Settings → Pages → Source 选 `main` 分支、目录选 `/dist`，保存即可。

## 本地开发

源码不在本仓库。拿到源码后：

```bash
npm install
npm run dev        # 开发模式
npm run build      # 生成 dist/
npm run preview    # 预览构建产物
```

## 浏览器支持

现代浏览器（Chrome / Edge / Firefox / Safari 最新两个大版本）。不支持 IE。

## License

私有项目，未经授权禁止商用。

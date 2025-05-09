# Next.js 应用模板

这是一个基于 Next.js 15（app 目录）和 HeroUI 的现代化应用模板，集成了完整的认证解决方案。

## 技术栈

- [Next.js 15.3.1](https://nextjs.org/docs/getting-started) - React 框架
- [HeroUI v2.4.15](https://heroui.com/) - 现代化 UI 组件库
- [Auth.js](https://authjs.dev/) - 完整的认证解决方案
- [Tailwind CSS 3.4.16](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Tailwind Variants 0.3.0](https://tailwind-variants.org) - 类型安全的组件变体
- [TypeScript 5.6.3](https://www.typescriptlang.org/) - JavaScript 的超集
- [Framer Motion 11.13.1](https://www.framer.com/motion/) - 动画库
- [next-themes 0.4.6](https://github.com/pacocoursey/next-themes) - 主题切换

## 项目结构

```
src/
├── app/                 # Next.js 应用路由目录
│   ├── api/            # API 路由
│   ├── auth/           # 认证相关页面
│   └── (routes)/       # 其他路由页面
├── components/         # 可复用组件
├── styles/            # 全局样式
├── auth.ts            # Auth.js 配置
└── middleware.ts      # 中间件配置
```

## 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm 9.0 或更高版本

### 安装依赖

支持多种包管理器，以下是使用 `npm` 的示例：

```bash
npm install
```

### 环境变量配置

在项目根目录创建 `.env.local` 文件，配置以下环境变量：

```env
# Auth.js 配置
AUTH_SECRET=your-auth-secret
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth 配置
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
```

### 启动开发服务器

```bash
npm run dev
```

## 认证功能

本模板集成了 Auth.js，提供以下功能：

- 多种认证方式支持（邮箱密码、OAuth 等）
- 完整的用户会话管理
- 安全的身份验证流程
- 可定制的登录/注册界面

### 认证配置说明

1. **GitHub OAuth 配置**
   - 访问 [GitHub Developer Settings](https://github.com/settings/developers)
   - 创建新的 OAuth 应用
   - 设置回调 URL 为 `http://localhost:3000/api/auth/callback/github`
   - 复制 Client ID 和 Client Secret 到环境变量

2. **认证中间件**
   - 使用 `middleware.ts` 进行路由保护
   - 可自定义需要认证的路由
   - 支持重定向未认证用户

3. **认证状态管理**
   - 使用 `useSession` hook 获取会话状态
   - 支持客户端和服务器端认证检查
   - 提供 `signIn` 和 `signOut` 方法

## 开发指南

### 添加新页面

1. 在 `src/app` 目录下创建新的路由目录
2. 创建 `page.tsx` 文件作为页面组件
3. 如需添加布局，创建 `layout.tsx` 文件

### 添加新组件

1. 在 `src/components` 目录下创建新的组件文件
2. 使用 TypeScript 和 Tailwind CSS 开发组件
3. 导出组件供其他页面使用

## 部署

本模板支持部署到任何支持 Next.js 的平台，如 Vercel、Netlify 等。

### Vercel 部署

1. 将代码推送到 Git 仓库
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署项目

## 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT

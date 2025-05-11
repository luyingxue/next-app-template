/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir 配置已不再需要，因为 Next.js 15 默认启用了 App Router
  },
  eslint: {
    // 在生产构建时忽略 ESLint 错误
    ignoreDuringBuilds: false,
    // 指定要检查的目录
    dirs: ['src']
  }
}

// 设置环境变量来屏蔽 Node.js 废弃警告
process.env.NODE_OPTIONS = '--no-deprecation';

module.exports = nextConfig;

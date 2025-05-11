import { notFound } from 'next/navigation'

/**
 * 动态路由示例
 * 
 * 1. 文件路径说明：
 *    - 文件夹名 [slug] 表示这是一个动态路由
 *    - 访问 /blog/任意值 都会匹配到这个页面
 *    - 例如：/blog/first-post, /blog/hello-world 等
 * 
 * 2. 参数获取：
 *    - params 是一个 Promise，需要使用 await 获取
 *    - 解构 { slug } 获取 URL 中的动态值
 *    - 例如：访问 /blog/first-post 时，slug = 'first-post'
 * 
 * 3. 页面组件：
 *    - 必须使用 async 函数
 *    - 可以处理异步操作（如数据获取）
 *    - 可以返回 JSX 或 null
 */

// 模拟博客文章数据
const posts: Record<string, { title: string }> = {
  'first-post': { title: '第一篇博客文章' },
  'second-post': { title: '第二篇博客文章' }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // 获取动态路由参数
  const { slug } = await params
  
  // 根据 slug 获取文章数据
  const post = posts[slug]

  // 如果文章不存在，返回 404
  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
} 
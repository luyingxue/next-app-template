import Link from 'next/link'

// 模拟博客文章数据
const posts = [
  { slug: 'first-post', title: '第一篇博客文章' },
  { slug: 'second-post', title: '第二篇博客文章' }
]

export default function BlogList() {
  return (
    <div>
      <h1>博客文章列表</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
} 
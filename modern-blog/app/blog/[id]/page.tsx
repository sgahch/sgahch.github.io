'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft, Heart, MessageCircle, Share2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/navigation'
import ParticleBackground from '@/components/particle-background'

// 模拟文章数据
const blogPost = {
  id: 1,
  title: "构建现代化的React应用",
  content: `
# 构建现代化的React应用

React 18 带来了许多令人兴奋的新特性，这些特性不仅提升了开发体验，还显著改善了应用性能。在这篇文章中，我们将深入探讨这些新特性，并学习如何在实际项目中应用它们。

## 并发渲染 (Concurrent Rendering)

并发渲染是React 18最重要的特性之一。它允许React在渲染过程中暂停和恢复工作，从而保持应用的响应性。

\`\`\`javascript
import { startTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setCount(c => c + 1);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        Count: {count}
      </button>
      {isPending && <div>Loading...</div>}
    </div>
  );
}
\`\`\`

## Suspense 的改进

React 18 对 Suspense 进行了重大改进，现在它不仅支持代码分割，还支持数据获取。

\`\`\`jsx
function ProfilePage() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileDetails />
      <Suspense fallback={<PostsSkeleton />}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}
\`\`\`

## Server Components

Server Components 允许我们在服务器上渲染组件，减少客户端的JavaScript包大小。

\`\`\`jsx
// 这是一个Server Component
async function BlogPost({ id }) {
  const post = await fetchPost(id);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

## 最佳实践

1. **合理使用并发特性**: 不是所有的状态更新都需要使用 \`startTransition\`
2. **优化Suspense边界**: 在合适的位置设置Suspense边界
3. **渐进式采用**: 可以逐步在现有项目中采用新特性

## 总结

React 18 的这些新特性为我们构建更好的用户体验提供了强大的工具。通过合理使用这些特性，我们可以创建更快、更流畅的应用。

记住，技术的价值在于解决实际问题。在采用新特性时，要始终考虑它们是否真正改善了用户体验。
  `,
  date: "2024-01-15",
  readTime: "8 分钟",
  author: "张三",
  image: "/modern-react-development.png",
  tags: ["React", "JavaScript", "前端开发"],
  category: "技术"
}

const comments = [
  {
    id: 1,
    author: "李四",
    content: "非常详细的文章！React 18的并发特性确实很强大，我在项目中使用后性能提升明显。",
    date: "2024-01-16",
    likes: 12
  },
  {
    id: 2,
    author: "王五",
    content: "Server Components的概念很有趣，期待更多相关的实践案例分享。",
    date: "2024-01-17",
    likes: 8
  }
]

export default function BlogPostPage() {
  const params = useParams()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回博客列表
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={blogPost.image || "/placeholder.svg"} 
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <Badge className="mb-4 bg-blue-500/80 text-white">
              {blogPost.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blogPost.readTime}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="outline"
                  className="border-blue-400/30 text-blue-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="border-white/20 text-gray-300 hover:bg-white/10">
                <Heart className="h-4 w-4 mr-2" />
                点赞
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-gray-300 hover:bg-white/10">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            className="prose prose-lg prose-invert max-w-none mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div 
                className="text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: blogPost.content
                    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-6 mt-8">$1</h1>')
                    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mb-4 mt-6">$2</h2>')
                    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mb-3 mt-4">$3</h3>')
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"><code class="text-green-400">$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-green-400 px-2 py-1 rounded">$1</code>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>')
                    .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
                }}
              />
            </div>
          </motion.article>

          {/* Comments Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  评论 ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Comment Form */}
                <div className="space-y-4">
                  <Input 
                    placeholder="您的姓名"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <Textarea 
                    placeholder="写下您的评论..."
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                  />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    发表评论
                  </Button>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {comment.author[0]}
                          </div>
                          <span className="text-white font-medium">{comment.author}</span>
                          <span className="text-gray-400 text-sm">{comment.date}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Heart className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </Button>
                      </div>
                      <p className="text-gray-300">{comment.content}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

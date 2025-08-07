'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Calendar, Clock, ArrowRight, Filter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/navigation'
import ParticleBackground from '@/components/particle-background'

const blogPosts = [
  {
    id: 1,
    title: "构建现代化的React应用",
    excerpt: "探索React 18的新特性，包括并发渲染、Suspense和Server Components等前沿技术。深入了解如何利用这些特性来构建更高效、更用户友好的应用程序。",
    date: "2024-01-15",
    readTime: "8 分钟",
    author: "张三",
    image: "/modern-react-development.png",
    tags: ["React", "JavaScript", "前端开发"],
    category: "技术"
  },
  {
    id: 2,
    title: "深入理解TypeScript高级类型",
    excerpt: "掌握TypeScript的高级类型系统，提升代码的类型安全性和开发效率。从泛型到条件类型，从映射类型到模板字面量类型。",
    date: "2024-01-10",
    readTime: "12 分钟",
    author: "张三",
    image: "/typescript-advanced-types.png",
    tags: ["TypeScript", "编程", "类型系统"],
    category: "技术"
  },
  {
    id: 3,
    title: "Next.js 14 全栈开发指南",
    excerpt: "从零开始学习Next.js 14，包括App Router、Server Actions和最新的性能优化技巧。构建现代化的全栈应用。",
    date: "2024-01-05",
    readTime: "15 分钟",
    author: "张三",
    image: "/nextjs-fullstack-guide.png",
    tags: ["Next.js", "全栈开发", "React"],
    category: "技术"
  },
  {
    id: 4,
    title: "CSS Grid 与 Flexbox 的完美结合",
    excerpt: "学习如何巧妙地结合CSS Grid和Flexbox来创建复杂而灵活的布局。掌握现代CSS布局的最佳实践。",
    date: "2023-12-28",
    readTime: "10 分钟",
    author: "张三",
    image: "/css-grid-flexbox-layout.png",
    tags: ["CSS", "布局", "前端"],
    category: "设计"
  },
  {
    id: 5,
    title: "JavaScript 性能优化实战",
    excerpt: "深入探讨JavaScript性能优化的各种技巧和策略，从代码层面到运行时优化，让你的应用飞起来。",
    date: "2023-12-20",
    readTime: "14 分钟",
    author: "张三",
    image: "/javascript-performance.png",
    tags: ["JavaScript", "性能优化", "前端"],
    category: "技术"
  },
  {
    id: 6,
    title: "设计系统的构建与维护",
    excerpt: "如何从零开始构建一个可扩展的设计系统，包括组件库、设计令牌和文档管理的最佳实践。",
    date: "2023-12-15",
    readTime: "11 分钟",
    author: "张三",
    image: "/design-system-components-ui.png",
    tags: ["设计系统", "UI/UX", "组件"],
    category: "设计"
  }
]

const categories = ["全部", "技术", "设计", "思考"]
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '全部' || post.category === selectedCategory
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag))
    
    return matchesSearch && matchesCategory && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.section
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              博客文章
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              分享技术见解、设计思考和开发经验
            </p>
          </motion.section>

          {/* Search and Filters */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="搜索文章..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  分类
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category 
                        ? "bg-blue-500 hover:bg-blue-600 text-white" 
                        : "border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h3 className="text-white font-semibold mb-3">标签</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? "bg-purple-500 hover:bg-purple-600 text-white"
                          : "border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Blog Posts Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image || "/placeholder.svg"} 
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-blue-500/80 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag}
                            variant="outline"
                            className="border-blue-400/30 text-blue-300 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="ghost" className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 w-full">
                        <Link href={`/blog/${post.id}`}>
                          阅读更多 <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-lg">没有找到匹配的文章</p>
              </motion.div>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  )
}

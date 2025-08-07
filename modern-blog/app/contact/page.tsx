'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import ParticleBackground from '@/components/particle-background'

const contactInfo = [
  {
    icon: Mail,
    title: "邮箱",
    value: "hello@example.com",
    href: "mailto:hello@example.com"
  },
  {
    icon: Phone,
    title: "电话",
    value: "+86 138 0000 0000",
    href: "tel:+8613800000000"
  },
  {
    icon: MapPin,
    title: "位置",
    value: "中国 · 北京",
    href: "#"
  }
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com",
    color: "hover:text-gray-300"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-sky-400"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.section
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              联系我
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              有任何问题或想法？我很乐意与您交流。让我们一起创造些什么吧！
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">发送消息</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          name="name"
                          type="text"
                          placeholder="您的姓名"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="您的邮箱"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        name="subject"
                        type="text"
                        placeholder="主题"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Textarea
                        name="message"
                        placeholder="您的消息..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            发送中...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="h-5 w-5 mr-2" />
                            发送消息
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Details */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">联系信息</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                        onClick={() => info.href !== '#' && window.open(info.href, '_blank')}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{info.title}</h3>
                          <p className="text-gray-300">{info.value}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">社交媒体</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:bg-white/20`}
                        >
                          <Icon className="h-8 w-8" />
                        </motion.a>
                      )
                    })}
                  </div>
                  <p className="text-center text-gray-400 mt-6">
                    关注我的社交媒体，获取最新动态
                  </p>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-white text-xl font-semibold mb-4">快速回复</h3>
                <p className="text-gray-300 mb-4">
                  我通常会在24小时内回复您的消息。如果您有紧急事务，请通过电话联系我。
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">当前在线</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

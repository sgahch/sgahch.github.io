'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Code, Database, Globe, Smartphone, Zap, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Navigation from '@/components/navigation'
import ParticleBackground from '@/components/particle-background'

const skills = [
  { name: 'JavaScript', level: 95, icon: Code },
  { name: 'React', level: 90, icon: Globe },
  { name: 'TypeScript', level: 85, icon: Code },
  { name: 'Next.js', level: 88, icon: Globe },
  { name: 'Node.js', level: 80, icon: Database },
  { name: 'CSS/Sass', level: 92, icon: Smartphone },
]

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.section
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  关于我
                </motion.h1>
                <motion.div
                  className="text-lg text-gray-300 space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p>
                    你好！我是一名充满热情的前端开发工程师，专注于创建美观、高效的用户界面和用户体验。
                  </p>
                  <p>
                    我热爱探索新技术，享受将创意转化为现实的过程。在这个快速发展的技术世界中，
                    我始终保持学习的心态，不断提升自己的技能。
                  </p>
                  <p>
                    除了编程，我还喜欢设计、摄影和音乐。我相信技术与艺术的结合能够创造出更加
                    令人惊叹的作品。
                  </p>
                </motion.div>
              </div>
              
              {/* 3D Avatar */}
              <motion.div
                className="lg:w-1/2 h-96"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <AnimatedSphere />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </motion.div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              技能专长
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center space-x-3 text-white">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-6 w-6 text-blue-400" />
                          </motion.div>
                          <span>{skill.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-gray-300">
                            <span>熟练度</span>
                            <span>{skill.level}%</span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                          >
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              我的价值观
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: '持续学习',
                  description: '技术日新月异，保持学习的热情是成长的关键。'
                },
                {
                  icon: Heart,
                  title: '用户至上',
                  description: '始终以用户体验为中心，创造有价值的产品。'
                },
                {
                  icon: Globe,
                  title: '开放协作',
                  description: '相信团队合作的力量，乐于分享知识和经验。'
                }
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 text-center h-full">
                      <CardHeader>
                        <motion.div
                          className="mx-auto mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="h-12 w-12 text-blue-400" />
                        </motion.div>
                        <CardTitle className="text-white">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

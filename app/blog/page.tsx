"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Eye } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readingTime: number
  views: number
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/api/posts")
      const data = await res.json()
      setBlogs(data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return <p className="pt-32 text-center">Loading...</p>
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 space-y-12">

        <Link href="/" className="flex items-center gap-2 text-zinc-400">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold">Writing</h1>

        <div className="space-y-12">
          {blogs.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-bold group-hover:text-zinc-600">
                {post.title}
              </h2>

              <p className="text-zinc-500 mt-2">{post.excerpt}</p>

              <div className="flex items-center gap-4 text-xs text-zinc-400 mt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readingTime} min
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {post.views}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}

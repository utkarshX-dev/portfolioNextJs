"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react"
import MarkdownRenderer from "@/components/MarkdownRenderer"

interface BlogPost {
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readingTime: number
  views: number
}

export default function BlogPostReader() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      const res = await fetch(`/api/posts/${slug}`)
      const data = await res.json()
      setPost(data)

      fetch(`/api/posts/${slug}/view`, { method: "POST" })
    }

    fetchPost()
  }, [slug])

  if (!post) {
    return <p className="pt-32 text-center">Loading...</p>
  }

  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 space-y-12">

        <Link href="/blog" className="flex items-center gap-2 text-zinc-400">
          <ArrowLeft className="w-4 h-4" /> All writing
        </Link>

        <header className="space-y-6">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="text-xl text-zinc-500">{post.excerpt}</p>

          <div className="flex gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingTime} min
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" /> {post.views}
            </span>
          </div>
        </header>

        {/* 🔥 MARKDOWN RENDERED HERE */}
        <MarkdownRenderer content={post.content} />

        <footer className="pt-16 border-t space-y-4">
          <div className="flex gap-2 flex-wrap">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800">
                #{tag}
              </span>
            ))}
          </div>
        </footer>

      </div>
    </main>
  )
}

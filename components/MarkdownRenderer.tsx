"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import "highlight.js/styles/github-dark.css"

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="prose prose-zinc prose-lg max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          code({ className, children, ...props }) {
            const isBlock = Boolean(className)

            if (!isBlock) {
              return (
                <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                  {children}
                </code>
              )
            }

            return (
              <pre className="rounded-lg overflow-x-auto">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}

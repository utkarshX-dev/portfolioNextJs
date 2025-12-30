"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import "highlight.js/styles/github-dark.css"

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="prose prose-zinc prose-xl max-w-none dark:prose-invert">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          code({ className, children }) {
            const isBlock = className?.includes("language-")
            return isBlock ? (
              <pre>
                <code className={className}>{children}</code>
              </pre>
            ) : (
              <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}

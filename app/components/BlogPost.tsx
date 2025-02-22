import React from 'react'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  content: string
  date: string
  tags: string[]
  id?: string
  isExcerpt?: boolean
}

export default function BlogPost({ title, content, date, tags, id, isExcerpt = true }: BlogPostProps) {
  return (
    <article className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        {isExcerpt && id ? (
          <Link href={`/blog/${id}`} className="hover:text-blue-800">
            {title}
          </Link>
        ) : (
          title
        )}
      </h1>
      <p className="text-gray-600 mb-4">{date}</p>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose max-w-none">
        {content}
        {isExcerpt && id && (
          <p className="mt-4">
            <Link href={`/blog/${id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </Link>
          </p>
        )}
      </div>
    </article>
  )
}


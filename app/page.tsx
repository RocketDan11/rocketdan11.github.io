import BlogPost from './components/BlogPost'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getSortedPostsData();
  const latestPosts = posts.slice(0, 3); // Show only the 3 most recent posts

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8 text-blue-600">Spread the World</h1>
          <p className="text-xl mb-8">Bringing computer literacy to disenfranchised Mesoamericans</p>
          <Link 
            href="/donate" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Support Our Mission
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>
          {latestPosts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              content={post.excerpt}
              tags={post.tags}
              isExcerpt={true}
            />
          ))}
          {latestPosts.length > 0 && (
            <div className="text-center mt-8">
              <Link 
                href="/blog" 
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More Posts →
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}


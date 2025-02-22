import BlogPost from '../components/BlogPost';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Blog</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              content={post.excerpt}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

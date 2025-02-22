import { getPostData, getAllPostIds } from '@/lib/posts';
import Markdown from 'markdown-to-jsx';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.date}</p>
          <div className="mb-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="prose max-w-none">
            <Markdown>{post.content}</Markdown>
          </div>
        </article>
      </div>
    </main>
  );
}

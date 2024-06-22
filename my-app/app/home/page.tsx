import { getAllPages } from '../../lib/notion/getAllPages';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
  const postsProperties = await getAllPages();

  return (
    <div className="container mx-auto">
      <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:w-5/6 mx-auto">
        <h1 className="text-md  md:text-xl font-bold mb-6">ブログ一覧</h1>
        <div className="grid gap-8 p-3 md:p-10 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {postsProperties.map((post, index) => (
            <Link
              href={`/blog/${post.id}`}
              key={index}
              className="border rounded-lg p-10 shadow-lg transition-shadow hover:shadow-xl"
            >
              <h2 className="text-sm  sm:text-md  md:text-lg font-semibold mb-2">
                {post.title}
              </h2>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="mr-2 bg-gray-800 px-2 py-1 rounded-2xl text-xs hidden sm:block text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p>person: {post.person}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

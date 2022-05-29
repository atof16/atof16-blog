import Link from 'next/link';
import { client } from '../../lib/client';

export default function Blog({ blog }) {
  return (
    <div>
      <h1>Blog</h1>
      <div>this is blog page!!</div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};

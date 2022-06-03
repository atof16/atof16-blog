import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { client } from '../../lib/client';
import styles from './Blog.module.css';

export default function Blog({ blog }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.blogContainer}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <div>
          <ul className={styles.blogArticles}>
            {blog.map((blog) => (
              <li key={blog.id} className={styles.blogArticle}>
                <Link href={`/blog/${blog.id}`}>
                  <a>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                    <div className={styles.blogPublishedAt}>
                      <Date dateString={blog.publishedAt} />
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
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

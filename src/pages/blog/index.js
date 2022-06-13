import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { Pagination } from '../../components/pagination';
import { client } from '../../lib/client';
import styles from './Blog.module.css';

export default function Blog({ blog, totalCount }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.blogContainer}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <ul className={styles.blogArticles}>
          {blog.map((blog) => {
            return (
              <li key={blog.id} className={styles.blogArticle}>
                <Link href={`/blog/${blog.id}`}>
                  <a className={styles.blogArticleLink}>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                  </a>
                </Link>
                <div className={styles.blogTags}>
                  {blog.tags.map((tag) => {
                    return (
                      <li key={tag.id} className={styles.blogTag}>
                        <Link href={`/blog/tag/${tag.id}`}>
                          <a className={styles.blogTagLink}>#{tag.id}</a>
                        </Link>
                      </li>
                    );
                  })}
                </div>
                <div className={styles.blogPublishedAt}>
                  <Date dateString={blog.publishedAt} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Pagination
        totalCount={totalCount}
        maxPageNumber={Math.ceil(totalCount / 5)}
        currentPageNumber={1}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const queries = { limit: 20, offset: 0, limit: 5 };
  const data = await client.get({ endpoint: 'blog', queries: queries });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { client } from '../../lib/client';
import markdownTohtml from '../../lib/transpiler';
import styles from './BlogId.module.css';

export default function BlogId({ blog }) {
  return (
    <Layout>
      <div className={styles.blogArticleContainer}>
        <div className={styles.blogArticleInfo}>
          <h2 className={styles.blogArticleTitle}>{blog.title}</h2>
          <div className={styles.blogArticlePublishedAt}>
            <Date dateString={blog.publishedAt} />
          </div>
        </div>
        <div
          className={styles.blogArticleBody}
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
        <Link href='/blog'>
          <a className={styles.backToBlogTop}>←ブログ一覧へ戻る</a>
        </Link>
      </div>
    </Layout>
  );
}

// path生成
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// dataの受け渡し
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });
  const bodyHTML = await markdownTohtml(data.body);
  const content = bodyHTML.toString();
  const postData = { ...data, content };

  return {
    props: {
      blog: postData,
    },
  };
};

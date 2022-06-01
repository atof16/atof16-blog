import Head from 'next/head';
import Layout from '../../components/layout';
import styles from './Works.module.css';

export default function Works() {
  return (
    <Layout>
      <Head>
        <title>Works</title>
      </Head>
      <div className={styles.worksContainer}>
        <h2 className={styles.pageTitle}>Works</h2>
        <div>作ったもの</div>
      </div>
    </Layout>
  );
}

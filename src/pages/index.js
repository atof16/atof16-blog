import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Atof16 blog</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.messages}>
          <h1 className={styles.helloWorld}>Hello World!</h1>
          <p className={styles.welcomeMessage}>Welcome to Atof16 home page!</p>
        </div>
      </div>
    </Layout>
  );
}

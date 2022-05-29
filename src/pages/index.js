import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atof16 blog</title>
      </Head>
      <div className={styles.messages}>
        <h1 className={styles.helloWorld}>Hello World!</h1>
        <p className={styles.welcomeMessage}>Welcome to Atof16 home page!</p>
      </div>
      <nav>
        <div className={styles.contents}>
          <Link href='/blog'>
            <a className={styles.content}>Blog</a>
          </Link>
          <Link href='/profile'>
            <a className={styles.content}>Profile</a>
          </Link>
          <Link href='/works'>
            <a className={styles.content}>Works</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

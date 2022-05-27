import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atof16 blog</title>
      </Head>
      <h1 className='title'>Hello World!</h1>
      <p>Welcome to Atof16 home page!</p>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/profile'>
        <a>Profile</a>
      </Link>
      <Link href='/works'>
        <a>Works</a>
      </Link>
    </div>
  );
}

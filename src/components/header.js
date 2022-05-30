import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            <li className={styles.headerItem}>
              <Link href='/'>
                <a className={styles.headerItemLink}>Home</a>
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link href='/blog'>
                <a className={styles.headerItemLink}>Blog</a>
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link href='/profile'>
                <a className={styles.headerItemLink}>Profile</a>
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link href='/works'>
                <a className={styles.headerItemLink}>Works</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { MdPerson, MdHome, MdOutlineTextSnippet, MdStarBorder } from 'react-icons/md';
import styles from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            <li className={styles.logo}>
              <Link href='/'>
                <a className={styles.logoLink}>Atof16.dev</a>
              </Link>
              <Link href='/'>
                <a>
                  <MdHome className={styles.headerItemIcon} size={35} />
                </a>
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link href='/blog'>
                <a className={styles.headerItemLink}>Blog</a>
              </Link>
              <Link href='/blog'>
                <a>
                  <MdOutlineTextSnippet className={styles.headerItemIcon} size={35} />
                </a>
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link href='/profile'>
                <a className={styles.headerItemLink}>Profile</a>
              </Link>
              <Link href='/profile'>
                <a>
                  <MdPerson className={styles.headerItemIcon} size={35} />
                </a>
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link href='/works'>
                <a className={styles.headerItemLink}>Works</a>
              </Link>
              <Link href='/works'>
                <a>
                  <MdStarBorder className={styles.headerItemIcon} size={35} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

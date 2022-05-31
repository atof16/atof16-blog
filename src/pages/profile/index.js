import Layout from '../../components/layout';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <Layout>
      <div className={styles.profileContainer}>
        <h2 className={styles.pageTitle}>About me</h2>
        <p>大学生です。</p>
        <p>最近はJavascript, React, Next.jsを勉強してます。</p>
      </div>
    </Layout>
  );
}

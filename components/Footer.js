import styles from '@/app/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine}></div>
      <p>&copy; {new Date().getFullYear()} The Chewy House &nbsp;&middot;&nbsp; Handcrafted with love</p>
    </footer>
  );
}

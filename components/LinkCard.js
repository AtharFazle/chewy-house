import styles from '@/app/page.module.css';

export default function LinkCard({ href, icon, label, title }) {
  return (
    <a className={styles.card} href={href} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardIcon}>
        {icon}
      </div>
      <div className={styles.cardText}>
        <div className={styles.cardLabel}>{label}</div>
        <div className={styles.cardTitle}>{title}</div>
      </div>
      <div className={styles.cardArrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}


import styles from '@/app/page.module.css';

export default function Background() {
  return (
    <div className={styles.bgLayer}>
      <img
        className={styles.bgPhoto}
        src="/cake.webp"
        alt="Premium chewy cookies by The Chewy House"
        sizes="100vw"
      />
      <div className={styles.bgGradient}></div>
      <div className={styles.bgGrain}></div>
    </div>
  );
}

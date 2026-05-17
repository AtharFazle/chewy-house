import styles from '@/app/page.module.css';

export default function Emblem() {
  return (
    <div className={styles.emblem}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E8C97A"/>
            <stop offset="50%" stopColor="#C9A84C"/>
            <stop offset="100%" stopColor="#8A6B2A"/>
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle cx="40" cy="40" r="36" stroke="url(#g1)" strokeWidth="1" opacity=".6"/>
        {/* Petal pattern (8 petals) */}
        <g transform="translate(40,40)">
          <ellipse rx="7" ry="18" fill="none" stroke="url(#g1)" strokeWidth="1.2" opacity=".8"/>
          <ellipse rx="7" ry="18" fill="none" stroke="url(#g1)" strokeWidth="1.2" opacity=".8" transform="rotate(45)"/>
          <ellipse rx="7" ry="18" fill="none" stroke="url(#g1)" strokeWidth="1.2" opacity=".8" transform="rotate(90)"/>
          <ellipse rx="7" ry="18" fill="none" stroke="url(#g1)" strokeWidth="1.2" opacity=".8" transform="rotate(135)"/>
        </g>
        {/* Center dot */}
        <circle cx="40" cy="40" r="3" fill="url(#g1)"/>
      </svg>
    </div>
  );
}

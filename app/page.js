import styles from "./page.module.css";
import Background from "@/components/Background";
import Emblem from "@/components/Emblem";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";
import {
  WhatsAppIcon,
  InstagramIcon,
  ShopeeIcon,
  GrabIcon,
} from "@/components/Icons";

const links = [
  {
    href: "https://wa.me/6281772389280?text=halo+admin+apakah+kuenya+ada%3F",
    icon: <WhatsAppIcon />,
    label: "Chat & Order",
    title: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/thechewyhouse/",
    icon: <InstagramIcon />,
    label: "Follow Us",
    title: "Instagram",
  },
  {
    href: "https://spf.shopee.co.id/70GWJsQT28",
    icon: <ShopeeIcon />,
    label: "Shop Online",
    title: "Shopee",
  },
  {
    href: "https://r.grab.com/g/6-20260514_141208_1b458fb529664a39973fad5a47644087_MEXMPS-6-C73ECKBKGYAAEA",
    icon: <GrabIcon />,
    label: "Fast Delivery",
    title: "GrabFood",
  },
];

export default function Home() {
  return (
    <>
      <Background />

      <main className={styles.page}>
        <div className={styles.ornament}>Premium Chewy Cookies</div>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <Emblem />
          <h1 className={styles.brandName}>
            <span>CHEWY </span>HOUSE
          </h1>
          <p className={styles.brandSub}>Premium Chewy Cookies</p>
        </div>

        <p className={styles.tagline}>
          Crafted with love, baked to perfection — every bite, a luxury.
        </p>

        <div className={styles.goldLine}></div>

        {/* Link Cards */}
        <nav className={styles.cards} aria-label="Social & Order Links">
          {links.map((link) => (
            <LinkCard
              key={link.title}
              href={link.href}
              icon={link.icon}
              label={link.label}
              title={link.title}
            />
          ))}
        </nav>

        <Footer />
      </main>
    </>
  );
}

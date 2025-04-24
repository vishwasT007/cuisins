import styles from "./HeroSection.module.css";
import HeroContent from "./HeroContent";
import CustomerProof from "./CustomerProof";

export default function HeroSection() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.heroContentWrapper}>
        <HeroContent />
        <CustomerProof />
      </div>
    </section>
  );
}

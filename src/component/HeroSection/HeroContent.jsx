import styles from "./HeroContent.module.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function HeroContent() {
  return (
    <div className={styles.heroGroup}>
      <HeroText />
      <HeroImage />
    </div>
  );
}

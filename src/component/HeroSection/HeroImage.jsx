import desktopImage from "@/assets/hero/meals.jpg";
import mobileImage from "@/assets/hero/burger.jpg";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.heroImgWrapper}>
      <img
        src={desktopImage}
        alt="Healthy meals"
        className={styles.desktopImage}
      />
      <img
        src={mobileImage}
        alt="Healthy meals mobile"
        className={styles.mobileImage}
      />
    </div>
  );
}

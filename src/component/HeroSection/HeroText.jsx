import styles from "./HeroText.module.css";
import MealTypesMarquee from "./MealTypesMarquee";
import Button from "../Button/Button";

export default function HeroText() {
  return (
    <div className={styles.heroTextWrapper}>
      <h1 className={styles.heroHeading}>
        A healthy meal delivered to your door,
        <span>every single day</span>
      </h1>
      <p className={styles.heroDescription}>
        The smart 365-days-per-year food subscription that will make you
        <span>eat healthy again</span>. Tailored to your
        <span>personal tastes and nutritional needs</span>.
      </p>
      <MealTypesMarquee />
      <div className={styles.heroButtons}>
        <Button variant="outline">Learn More</Button>
        <Button variant="solid">Get Started</Button>
      </div>
    </div>
  );
}

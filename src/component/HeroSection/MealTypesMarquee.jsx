import styles from "./MealTypesMarquee.module.css";

const mealTypes = [
  { name: "Paleo", className: styles.paleo },
  { name: "Vegan", className: styles.vegan },
  { name: "Gluten-Free", className: styles.gluten },
  { name: "Lactose-Free", className: styles.lactose },
  { name: "Pescatarian", className: styles.pesca },
  { name: "Vegetarian", className: styles.vegetarian },
  { name: "Keto", className: styles.keto },
  { name: "Low FODMAP", className: styles.fodmap },
  { name: "Kid-Friendly", className: styles.kid },
];

export default function MealTypesMarquee() {
  // Duplicate the array for seamless animation
  const duplicatedMealTypes = [...mealTypes, ...mealTypes];

  return (
    <div className={styles.heroMarquee}>
      <ul className={`${styles.mealTypesList} ${styles.marqueeAnimation}`}>
        {duplicatedMealTypes.map((type, index) => (
          <li key={`${type.name}-${index}`} className={type.className}>
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

import styles from "./Button.module.css";

export default function Button({
  variant = "solid",
  size = "medium", // Add size prop
  children,
  className = "",
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  );
}

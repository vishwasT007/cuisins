import { FaBars } from "react-icons/fa";
import styles from "./MobileNavBtn.module.css";

function MobileNavButton() {
  return (
    <button className={styles.mobileNavButton}>
      <FaBars />
    </button>
  );
}

export default MobileNavButton;

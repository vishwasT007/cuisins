import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

export default function Logo() {
  return <img src={logo} alt="Cusin Logo" className={styles.logo} />;
}

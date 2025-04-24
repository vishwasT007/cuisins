import { FaArrowRight } from "react-icons/fa";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Nav from "../nav/Nav";
import Button from "../Button/Button";
function Header({ isSticky }) {
  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <Logo />
      <Nav />
      <Button variant="solid" className={styles.headerButton}>
        Order Now <FaArrowRight />
      </Button>
    </header>
  );
}

export default Header;

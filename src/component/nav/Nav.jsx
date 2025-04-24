import styles from "./Nav.module.css";
import MobileNavButton from "./MobileNavBtn";
function Nav() {
  return (
    <nav>
      <ul className={styles.mainNavList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <MobileNavButton />
    </nav>
  );
}

export default Nav;

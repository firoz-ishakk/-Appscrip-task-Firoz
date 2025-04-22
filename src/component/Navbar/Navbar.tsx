import styles from "./Navbar.module.css";
import NavbarLower from "./NavbarSection/NavbarLower";
import NavBarMid from "./NavbarSection/NavBarMid";
import NavbarUpper from "./NavbarSection/NavbarUpper";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavbarUpper />
      <NavBarMid />
      <NavbarLower/>
    </div>
  );
}

export default Navbar;

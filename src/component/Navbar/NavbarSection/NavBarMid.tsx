import React from "react";
import styles from "../Navbar.module.css";

function NavBarMid() {
  return (
    <div className={styles.midUpperSection}>
      <div className={styles.leftSection}>
        <img src="hamburger.png" alt="menu" className={styles.hamburger} />
        <img src="Vector.png" alt="logo" className={styles.logoIcon} />
      </div>

      <div className={styles.name}>LOGO</div>

      <div className={styles.rightSection}>
        <img src="search-normal.png" height={20} alt="search" className={styles.icon} />
        <img src="heart.png" height={20} alt="wishlist" className={styles.icon} />
        <img src="shopping-bag.png" height={20} alt="cart" className={styles.icon} />
        <img src="profile.png" height={20} alt="cart" className={styles.Mobileicon} />
        <img src="Language.png"  alt="cart" className={styles.Mobileicon} />
      </div>
    </div>
  );
}

export default NavBarMid;
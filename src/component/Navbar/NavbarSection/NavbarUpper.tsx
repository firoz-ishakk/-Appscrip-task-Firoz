import React from 'react'
import styles from "../Navbar.module.css";


function NavbarUpper() {
  return (
    <div>

    <div className={styles.topNavbar}>
    <div className={styles.navbarContent}>
      <div className={`${styles.navbarItem} ${styles.desktopOnly}`}>
        <img src="/element-4.png" alt="icon" className={styles.icon} />
        <p className={styles.highlight}>Lorem ipsum dolor</p>
      </div>

      <div className={styles.navbarItem}>
        <img src="/element-4.png" alt="icon" className={styles.icon} />
        <p className={styles.highlight}>Lorem ipsum dolor</p>
      </div>

      <div className={`${styles.navbarItem} ${styles.desktopOnly}`}>
        <img src="/element-4.png" alt="icon" className={styles.icon} />
        <p className={styles.highlight}>Lorem ipsum dolor</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default NavbarUpper
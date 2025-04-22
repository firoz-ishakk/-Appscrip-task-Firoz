import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../body/Body";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Body />
      </section>
    </div>
  );
}

export default Home;

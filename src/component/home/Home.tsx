import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../body/Body";
import styles from "./Home.module.css";
function Home({dataFetch}:any) {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Body dataFetch={dataFetch}/>
      </section>
    </div>
  );
}

export default Home;

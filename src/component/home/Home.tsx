import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../body/Body";
import styles from "./Home.module.css";
import Footer from "../footer/Footer";
function Home({dataFetch}:any) {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Body dataFetch={dataFetch}/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;

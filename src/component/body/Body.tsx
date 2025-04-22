import React from "react";
import Heading from "./Heading/Heading";
import styles from "./Body.module.css";
import FilerSection from "./filterSection/FilterSection";

function Body() {
  return (
    <div className={styles.body}>
      <div>
        <Heading />
      </div>
      <div>
        <FilerSection />
      </div>
    </div>
  );
}

export default Body;

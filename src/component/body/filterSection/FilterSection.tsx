"use client";
import React, { useState } from "react";
import styles from "../Body.module.css";
import CustomFilter from "./CustomFilterSelection/CustomFilterSelection";

function FilerSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <>
      <div className={styles.topBar}>
        <span className={styles.itemCount}>
          <span className={styles.count}>3425 ITEMS</span>
          <div className={styles.filterToggle}>
            <img
              height={"15px"}
              className={styles.arrow}
              src={"arrow-left.png"}
            />
            <span className={styles.hideText}>HIDE FILTER</span>

            <span className={styles.filterText}>FILTER</span>
          </div>
        </span>

        <div
          className={styles.sort}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selected}{" "}
          <img
            className={styles.arrowDown}
            height={"12px"}
            src={"arrow-left.png"}
          />
          {showDropdown && (
            <ul className={styles.dropdown}>
              {options.map((option) => (
                <li
                  key={option}
                  className={selected === option ? styles.active : ""}
                  onClick={() => {
                    setSelected(option);
                    setShowDropdown(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <CustomFilter />
    </>
  );
}

export default FilerSection;

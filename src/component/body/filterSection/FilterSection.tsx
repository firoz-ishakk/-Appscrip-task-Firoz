"use client";
import React, { useState } from "react";
import styles from "../Body.module.css";
import CustomFilter from "./CustomFilterSelection/CustomFilterSelection";
import { ProductCard } from "../ProductCard/ProductCard";

function FilerSection({ dataFetch }: any) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");
  console.log(showFilters);
  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span className={styles.itemCount}>
          <span className={styles.count}>3425 ITEMS</span>
          <div className={styles.filterToggle}>
            {
              showFilters?

              <img
              height={"15px"}
              className={styles.arrowRight}
              src={"arrow-left.png"}
              />
              :
              <img
              height={"15px"}
              className={styles.arrow}
              src={"arrow-left.png"}
              />
            }
            <span
              onClick={() => setShowFilters((prev) => !prev)}
              className={styles.hideText}
            >
              {showFilters ? "SHOW FILTER" : "HIDE FILTER"}
            </span>

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
      <div className={styles.bodyContent}>
        {!showFilters && (
          <div>
            <CustomFilter />
          </div>
        )}
        <div>
          <ProductCard dataFetch={dataFetch} showFilters={showFilters} />
        </div>
      </div>
    </div>
  );
}

export default FilerSection;

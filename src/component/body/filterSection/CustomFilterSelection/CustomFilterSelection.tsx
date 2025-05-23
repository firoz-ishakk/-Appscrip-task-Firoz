import React, { useState } from "react";
import styles from "./Filter.module.css";

const CustomFilter = () => {
  const [expanded, setExpanded] = useState<any>({});
  const toggleExpand = (category: any) => {
    setExpanded((prev: any) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filters = [
    {
      name: "CUSTOMIZBLE",
      type: "checkbox",
      options: [],
      showAllOption: false,
    },
    {
      name: "IDEAL FOR",
      type: "checkbox",
      options: ["Men", "Women", "Baby & Kids"],
      defaultValue: "All",
    },
    {
      name: "OCCASION",
      type: "dropdown",
      options: ["Outdoor", "Indoor", "Casual", "Formal", "Party", "Wedding"],
      defaultValue: "All",
    },
    {
      name: "WORK",
      type: "dropdown",
      options: [ "Office", "Home", "Party", "Wedding", "Casual", "Formal", "Outdoor", "Indoor"],
      defaultValue: "All",
    },
    {
      name: "FABRIC",
      type: "dropdown",
      options: ["Cotton","Polyester","Leather"],
      defaultValue: "All",
    },
    {
      name: "SEGMENT",
      type: "dropdown",
      options: ["Men" , "Women" , "Baby & Kids"],
      defaultValue: "All",
    },
    {
      name: "SUITABLE FOR",
      type: "dropdown",
      options: ["Men" , "Women" , "Baby & Kids"],
      defaultValue: "All",
    },
    {
      name: "RAW MATERIALS",
      type: "dropdown",
      options: ["Cotton","Polyester","Leather"],
      defaultValue: "All",
    },
    {
      name: "PATTERN",
      type: "dropdown",
      options: ["Mosaic", "Zigzag", "Plain", "Striped", "Geometric", "Printed"],
      defaultValue: "All",
    },
  ];

  return (
    <div className={styles.filterContainer}>
      {filters.map((filter) => (
        <div key={filter.name} className={styles.filterItem}>
          {filter.type === "checkbox" && filter.options.length === 0 ? (
            <div className={`${styles.filterHeader} ${styles.checkboxOnly}`}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span className={styles.filterName}>{filter.name}</span>
              </label>
            </div>
          ) : (
            <>
              <div
                className={styles.filterHeader}
                onClick={() => toggleExpand(filter.name)}
              >
                <div className={styles.filterHeaderContent}>
                  <span className={styles.filterName}>{filter.name}</span>
                  <span className={styles.filterValue}>
                    {filter.defaultValue}
                  </span>
                </div>
                <span
                  className={`arrow ${expanded[filter.name] ? "up" : "down"}`}
                >
                  {expanded[filter.name] ? (
                    <img className={styles.arrowDown} src={"arrow-left.png"}         alt="arrow" />
                  ) : (
                    <img className={styles.arrowUp} src={"arrow-left.png"}         alt="arrow" />
                  )}
                </span>
              </div>

              {expanded[filter.name] && filter.options.length > 0 && (
                <div className={styles.filterOptions}>
                  {filter.type && (
                    <>
                      <div className={styles.unselectOption}>Unselect all</div>
                      {filter.options.map((option) => (
                        <label key={option} className={styles.checkboxOption}>
                          <input
                            type="checkbox"
                            name={filter.name}
                            value={option}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomFilter;

import React from "react";
import styles from "./Product.module.css";

export const ProductCard = ({ showFilters, dataFetch }: any) => {
  return (
    <div
      className={`${styles.productGridBase} ${
        showFilters ? styles.productGrid4 : styles.productGrid3
      }`}
    >
      {dataFetch.dataFetch.map((product: any, index: any) => (
        <div key={index} className={styles.productCard}>
          {product.isNew && <div className={styles.newTag}>NEW PRODUCT</div>}
          {product.outOfStock && (
            <div className={styles.outOfStock}>OUT OF STOCK</div>
          )}

          <div className={styles.imageContainer}>
            <img
            
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
          </div>

          <div className={styles.productInfo}>
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{product.title}</h3>
              <button className={styles.wishlistButton}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L8.55 16.695C3.4 12.04 0 8.935 0 5.285C0 2.32 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.32 20 5.285C20 8.935 16.6 12.04 11.45 16.695L10 18Z"
                    fill={product.isFavorited ? "#cc0e0e" : "none"}
                    stroke={product.isFavorited ? "none" : "#333"}
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.priceText}>
                <u>Sign-in</u>
               &nbsp; or create account to see the price
              </p>
              <button className={styles.desktopWishlistButton}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L8.55 16.695C3.4 12.04 0 8.935 0 5.285C0 2.32 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.32 20 5.285C20 8.935 16.6 12.04 11.45 16.695L10 18Z"
                    fill={product.isFavorited ? "#cc0e0e" : "none"}
                    stroke={product.isFavorited ? "none" : "#333"}
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

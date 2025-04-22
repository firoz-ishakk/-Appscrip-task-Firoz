import React from 'react';
import styles from './Product.module.css';

export const ProductCard = () => {
    const products = [
        {
          id: 1,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/bag.jpg',
          isNew: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        {
          id: 2,
          name: 'PP3OC MILKYWAY DRESS IN WOOL',
          price: 32.50,
          priceText: 'or Create an account to see pricing',
          image: '/images/toy.jpg',
          outOfStock: true,
          isFavorited: false
        },
        // Add more products as needed
      ];
  return (
    <div className={styles.productGrid}>
      {products.map((product : any, index : any) => (
        <div key={index} className={styles.productCard}>
          {product.isNew && <div className={styles.newTag}>NEW PRODUCT</div>}
          {product.outOfStock && <div className={styles.outOfStock}>OUT OF STOCK</div>}
          
          <div className={styles.imageContainer}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
          </div>
          
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{product.name}</h3>
            <div className={styles.priceContainer}>
              <p className={styles.price}>
                ${product.price} {product.priceText && <span className={styles.priceText}>{product.priceText}</span>}
              </p>
              <button className={styles.wishlistButton}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18L8.55 16.695C3.4 12.04 0 8.935 0 5.285C0 2.32 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.32 20 5.285C20 8.935 16.6 12.04 11.45 16.695L10 18Z" 
                    fill={product.isFavorited ? "#FF4E4E" : "none"} 
                    stroke={product.isFavorited ? "none" : "#333"} 
                    strokeWidth="1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
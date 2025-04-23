// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Newsletter */}
        <div className={styles.upperSection}>
          <div className={styles.footerSection}>
            <div className={styles.newsletter}>
              <h3 className={styles.desktopSectionTitle}>BE THE FIRST TO KNOW</h3>
              <h4 className={styles.sectionDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. this is simply dummy text.
              </h4>
              <div>
                <p className={styles.sectionText}>
                  Sign up for updates from mettä muse.
                </p>
                <div className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Enter your e-mail..."
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.subscribeBtn}>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}

          <div className={styles.footerSection}>
            <h3 className={styles.desktopSectionTitle}>CONTACT US</h3>
            <div className={styles.contactSection}>
              <p className={styles.contactInfo}>+44 221 123 5380</p>
              <p className={styles.contactInfo}>customercare@mettamuse.com</p>
            </div>

            <div className={styles.currencySection}>
              <h3 className={styles.desktopSectionTitle}>CURRENCY</h3>
              <div className={styles.currencySelector}>
                <img src="/usa.png" alt="USD" width={20} height={20} />
                <span>⬩ USD</span>
              </div>
              <p className={styles.currencyInfo}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.lowerSection}>
          {/* Quick Links */}
          <div className={styles.footerSection}>
            <div className={styles.sectionTitle}>
              mettā muse
              <span className={styles.sectionArrow}>
                <img src="/arrow-left.png" color="white" alt="USD" width={20} height={20} />
              </span>
            </div>
            <ul className={styles.linksList}>
              <li>
                <Link href="/orders-shipping">About us</Link>
              </li>
              <li>
                <Link href="/join-login">Stories</Link>
              </li>
              <li>
                <Link href="/payment-pricing">Artisans</Link>
              </li>
              <li>
                <Link href="/return-refunds">Boutiques</Link>
              </li>
              <li>
                <Link href="/faqs">Contacts</Link>
              </li>
              <li>
                <Link href="/privacy-policy">EU compliances Docs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
          <div className={styles.sectionTitle}>
              QUICK LINKS
              <span className={styles.sectionArrow}>
                <img src="/arrow-left.png" color="white" alt="USD" width={20} height={20} />
              </span>
            </div>
            <ul className={styles.linksList}>
              <li>
                <Link href="/orders-shipping">Orders & Shipping</Link>
              </li>
              <li>
                <Link href="/join-login">Join/Login as a Seller</Link>
              </li>
              <li>
                <Link href="/payment-pricing">Payment & Pricing</Link>
              </li>
              <li>
                <Link href="/return-refunds">Return & Refunds</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Social + Payment */}
          <div className={styles.footerSection}>
          <div className={styles.sectionTitle}>
          FOLLOW US
              <span className={styles.sectionArrow}>
                <img src="/arrow-left.png" color="white" alt="USD" width={20} height={20} />
              </span>
            </div>
            <div className={styles.socialIcons}>
              <Link href="https://instagram.com" className={styles.socialIcon}>
                <img src="/insta.png" alt="Instagram" width={30} height={30} />
              </Link>
              <Link href="https://linkedin.com" className={styles.socialIcon}>
                <img
                  src={"/linkedin.png"}
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            <div className={styles.paymentSection}>
              <h3 className={styles.desktopSectionTitle}>mettä muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                <img src="/gpay.png" alt="Google Pay" width={40} height={25} />
                <img
                  src="/mastercard.png"
                  alt="Mastercard"
                  width={40}
                  height={25}
                />
                <img src="/paypal.png" alt="PayPal" width={40} height={25} />
                <img
                  src="/amex.png"
                  alt="American Express"
                  width={40}
                  height={25}
                />
                <img
                  src="/applepay.png"
                  alt="Apple Pay"
                  width={40}
                  height={25}
                />
                <img
                  src="/shoppify.png"
                  alt="Shopify Pay"
                  width={40}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

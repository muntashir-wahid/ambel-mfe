import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["social-container"]}>
          <p>Follow Us</p>

          <div>
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className={styles["copy-right"]}>
          <p>
            Copyright © {new Date().getFullYear()} Muntashir Wahid. All rights
            reserved.
          </p>

          <ul className={styles["copy-right"]}>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

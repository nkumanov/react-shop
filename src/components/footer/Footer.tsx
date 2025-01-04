import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <section className={styles.footerWrapper}>
      <article>
        <div>
          <Link to="/">
            <span>My</span>
            <span>Shop</span>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Contacts</Link>
            </li>
            <li>
              <Link to="">Privacy Statement</Link>
            </li>
            <li>
              <Link to="">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Footer;

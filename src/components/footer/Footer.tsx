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
              <Link to="">Link1</Link>
            </li>
            <li>
              <Link to="">Link2</Link>
            </li>
            <li>
              <Link to="">Link3</Link>
            </li>
            <li>
              <Link to="">Link4</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="">Link5</Link>
            </li>
            <li>
              <Link to="">Link6</Link>
            </li>
            <li>
              <Link to="">Link7</Link>
            </li>
            <li>
              <Link to="">Link8</Link>
            </li>
          </ul>
        </div>
      </article>
      <article>
        <ul>
          <li>
            <Link to="">Link1</Link>
          </li>
          <li>
            <Link to="">Link1</Link>
          </li>
          <li>
            <Link to="">Link1</Link>
          </li>
          <li>
            <Link to="">Link1</Link>
          </li>
          <li>
            <Link to="">Link1</Link>
          </li>
          <li>
            <Link to="">Link1</Link>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Footer;

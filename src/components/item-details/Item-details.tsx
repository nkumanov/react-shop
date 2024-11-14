import React from "react";
import styles from "./Item-details.module.scss";
function ItemDetails() {
  return (
    <section className={styles.itemWrapper}>
      <section className={styles.itemImages}>
        <div>
          <img
            src="https://cdn.aboutstatic.com/file/images/fce06ef1ea9b9fa3d4223826d6481e7c.jpg?brightness=0.96&quality=75&trim=1&height=1280&width=960"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.aboutstatic.com/file/images/41575bc6a53d6b1523c8814c9c41dab2.jpg?quality=75&height=1280&width=960"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.aboutstatic.com/file/images/601c3026c74ce4432986fbb827446c75.jpg?brightness=0.96&quality=75&trim=1&height=1280&width=960"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.aboutstatic.com/file/images/c45c318305bab12bb8aaf379508993ac.jpg?brightness=0.96&quality=75&trim=1&height=1280&width=960"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.aboutstatic.com/file/images/104df9276278f461f93951c207a3bc2d.jpg?quality=75&height=1280&width=960"
            alt=""
          />
        </div>
      </section>
      <section className={styles.itemDetails}>
        <article className={styles.itemDetailsHeader}>
          <h3>Minoti</h3>
          <p>Minoti zimno qke v zeleno</p>
          <p>
            from 100 USD <span>s dds</span>
          </p>
        </article>
        <article className={styles.itemDetailsBody}>
          <h3>Minoti</h3>
          <p>Minoti zimno qke v zeleno</p>
          <p>
            from 100 USD <span>s dds</span>
          </p>
        </article>
      </section>
    </section>
  );
}

export default ItemDetails;

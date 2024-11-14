import React from "react";
import { Carousel, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./Product-card.module.scss";
import { useNavigate } from "react-router-dom";
function ProductCard() {
  const navigate = useNavigate();
  function addProductToWishList(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.stopPropagation();
    console.log("added to wishlist");
  }

  function openProductDetails(productId: string = "1"): void {
    navigate(`/item/${productId}`);
  }
  return (
    <article className={styles.cardWrapper} onClick={() => openProductDetails()}>
      <section className={styles.cardHeader}>
        <OverlayTrigger overlay={<Tooltip>Add to wishlist</Tooltip>}>
          <button
            onClick={(e) => addProductToWishList(e)}
            className={styles.wishBtn}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </OverlayTrigger>

        <Carousel
          interval={null}
          prevIcon={
            <span
              className="carousel-control-prev-icon"
              style={{ backgroundColor: "black" }}
            />
          }
          nextIcon={
            <span
              className="carousel-control-next-icon"
              style={{ backgroundColor: "black" }}
            />
          }
        >
          <Carousel.Item>
            <img
              className={styles.cardImage}
              src="https://cdn.aboutstatic.com/file/images/fce06ef1ea9b9fa3d4223826d6481e7c.jpg?brightness=0.96&quality=75&trim=1&height=1280&width=960"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.cardImage}
              src="https://cdn.aboutstatic.com/file/images/fce06ef1ea9b9fa3d4223826d6481e7c.jpg?brightness=0.96&quality=75&trim=1&height=1280&width=960"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.cardImage}
              src="https://cdn.aboutstatic.com/file/images/fce06ef1ea9b9fa3d4223826d6481e7c.jpg?brightness=0.96&quality=75&trim=1&height=1280&width=960"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className={styles.itemDetails}>
        <p>Nike sportwear</p>
        <p>sub title</p>
        <p>Price</p>
        <p>Available sizes: S, M, XL</p>
      </section>
      <section className={styles.cardFooter}>
        <button className={styles.addToCard}>Add to card</button>
      </section>
    </article>
  );
}

export default ProductCard;

import React from "react";
import { Carousel, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./Product-card.module.scss";
import { useNavigate } from "react-router-dom";
interface IProps {
  category: string;
  title: string;
  subTitle: string;
  price: string;
  subCategory: string;
  description: string;
  sizes: { size: string; pieces: string }[];
}
function ProductCard({
  title,
  category,
  subTitle,
  subCategory,
  price,
  description,
  sizes,
}: IProps) {
  const navigate = useNavigate();
  function addProductToWishList(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.stopPropagation();
  }

  function openProductDetails(productId: string = "1"): void {
    navigate(`/item/${productId}`);
  }
  return (
    <article className={styles.cardWrapper}>
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
        <p>{title}</p>
        <p>{subTitle}</p>
        <p>Price: {price}</p>
        <p>Available sizes: {sizes?.map((size) => size.size.toUpperCase()).join(", ")}</p>
      </section>
      <section className={styles.cardFooter}>
        <button className={styles.addToCard}>Add to cart</button>
      </section>
    </article>
  );
}

export default ProductCard;

import styles from "./Banner.module.scss";
type Banner = {
  type: EBannerType;
};
function Banner({ type }: Banner) {
  return (
    <article className={styles[type]}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, nemo.
        Nobis nulla iusto eveniet, aspernatur asperiores sequi doloremque !
      </p>
    </article>
  );
}

export default Banner;

export enum EBannerType {
  success = "success",
  warn = "warn",
  error = "error",
}

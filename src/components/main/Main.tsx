import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
function Main() {
  return (
    <section className={styles.mainWrapper}>
      <article>
        <Link to="">Tq</Link>
      </article>
      <article>
        <Link to="">Toi</Link>
      </article>
      <article>
        <Link to="">Child</Link>
      </article>
    </section>
  );
}

export default Main;

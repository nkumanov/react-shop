import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
function Main() {
  return (
    <section className={styles.mainWrapper}>
      <article>
        <Link to="/search/female">Tq</Link>
      </article>
      <article>
        <Link to="/search/male">Toi</Link>
      </article>
      <article>
        <Link to="/search/children">Child</Link>
      </article>
    </section>
  );
}

export default Main;

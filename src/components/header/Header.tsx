import styles from "./Header.module.scss";
import Category from "../categories/Category";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.navSection}>
        <nav>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Children</a>
          </li>
        </nav>
        <article>
          <a href="">
            <span>My</span>
            <span>Shop</span>
          </a>
        </article>

        <nav>
          <li>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className={styles.account}
              >
                <i className="fa-regular fa-user"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-2"
                  className={styles.dropdownItem}
                >
                  Your orders
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className={styles.dropdownItem}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className={styles.dropdownItem}
                >
                  Help
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  className={styles.logoutBtn}
                  title="Log out"
                >
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <a href="">
              <i className="fa-regular fa-heart"></i>
              <span>45</span>
            </a>
          </li>
          <li>
            <Link to="/cart/summary">
              <i className="fa-solid fa-bag-shopping"></i>
              <span>1</span>
            </Link>
          </li>
        </nav>
      </section>

      <section className={styles.subNavSection}>
        <Category></Category>
      </section>
    </header>
  );
}

export default Header;

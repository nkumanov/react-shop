import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { headerPath } from "../../shared/header-paths";
import { fromAuthSelectors, logout } from "../../store/slices/auth/index";
import AuthModal from "../auth/AuthModal";
import Category from "../categories/Category";
import styles from "./Header.module.scss";

function Header() {
  const loggedUser = useSelector(fromAuthSelectors.isUserLoggedInSelector);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("auth");
    dispatch(logout());
  };
  return (
    <header className={styles.header}>
      <section className={styles.navSection}>
        <nav>
          <li>
            <Category title="Women" subTitles={headerPath}></Category>
          </li>
          <li>
            <Category title="Men" subTitles={headerPath}></Category>
          </li>
          <li>
            <Category title="Children" subTitles={headerPath}></Category>
          </li>
        </nav>
        <article>
          <Link to="/">
            <span>My</span>
            <span>Shop</span>
          </Link>
        </article>
        <nav>
          {loggedUser ? (
            <>
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
                      onClick={logoutHandler}
                    >
                      Log out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link to="/wishlist">
                  <i className="fa-regular fa-heart"></i>
                  <span>45</span>
                </Link>
              </li>
              <li>
                <Link to="/cart/summary">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <span>1</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <AuthModal></AuthModal>
            </>
          )}
        </nav>
      </section>
    </header>
  );
}

export default Header;

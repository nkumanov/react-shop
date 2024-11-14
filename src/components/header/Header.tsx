import styles from "./Header.module.scss";
import Category from "../categories/Category";
import { Button, Dropdown, Tab, Tabs } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { headerPath } from "../../shared/header-paths";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
function Header() {
  const location = useLocation();
  const loggedUser = false;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Button onClick={handleShow} variant="dark">
                Sign in
              </Button>
              <AuthModal
                show={show}
                handleClose={handleClose}
              ></AuthModal>
            </>
          )}
        </nav>
      </section>
    </header>
  );
}

export default Header;

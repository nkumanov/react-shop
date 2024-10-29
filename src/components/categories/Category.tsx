import { Dropdown } from "react-bootstrap";
import styles from "./Category.module.scss";
function Category() {
  return (
    <>
      <section className={styles.wrapper}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Clothes
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className={styles.dropdownItem}>
              <a href="">T-shirts</a>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className={styles.dropdownItem}>
              <a href="">Jackets</a>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className={styles.dropdownItem}>
              <a href="">Swimwear</a>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className={styles.dropdownItem}>
              <a href="">Hoodies</a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Shoes
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className={styles.dropdownItem}>
              <a href="">T-shirts</a>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className={styles.dropdownItem}>
              <a href="">Jackets</a>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className={styles.dropdownItem}>
              <a href="">Swimwear</a>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className={styles.dropdownItem}>
              <a href="">Hoodies</a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </>
  );
}

export default Category;

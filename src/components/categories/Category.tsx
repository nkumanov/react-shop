import { Dropdown } from "react-bootstrap";
import styles from "./Category.module.scss";
import { Link } from "react-router-dom";
type CategoryProps = {
  title: string;
  subTitles: { title: string; path: string }[];
};
function Category({ title, subTitles }: CategoryProps) {
  return (
    <>
      <Dropdown className={styles.categoryDropdown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {subTitles.map((subTitle) => (
            <Dropdown.Item
              as={Link}
              to={subTitle.path}
              className={styles.dropdownItem}
            >
              {subTitle.title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Category;

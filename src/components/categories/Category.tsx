import { Dropdown } from "react-bootstrap";
import styles from "./Category.module.scss";
import { Link } from "react-router-dom";
type CategoryProps = {
  title: string;
  category: string;
  subTitles: { title: string; subCategory: string }[];
};
function Category({ title, category, subTitles }: CategoryProps) {
  return (
    <>
      <Dropdown className={styles.categoryDropdown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {subTitles?.map((subTitle, index) => (
            <Dropdown.Item
              key={index}
              as={Link}
              to={`search/${category}/${subTitle.subCategory}`}
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

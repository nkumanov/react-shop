import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Search.module.scss";
function Search() {
  const params = useParams();
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/products/male");
      const data = await response.json();
    }
    getProducts();
  }, [params]);

  return <section className={styles.searchWrapper}></section>;
}

export default Search;

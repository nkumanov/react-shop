import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../product-card/Product-card";
import styles from "./Search.module.scss";
import { useEffect } from "react";
function Search() {
  const params = useParams();
  useEffect(() => {
    async function getProducts() {
      console.log('here')
      const response = await fetch("http://localhost:3000/products/male");
      const data = await response.json();
      console.log(data);
    }
    getProducts();
  }, [params]);

  return <section className={styles.searchWrapper}></section>;
}

export default Search;

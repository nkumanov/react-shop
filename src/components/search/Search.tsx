import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useAppDispatch } from "../../store/store";
import {
  getProducts,
  getProductsByCategory,
} from "../../store/slices/products/products.thunks";
import ProductCard from "../product-card/Product-card";
import { useSelector } from "react-redux";
import * as fromProductsSelectors from "../../store/slices/products/products-slice.selector";
function Search() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const productsSelector = params["subCategory"]
    ? fromProductsSelectors.getProductsBySubcategory
    : fromProductsSelectors.getProductsByCategory;
  const products = useSelector(productsSelector);
  useEffect(() => {
    if (params["category"] && params["subCategory"]) {
      dispatch(
        getProducts({
          category: params.category,
          subCategory: params.subCategory,
        })
      );
    } else if (params["category"] && !params["subCategory"]) {
      dispatch(
        getProductsByCategory({
          category: params.category,
        })
      );
    }
  }, [dispatch, params["category"], params["subCategory"]]);

  return (
    <section className={styles.searchWrapper}>
      {!products.length ? (
        <h1>No products to show...</h1>
      ) : (
        products.map((product) => {
          return <ProductCard key={product._id} {...product}></ProductCard>;
        })
      )}
    </section>
  );
}

export default Search;

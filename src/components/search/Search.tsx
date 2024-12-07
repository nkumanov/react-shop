import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useAppDispatch } from "../../store/store";
import { getProducts } from "../../store/slices/products/products.thunks";
function Search() {
  const params = useParams();
  const dispatch = useAppDispatch();
  console.log(params);
  useEffect(() => {
    dispatch(
      getProducts({
        category: params.category,
        subCategory: params.subCategory,
      })
    );
  }, [params]);

  return <section className={styles.searchWrapper}></section>;
}

export default Search;

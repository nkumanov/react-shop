import { IProductData } from "../../../../shared/product.model";

export enum EProductsThunkNames {
  GET_PRODUCTS = "products/getProducts",
  GET_PRODUCTS_BY_CATEGORY = "products/getProductsByCategory",
  ADD_PRODUCT_TO_BOOKMARKS = "products/addToBookmark",
  ADD_PRODUCT_TO_CART = "products/addProductToCart",
}

export interface IProductsDataResponse {
  data: {
    products: IProductData[];
  };
}

import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import ProductCard from "./components/product-card/Product-card";
import Banner, { EBannerType } from "./components/banner/Banner";
import OrderSummary from "./components/order-summary/Order-summary";
import Search from "./components/search/Search";


function App() {
  return (
    <section className={styles.section}>
      <Header></Header>
      <Banner type={EBannerType.success}></Banner>
      {/* <ProductCard></ProductCard>
      <OrderSummary></OrderSummary> */}
      <Outlet></Outlet>
    </section>
  );
}

export default App;

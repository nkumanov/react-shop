import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Banner, { EBannerType } from "./components/banner/Banner";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <section className={styles.section}>
      <Header></Header>
      <Banner type={EBannerType.success}></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
}

export default App;

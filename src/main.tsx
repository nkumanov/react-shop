import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./components/search/Search.tsx";
import OrderSummary from "./components/order-summary/Order-summary.tsx";
import Main from "./components/main/Main.tsx";
import ErrorView from "./components/error-page/Error-view.tsx";
import ItemDetails from "./components/item-details/Item-details.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/search/:category/:subCategory?",
        element: <Search></Search>,
      },
      {
        path: "/search/:category",
        element: <Search></Search>,
      },
      {
        path: "/item/:id",
        element: <ItemDetails></ItemDetails>,
      },
      {
        path: "/cart/summary",
        element: <OrderSummary></OrderSummary>,
      },
      {
        path: "wishlist",
        element: <p>wishlist</p>,
      },
      {
        path: "*",
        element: <ErrorView></ErrorView>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Search from "./components/search/Search.tsx";
import ProductCard from "./components/product-card/Product-card.tsx";
import OrderSummary from "./components/order-summary/Order-summary.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Navigate to="/search" replace />,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/item/:id",
        element: <ProductCard></ProductCard>,
      },
      {
        path: "/cart/summary",
        element: <OrderSummary></OrderSummary>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);

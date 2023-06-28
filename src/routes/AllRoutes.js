import { Routes, Route } from "react-router-dom";
import {
  DashboardPage,
  HomePage,
  Login,
  PageNotFound,
  ProductsList,
  Register,
} from "../pages";
import { ProductDetail } from "../pages";
import { CartPage } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { OrderPage } from "../pages/index";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "./productsPage";

function Products() {
  const products = useSelector((state) => state.entities.products.list);
  return <ProductPage />;
}

export default Products;

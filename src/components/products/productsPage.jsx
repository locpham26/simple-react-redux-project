import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./productCard";

function ProductPage() {
  const products = useSelector((state) => state.entities.products.list);
  return (
    <React.Fragment>
      <div className="card-deck">
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
      </div>
      <div className="card-deck">
        <ProductCard product={products[3]} />
        <ProductCard product={products[4]} />
        <ProductCard product={products[5]} />
      </div>
      <div className="card-deck">
        <ProductCard product={products[6]} />
        <ProductCard product={products[7]} />
      </div>
    </React.Fragment>
  );
}

export default ProductPage;

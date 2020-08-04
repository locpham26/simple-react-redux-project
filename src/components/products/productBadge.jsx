import React from "react";

function ProductBadge({ product }) {
  return (
    <span className="badge badge-pill badge-warning">
      {product.inCart.quantity !== 0 ? product.inCart.quantity : null}
    </span>
  );
}

export default ProductBadge;

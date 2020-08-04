import React from "react";
import { useSelector } from "react-redux";

function CartBadge() {
  const products = useSelector((state) => state.entities.products.list);
  let totalQuantity = 0;
  for (let product of products) totalQuantity += product.inCart.quantity;
  return (
    <span className="badge badge-light">
      {totalQuantity !== 0 ? totalQuantity : null}
    </span>
  );
}

export default CartBadge;

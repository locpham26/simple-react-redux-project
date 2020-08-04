import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../store/products";
import CartTable from "./cartTable";
import EmptyButton from "../buttons/emptyButton";

function Cart() {
  const products = useSelector((state) => state.entities.products.list);
  const total = useSelector((state) => state.entities.products.total);
  const dispatch = useDispatch();
  const addedItems = products.filter(
    (product) => product.inCart.selected === true
  );
  if (addedItems.length !== 0) {
    return (
      <div>
        <EmptyButton onEmpty={() => dispatch(emptyCart())} />
        <CartTable addedItems={addedItems} />
        <h4>Total price is ${total}</h4>
      </div>
    );
  } else {
    return (
      <h2 style={{ textAlign: "center", justifyContent: "center" }}>
        Your shopping cart is empty, please visit{" "}
        <Link to="/products">products</Link> to add items to your shopping cart.
      </h2>
    );
  }
}

export default Cart;

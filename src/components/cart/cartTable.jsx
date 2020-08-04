import React from "react";
import { useDispatch } from "react-redux";
import IncrementButton from "../buttons/incrementButton";
import DecrementButton from "../buttons/decrementButton";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../store/products";
import RemoveButton from "../buttons/removeButton";
import Table from "./table";

function CartTable({ addedItems }) {
  const dispatch = useDispatch();
  const columns = [
    { path: "name", label: "Items" },
    { path: "inCart.quantity", label: "Quantity" },
    {
      key: "actions",
      content: (item) => (
        <>
          <IncrementButton
            onIncrement={() => dispatch(incrementQuantity(item.id))}
          />
          <DecrementButton
            onDecrement={() => dispatch(decrementQuantity(item.id))}
          />
        </>
      ),
    },
    {
      key: "remove",
      content: (item) => (
        <RemoveButton onRemove={() => dispatch(removeFromCart(item.id))} />
      ),
    },
  ];
  return <Table columns={columns} data={addedItems} />;
}

export default CartTable;

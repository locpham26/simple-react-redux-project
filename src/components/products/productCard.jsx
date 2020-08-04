import React from "react";

import AddButton from "../buttons/addButton";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/products";
import { incrementQuantity, decrementQuantity } from "../../store/products";

import IncrementButton from "../buttons/incrementButton";
import DecrementButton from "../buttons/decrementButton";
import ProductBadge from "./productBadge";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ maxWidth: 350, maxHeight: 600 }}>
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h4 className="card-title">
          <strong>{product.name}</strong>
          <ProductBadge product={product} />
        </h4>
        <p className="card-text">{product.desc}</p>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-9">Price: ${product.price}</div>
          <div className="col">
            {!product.inCart.selected ? (
              <AddButton onAdd={() => dispatch(addToCart(product.id))} />
            ) : (
              <span>
                <IncrementButton
                  onIncrement={() => dispatch(incrementQuantity(product.id))}
                />
                <DecrementButton
                  onDecrement={() => dispatch(decrementQuantity(product.id))}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

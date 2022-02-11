import React from "react";
import { Link } from "react-router-dom";

export default function renderEmptyCart() {
  return (
    <div className="noItems">
      <div className="noItems">
        <img src="https://www.waterpurifiercareindia.com/images/empty-cart.jpg"></img>
      </div>
      <Link className="checkout" to="/products">
        View Products
      </Link>
    </div>
  );
}

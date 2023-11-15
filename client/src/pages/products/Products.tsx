import React from "react";
import "./products.scss";
import { AiOutlineGoogle, AiFillCreditCard } from "react-icons/ai";

export default function Products() {
  return (
    <div className="product-checkout-container">
      <div className="product-checkout-left">
        <h2>Product Checkout</h2>
        <div className="payment-methods">
          <h3>Payment Methods</h3>
          <span>
            <AiOutlineGoogle size={30} />
          </span>
          <span>
            <AiFillCreditCard size={30} />
          </span>
        </div>
        <form action="#">
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Name on Card
          </label>
          <input
            type="text"
            name=""
            id="name"
            style={{ marginBottom: "10px" }}
          />
          <label
            htmlFor="cardNo"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Card Number
          </label>
          <input
            type="text"
            name=""
            id="cardNo"
            style={{ marginBottom: "10px" }}
          />
          <label
            htmlFor="cardNo"
            style={{ display: "block", marginBottom: "10px" }}
          >
            CVV
          </label>
          <input
            type="text"
            name=""
            id="cardNo"
            style={{ marginBottom: "10px" }}
          />
          <label
            htmlFor="cardNo"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Date of Expiry
          </label>
          <input
            type="text"
            name=""
            id="cardNo"
            style={{ marginBottom: "10px" }}
          />
        </form>
      </div>
      <div className="product-checkout-right">
        <div className="shipping-info">shp</div>
        <div className="order-summary">order</div>
      </div>
    </div>
  );
}

// UI:- https://dribbble.com/shots/22708950-Daily-UI-002-Credit-Card-Checkout

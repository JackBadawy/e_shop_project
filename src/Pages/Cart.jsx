import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.productName}</p>
        </div>
      ))}
      <p>Total: </p>
    </div>
  );
};

export default Cart;

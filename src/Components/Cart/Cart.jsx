import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Order summery: {cart.length}</h2>
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}
          <button
            className="text-red-400 ml-3"
            onClick={() => handleRemoveFromCart(tShirt._id)}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

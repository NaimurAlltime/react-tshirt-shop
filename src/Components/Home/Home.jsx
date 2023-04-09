import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirts from "../TShirts/TShirts";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirts) => {
    // console.log(tShirts);
    const newCart = [...cart, tShirts];
    setCart(newCart);
  };

  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="md:grid grid-cols-[1200px_minmax(900px,_1fr)_1100px] gap-4 mx-12">
      {/* <h2>All Products: {tShirts.length} </h2> */}
      <div className="md:grid grid-cols-3 gap-4 mt-6">
        {tShirts.map((tShirt) => (
          <TShirts
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirts>
        ))}
      </div>
      <div>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const TShirts = ({ tShirt, handleAddToCart }) => {
  const { name, price, picture } = tShirt;
  //   console.log(tShirt);
  return (
    <div className="w-full rounded-md border border-gray-400">
      <img className="w-96 h-96 p-4 rounded-md" src={picture} alt="" />
      <div className="text-center pb-4">
        <h4 className="text-lg font-medium">{name}</h4>
        <p>Price: ${price}</p>
        <button
          onClick={() => handleAddToCart(tShirt)}
          className="text-xl bg-cyan-400 px-3 py-1 rounded-md mt-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TShirts;

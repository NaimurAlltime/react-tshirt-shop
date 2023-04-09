import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tShirts = useLoaderData();
  return (
    <div>
      <h2>All Products: {tShirts.length} </h2>
    </div>
  );
};

export default Home;

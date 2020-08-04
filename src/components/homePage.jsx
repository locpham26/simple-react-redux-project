import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <h2 style={{ textAlign: "center" }}>
      Welcome to our store. Please <Link to="/products">select</Link> what you
      would like to drink.
    </h2>
  );
}

export default HomePage;

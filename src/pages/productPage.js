import React, { useState, useEffect } from "react";
import axios from "axios";

import "./product.css";
const ProductPage = () => {
  const [count, setCount] = useState(0);
  const [reverseCount, setReverseCount] = useState(100);

  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    document.title = `Incr - ${count} | decr - ${reverseCount} | ${catFact}`;
  });

  const getNewFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setCatFact(response.data.fact);
    });
  };

  return (
    <div>
      <h1> Product Page</h1>
      <p onClick={() => setCount(count + 1)}> Increment Count - {count}</p>
      <p onClick={() => setReverseCount(reverseCount - 1)}>
        {" "}
        Decrease Count - {reverseCount}
      </p>

      <div className="cat-facts">
        <h2>Cat Fact</h2>
        <button onClick={() => getNewFact()}> Get new cat fact</button>
        <p>{catFact}</p>
      </div>
    </div>
  );
};

export default ProductPage;

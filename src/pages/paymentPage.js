import { useParams } from "react-router-dom";
import React, { useState } from "react";

const PaymentPage = () => {
  const params = useParams();
  const inputRef = React.createRef();
  const [text, setText] = useState("");
  const handleClick = () => {
    console.log("value --", inputRef.current.value);
  };
  const handleChange = (text) => {
    setText(text);
  };
  return (
    <div>
      <h1> Payment Page - {params.price} </h1>
      <br />
      <div>
        <input type="text" ref={inputRef} /> {/** Uncontrolled component  */}
        <button onClick={() => handleClick()}> click me</button>
      </div>
      <div>
        {/** controlled component  */}
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PaymentPage;

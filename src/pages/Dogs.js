import { useState, useEffect } from "react";
const Dogs = ({ name, passData }) => {
  const [count1, setCount1] = useState(1);

  let count2 = 1;
  useEffect(() => {
    console.log("count1 updated");
  });

  return (
    <div
      style={{
        background: "yellow",
        padding: "30px",
        margin: "30px",
      }}
    >
      Dogs {name}
      <div>
        <button
          onClick={() => {
            setCount1(count1 + 1);
          }}
        >
          Click to increase count1
        </button>
        {count1}
      </div>
      <div>
        <button
          onClick={() => {
            count2 = count2 + 1;
          }}
        >
          Click to increase count2
        </button>
        {count2}
      </div>
      <button
        onClick={() => {
          console.log("Count 1 = ", count1);
          console.log("Count 2 = ", count2);
          passData(count1);
        }}
      >
        Show Value
      </button>
    </div>
  );
};

export default Dogs;

import { useState } from "react";

const Radeon2 = () => {
  const [ik, setIk] = useState(0);
  return (
    <div>
      <h1> Radeon{ik} </h1>
    </div>
  );
};

export default Radeon2;

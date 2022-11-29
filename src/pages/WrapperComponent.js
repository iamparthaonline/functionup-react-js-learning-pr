import { useState } from "react";
import UserRegistration from "./UserRegistration";
const WrapperComponent = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  return (
    <div
      style={{
        margin: "30px",
        padding: "30px",
        border: "1px solid #444",
      }}
    >
      {showRegistration && <UserRegistration />}
      <button
        onClick={() => {
          setShowRegistration(!showRegistration);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
export default WrapperComponent;

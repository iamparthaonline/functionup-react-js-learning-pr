import { useSelector, useDispatch } from "react-redux";
import "./style.css";
const SimpleComponent = ({ label }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INC",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DEC",
    });
  };

  const addBy = () => {
    dispatch({
      type: "ADD",
      payload: 10,
    });
  };

  return (
    <div className="counter-container">
      <h1> {counter} !</h1>

      <div>
        <button onClick={() => increment()}>Increment +</button>
        <button onClick={() => decrement()}>Decrement -</button>
        <button onClick={() => addBy()}>Add Value 10</button>
      </div>
    </div>
  );
};

export default SimpleComponent;

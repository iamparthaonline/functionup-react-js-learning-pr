import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store";

import "./style.css";
const SimpleComponent = ({ label }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(100));
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

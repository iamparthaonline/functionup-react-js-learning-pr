/**
 * Handling Forms and different events
 * Conditional rendering
 * Looping in react
 */
// import "./style.css";
import { useState, createRef } from "react";
import RenderResult from "./result";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [showResult, setShowResult] = useState(false);

  const inputRef = createRef();

  const redDiv = createRef();

  return (
    <div className="form-container">
      <h2>Form Component</h2>
      <form
        onSubmit={(event) => {
          console.log("hello submit");
          event.stopPropagation();
          event.preventDefault();
          setShowResult(true);
        }}
      >
        <label htmlFor="first-name">
          Name:
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value.toUpperCase());
            }}
            name="first-name"
            type="text"
          />
        </label>

        <input type="text" ref={inputRef} />

        <span
          onClick={() => {
            console.log(" Value --> ", inputRef.current.value);
          }}
        >
          Get Value
        </span>

        <div
          id="red-div"
          ref={redDiv}
          style={{
            backgroundColor: "red",
            height: "100px",
            width: "100px",
            margin: "50px",
          }}
        ></div>

        <span
          onClick={() => {
            redDiv.current.style.background = "green";
          }}
        >
          {" "}
          Change Color{" "}
        </span>

        <button type="submit">Submit</button>

        <RenderResult
          firstName={firstName}
          showResult={showResult}
          removeHandler={() => {
            setShowResult(false);
          }}
        />
      </form>
    </div>
  );
};

export default FormComponent;

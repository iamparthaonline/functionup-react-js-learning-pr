import { useState } from "react";
import { Link } from "react-router-dom";

const dogsListAPI = "https://dog.ceo/api/breeds/list/all";

const DogsComponent = () => {
  const [breeds, setBreeds] = useState([]);
  const [image, setImage] = useState();
  const [currentBreed, setCurrentBreed] = useState("");
  const getBreedsList = () => {
    fetch(dogsListAPI)
      .then((response) => {
        console.log("response --- > ", response);
        console.log("type ---- ", typeof response);
        return response.json();
      })
      .then((data) => {
        console.log("data --- ", Object.keys(data.message));
        setBreeds(Object.keys(data.message));
      });
  };

  return (
    <div
      style={{
        margin: "100px",
        background: "yellow",
        padding: "30px",
      }}
    >
      <h1>Dogs</h1>
      <a href="/form">Go to form page </a>
      <Link to="/form"> Go to form</Link>
      <button onClick={() => getBreedsList()}> Get Breeds List </button>
      <div>
        <ul style={{ width: "40%", display: "inline-block" }}>
          {breeds.map((breed, index) => (
            <li
              style={{
                padding: "10px",
                borderBottom: "1px solid #444",
                fontSize: "18px",
              }}
              key={index}
              onClick={() => {
                console.log("breed --- ", breed);
                setCurrentBreed(breed);
                setImage(undefined);
                fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data -- ", data);
                    setImage(data.message);
                  });
              }}
            >
              {breed}
            </li>
          ))}
        </ul>
        <div
          style={{
            width: "40%",
            display: "inline-block",
            verticalAlign: "top",
            padding: "20px",
          }}
        >
          <h2> Breed Image - {currentBreed} </h2>
          {image && (
            <img
              onClick={() => {
                setImage(undefined);
                fetch(`https://dog.ceo/api/breed/${currentBreed}/images/random`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data -- ", data);
                    setImage(data.message);
                  });
              }}
              style={{ width: "100%" }}
              src={image}
              alt="dog "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DogsComponent;

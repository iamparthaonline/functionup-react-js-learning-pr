import { useState, useEffect } from "react";
import axios from "axios";
const dogsListAPIEndpoint = "https://dog.ceo/api/breed/labrador/images";

const DogsList = () => {
  const [list, setList] = useState([]);
  const [apiCallInProgress, setApiCallInProgress] = useState(false);

  const getDogsList = () => {
    setApiCallInProgress(true);
    axios
      .get(dogsListAPIEndpoint)
      .then((response) => {
        console.log("response", response);
        setList(response.data.message);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  useEffect(() => {
    if (!apiCallInProgress) {
      getDogsList();
    }
  });

  return (
    <div className="dogs-list">
      <h1>Dogs List</h1>
      {/* {<p> No dogs found </p>} */}
      {list &&
        list.map((dogImageUrl) => (
          <div className="dog-img" key={dogImageUrl}>
            <img src={dogImageUrl} alt={dogImageUrl} />
          </div>
        ))}
    </div>
  );
};

export default DogsList;

import User from "./User";
import "./style.css";
import usersList from "./users.json";

const ListComponent = () => {
  return (
    <div className="user-list">
      <h2> List of Users</h2>
      {usersList.map(({ name, age, gender }, index) => (
        <User name={name} age={age} gender={gender} key={index} />
      ))}
    </div>
  );
};

export default ListComponent;

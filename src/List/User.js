import "./User.css";
const User = ({ name, gender, age }) => {
  return (
    <div className="user-container">
      <div className="name"> {name} </div>
      <div className="details">
        <span>{age}</span>
        <span>{gender}</span>
      </div>
    </div>
  );
};

export default User;

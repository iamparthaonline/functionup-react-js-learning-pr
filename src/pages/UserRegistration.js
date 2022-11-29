import React from "react";
import Dogs from "./Dogs";
class UserRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "123",
    };
  }
  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  updateName(value) {
    if (!isNaN(value)) {
      this.setState({
        name: value,
      });
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div
        style={{
          margin: "30px",
        }}
      >
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            console.log("name", name);
            const response = await fetch("API_URL", {
              body: {
                name,
              },
            });
            console.log("response", response);
          }}
        >
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => this.updateName(event.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
        <Dogs
          name="buddy"
          passData={(value) => {
            this.updateName(value);
          }}
        />
      </div>
    );
  }
}

export default UserRegistration;

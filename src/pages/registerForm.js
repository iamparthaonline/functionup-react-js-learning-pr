import React from "react";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      password: "",
    };
  }
  render() {
    return (
      <div>
        <h2>RegisterForm </h2>
        <form
          onSubmit={(event) => {
            const { name, age, password } = this.state;
            event.preventDefault();
            // login API call
            const tempRegistrationData =
              JSON.parse(localStorage.getItem("registrationData")) || [];

            tempRegistrationData.push({ name, age, password });
            localStorage.setItem(
              "registrationData",
              JSON.stringify(tempRegistrationData)
            );
            alert("Registration Successful!");
            this.setState({
              name: "",
              age: "",
              password: "",
            });
          }}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
          <div>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="age"
              value={this.state.age}
              onChange={(e) => {
                this.setState({
                  age: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <div
          style={{
            padding: "40px",
          }}
        >
          For data - <br />
          Name - {this.state.name}
          <br />
          age - {this.state.age}
          <br />
          password - {this.state.password}
          <br />
        </div>
      </div>
    );
  }
}

export default RegisterForm;

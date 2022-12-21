import React from "react";
import axios from "axios";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      password: "",
      formDisabled: false,
    };
  }
  handleFormSubmit(event) {
    const { name, age, password } = this.state;
    event.preventDefault();
    // // login API call
    // const tempRegistrationData =
    //   JSON.parse(localStorage.getItem("registrationData")) || [];

    // tempRegistrationData.push({ name, age, password });
    // localStorage.setItem(
    //   "registrationData",
    //   JSON.stringify(tempRegistrationData)
    // );
    this.setState({
      formDisabled: true,
    });
    axios
      .post("https://63a30a829704d18da083fc2c.mockapi.io/react-partha/users", {
        name,
        age,
        password,
      })
      .then((response) => {
        console.log("response", response);
        this.setState({
          formDisabled: false,
        });
        this.setState({
          name: "",
          age: "",
          password: "",
        });
        alert("Registration Successful!");
      });
  }
  render() {
    return (
      <div>
        <h2>RegisterForm </h2>
        <form
          onSubmit={(event) => this.handleFormSubmit(event)}
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
          <button disabled={this.state.formDisabled} type="submit">
            Submit
          </button>
          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
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

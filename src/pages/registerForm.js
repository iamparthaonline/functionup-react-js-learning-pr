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
      error404: false,
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
    const requestBody = {
      name,
      age: age,
      password,
    };
    axios
      .post(
        "https://63a30a829704d18da083fc2c.mockapi.io/react-partha/users",
        requestBody
      )
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("token", response.token);
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
      })
      .catch((e) => {
        console.log("error", e);
        this.setState({
          error404: true,
        });
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
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="your age"
              value={this.state.age}
              onChange={(e) => {
                this.setState({
                  age: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="your password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </div>

          <button
            disabled={this.state.formDisabled}
            type="submit"
            class="btn btn-primary mb-3"
          >
            Submit
          </button>

          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
          {this.state.error404 && <p>404 API error happened</p>}
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

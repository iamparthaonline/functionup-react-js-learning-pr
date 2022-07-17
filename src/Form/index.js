import React from "react";

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      showPreview: false,
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submit happened");
    this.setState({
      showPreview: true,
    });
  }
  handleFormReset(event) {
    event.preventDefault();
    console.log("form resetted");
    this.setState({
      showPreview: false,
      inputText: "",
    });
  }
  changeHandler(value) {
    this.setState({
      inputText: value,
    });
  }
  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={(event) => this.handleFormSubmit(event)}
          onReset={(event) => this.handleFormReset(event)}
        >
          <input
            placeholder="enter some value"
            type="text"
            value={this.state.inputText}
            onChange={(event) => this.changeHandler(event.target.value)}
          />
          <button type="submit"> Submit </button>
          <button type="reset">Reset</button>
        </form>
        {this.state.showPreview && (
          <div>
            <h2> Preview Form Data </h2>
            <p>{this.state.inputText}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;

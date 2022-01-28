import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };
  
  render() {
    return (
      <div className="App">
      <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#login">Login</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Log In</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Create a New Account
        </button>
      </div>
    );
  }
}

export default App;

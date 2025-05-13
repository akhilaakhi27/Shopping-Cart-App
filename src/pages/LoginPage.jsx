import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  update = (event) => {
    event.preventDefault(); // Prevent form submission
    const { username, password } = this.state;
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Login Successful");
    }
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Please log in to your account</p>
          <form className="login-form" onSubmit={this.update}>
            <label className="login-label">Username</label>
            <input
              className="login-input"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Enter your username"
              required
            />
            <label className="login-label">Password</label>
            <input
              className="login-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter your password"
              required
            />
            <button className="login" type="submit">
              Log In
            </button>
          </form>
          <p className="login-footer">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
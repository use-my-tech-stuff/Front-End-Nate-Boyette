import React from "react";
import LoginPage from "../components/Login/LoginPage";

class LoginView extends React.Component {
  state = {
    password: "",
    userName: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    console.log(this.state)

  };

  render() {
    return (
      <div>
        <LoginPage
          password={this.state.password}
          userName={this.state.userName}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LoginView;

import React from "react";
import LoginPage from "../components/Login/LoginPage";

import { connect } from "react-redux";

import { loginUser } from "../store/actions";

class LoginView extends React.Component {
  state = {
    user: {
      password: "",
      username: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });

    console.log(this.state);
  };

  loginHandler = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.user);
  };

  render() {
    return (
      <div>
        <LoginPage
          password={this.state.user.password}
          username={this.state.user.username}
          handleChange={this.handleChange}
          loginHandler={this.loginHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginView);

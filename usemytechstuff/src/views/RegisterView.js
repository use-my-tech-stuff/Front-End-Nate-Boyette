import React from "react";

import RegisterPage from "../components/Register/RegisterPage";

import { connect } from "react-redux";

import { registerUser } from "../store/actions";

class RegisterView extends React.Component {
  state = {
    newUser: {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      newUser: {
        ...this.state.newUser,
        [name]: value
      }
    });

    // console.log(this.state);
  };

  handleRegister =  e => {
    e.preventDefault();
    this.props.history.push(`/item-list`)
    this.props.registerUser(this.state.newUser)
  };

  render() {
    return (
      <div>
        <RegisterPage
          newUser={this.state.newUser}
          handleChange={this.handleChange}
          registerUser={this.handleRegister}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(RegisterView);

import React from "react";

import RegisterPage from "../components/Register/RegisterPage";

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

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <RegisterPage
          newUser={this.state.newUser}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default RegisterView;

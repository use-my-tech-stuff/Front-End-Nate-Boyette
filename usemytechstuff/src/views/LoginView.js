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

    // console.log(this.state);
  };

    loginHandler = (e) => {
    e.preventDefault();
    console.log(this.props.isLoggedIn)
    this.props.loginUser(this.state.user);
    console.log(this.props.isLoggedIn);
    
    setTimeout(() => {
      if (!this.props.isLoggedIn) {
        return alert('User Not Found')
      } else {
        
       this.props.history.push(`/item-list`);
        
      }
    }, 3000)
    
    
    
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
  return {
    isLoggedIn: state.userReducer.userStatus.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginView);

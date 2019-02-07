import React from "react";
import LoginPage from "../components/Login/LoginPage";

import { connect } from "react-redux";

import { loginUser } from "../store/actions";

class LoginView extends React.Component {
  state = {
    user: {
      password: "",
      username: ""
    },
    
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

    loginHandler = e => {
    e.preventDefault();
    e.persist();
    console.log(this.props.isLoggedIn)
    
    this.props.loginUser(this.state.user, this.pushToHome)
    console.log(this.props.user);
      

    

      setTimeout(() => {
        if(this.props.loginFailed) {
          return;
        }
        if (this.props.isLoggedIn) {
          this.props.history.push(`/item-list`);
        }
      }, 1000);
       

      // if (this.props.loginFailed)
      // this.setState({
      //   token: localStorage.getItem('jwt')
      // })
      
      
      // if (this.state.isLoggedIn) {
      //   // return this.props.history.push(`/item-list`);
      // }
  
  };

 



 

  render() {
    
    

    return (
      <div>
        <LoginPage
          password={this.state.user.password}
          username={this.state.user.username}
          handleChange={this.handleChange}
          loginHandler={this.loginHandler}
          loginFailed={this.props.loginFailed}
          isLoggingIn={this.props.isLoggingIn}
        />
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userStatus.user,
    isLoggingIn: state.userReducer.userStatus.isLoggingIn,
    loginError: state.userReducer.error,
    loginFailed: state.userReducer.userStatus.loginFailed,
    isLoggedIn: state.userReducer.userStatus.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginView);

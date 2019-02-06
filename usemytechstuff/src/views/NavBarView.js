import React from "react";

import NavBar from "../components/NavBar/NavBar";

import { withRouter } from "react-router";

import { connect } from "react-redux";

import { logOut } from "../store/actions";

class NavBarView extends React.Component {
  
  userLogOut = e => {
    this.props.logOut()
  }
  
  render() {
    console.log(this.props);
    // console.log(localStorage)
    return (
      <>
        <NavBar userLogOut={this.userLogOut} />
      </>
    );
  }
}

export default connect(
  null,
  {logOut}
)(withRouter(NavBarView));

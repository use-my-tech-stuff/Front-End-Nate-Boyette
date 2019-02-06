import React from "react"

import NavBar from "../components/NavBar/NavBar"

import {withRouter} from "react-router"

class NavBarView extends React.Component {
  render(){
    console.log(this.props)
    // console.log(localStorage)
    return (
      <>
        <NavBar />
      </>
    )
  }
}

export default withRouter(NavBarView)
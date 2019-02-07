import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  
  pushToPage = (e) => {
    e.preventDefault();
    const routeTo = !this.props.isLoggedIn ? 'login' : 'item-list'
    this.props.history.push(`/${routeTo}`)
  }
  

  render() {
    const userId = localStorage.getItem("userId");
    
    return (
      <>
        <Navbar
          className="shadow-sm h-75"
          color="light"
          light
          expand="md"
          sticky="top"
        >
          <NavbarBrand href={'#'} onClick={this.pushToPage}>Tech Plum</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/item-list">View Items</Link>
            </NavItem>
            {!userId ? null : (
              <NavItem onClick={this.props.routeToDashboard}>
                <NavLink href="">Profile</NavLink>
              </NavItem>
            )}
            {!userId ? null : (
              <NavItem onClick={this.props.userLogOut}>
                <Link to={`/login`}>Log Out</Link>
              </NavItem>
            )}
          </Nav>
        </Navbar>
      </>
    );
  }
}

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

import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const userId = localStorage.getItem("userId");
    return (
      <>
        <Navbar color="light" light expand="md" sticky='top'>
          <NavbarBrand href="/">Tech Plum</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/item-list">View Items</Link>
              </NavItem>
              <NavItem>
                <Link to={`/dashboard/${userId}`}>
                Profile
                </Link>
              </NavItem>
            </Nav>
          
        </Navbar>
      </>
    );
  }
}

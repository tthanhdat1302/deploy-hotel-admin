import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  DropdownItem,
  NavbarText,
} from "reactstrap";

class App extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/deploy-hotel-admin">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/deploy-hotel-admin/city">City</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/deploy-hotel-admin/hotel">Hotel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/deploy-hotel-admin/role">Role</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/deploy-hotel-admin/user">User</NavLink>
            </NavItem>
            <NavbarText>{localStorage.getItem("email")}</NavbarText>
            <NavItem>
              <NavLink href="/deploy-hotel-admin/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default App;

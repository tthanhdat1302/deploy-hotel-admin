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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/city">City</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hotel">Hotel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/role">Role</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user">User</NavLink>
            </NavItem>
            <NavbarText>{localStorage.getItem("email")}</NavbarText>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default App;

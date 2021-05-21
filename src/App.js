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

import CityCreate from "./components/City/Create";
import CityIndex from "./components/City/Index";
import CityUpdate from "./components/City/Update";

import HotelIndex from "./components/Hotel/Index";
import HotelCreate from "./components/Hotel/HotelCreate";
import HotelUpdate from "./components/Hotel/HotelUpdate";

import RoomIndex from "./components/Room/Index";
import RoomCreate from "./components/Room/RoomCreate";
import RoomUpdate from "./components/Room/RoomUpdate";

import RoleIndex from "./components/Role/Index";
import RoleCreate from "./components/Role/RoleCreate";
import RoleUpdate from "./components/Role/RoleUpdate";

import UserIndex from "./components/User/Index";
import UserUpdate from "./components/User/UserUpdate";

import Logout from "./components/Login/Logout";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
          <Switch>
            <Route exact path="/deploy-hotel-admin/city" component={CityIndex} />
            <Route path="/deploy-hotel-admin/city/create" component={CityCreate} />
            <Route path="/deploy-hotel-admin/city/update/:id" component={CityUpdate} />

            <Route exact path="/deploy-hotel-admin/hotel" component={HotelIndex} />
            <Route path="/deploy-hotel-admin/hotel/create" component={HotelCreate} />
            <Route path="/deploy-hotel-admin/hotel/update/:id" component={HotelUpdate} />

            <Route exact path="/deploy-hotel-admin/hotel/:id/room" component={RoomIndex} />
            <Route path="/deploy-hotel-admin/hotel/:id/room/create" component={RoomCreate} />
            <Route
              path="/deploy-hotel-admin/hotel/:idHotel/room/update/:id"
              component={RoomUpdate}
            />

            <Route exact path="/deploy-hotel-admin/role" component={RoleIndex} />
            <Route path="/deploy-hotel-admin/role/create" component={RoleCreate} />
            <Route path="/deploy-hotel-admin/role/update/:id" component={RoleUpdate} />

            <Route exact path="/deploy-hotel-admin/user" component={UserIndex} />
            <Route path="/deploy-hotel-admin/user/update/:id" component={UserUpdate} />

            <Route exact path="/deploy-hotel-admin/logout" component={Logout}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

ReactDOM.render(
  <React.StrictMode>
    {localStorage.getItem("role") == null ||
    localStorage.getItem("role") != "Admin" ? (
      <Login></Login>
    ) : (
      <Router>
        <App></App>
        <Switch>
          <Route exact path="/city" component={CityIndex} />
          <Route path="/city/create" component={CityCreate} />
          <Route path="/city/update/:id" component={CityUpdate} />

          <Route exact path="/hotel" component={HotelIndex} />
          <Route path="/hotel/create" component={HotelCreate} />
          <Route path="/hotel/update/:id" component={HotelUpdate} />

          <Route exact path="/hotel/:id/room" component={RoomIndex} />
          <Route path="/hotel/:id/room/create" component={RoomCreate} />
          <Route
            path="/hotel/:idHotel/room/update/:id"
            component={RoomUpdate}
          />

          <Route exact path="/role" component={RoleIndex} />
          <Route path="/role/create" component={RoleCreate} />
          <Route path="/role/update/:id" component={RoleUpdate} />

          <Route exact path="/user" component={UserIndex} />
          <Route path="/user/update/:id" component={UserUpdate} />

          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </Router>
    )}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

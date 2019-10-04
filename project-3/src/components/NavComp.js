import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "../styles/NavComp.css"
//Need to import Home Component to Link to
import CreatePageComp from "./CreatePageComp";


//For Register & Login
import { Provider } from "react-redux";
import store from "../store";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthTokins";
import { setCurrentUser, logoutUser } from "../actions/authActions";


//Tiff's Component Improts 
import Register from "../auth/Register"
import Login from "../auth/Login"
import PrivateRoute from "../components/privateRoutes/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";

class Nav extends Component {
  render() {
    return (
      <div className="NavWrapper">
        <nav>
          {/* Links to Components */}
          <Link to="/">Home</Link>
          <Link to="/CreatePageComp">Create Page</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Login"></Link>

        </nav>
        {/* Routes */}
        <Provider store={store}>
          <Route path="/CreatePageComp" exact component={CreatePageComp}></Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Login />
          <Register />
        </Provider>


      </div>
    );
  }
}
export default Nav;

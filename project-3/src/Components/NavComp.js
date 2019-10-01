import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../styles/NavComp.css"
//Need to import Home Component to Link to
import CreatePageComp from "./CreatePageComp";

class Nav extends Component {
  render() {
    return (
      <div className="NavWrapper">
        <nav>
            {/* Links to Components */}
          <Link to="/">Home</Link>
          <Link to="/CreatePageComp">Create Page</Link>
        </nav>
        {/* Routes */}
        <Route path="/CreatePageComp" exact component={CreatePageComp}></Route>
      </div>
    );
  }
}
export default Nav;

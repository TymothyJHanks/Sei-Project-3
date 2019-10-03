import React, { Component } from "react";
import { Route, Link} from "react-router-dom";
import "../styles/NavComp.css"
//Need to import Home Component to Link to
import CreatePageComp from "./CreatePageComp";
import WetherCompBackUp from "./WeatherCompBackUp"
import Login from "../auth/Login"

class Nav extends Component {
  render() {
    return (
      <div className="NavWrapper"> 
      <h1>MrsRvr</h1>
        <nav>
            {/* Links to Components */}
          <Link to="/" className="home">Home</Link>
          <Link to="/CreatePageComp" className="create">Create Page</Link>
          <Link to="/Weather">Temperature on Mars</Link>
          <Link to="/login">Login</Link>
        </nav>
        {/* Routes */}
        <Route path="/Weather" component={WetherCompBackUp}/>
        <Route path="/CreatePageComp" component={CreatePageComp}/>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}
export default Nav;

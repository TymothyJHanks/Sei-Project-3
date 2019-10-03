import React, { Component } from "react";
import { Route, Link} from "react-router-dom";
import "../styles/NavComp.css"
//Need to import Home Component to Link to
import CreatePageComp from "./CreatePageComp";

class Nav extends Component {
  render() {
    return (
      <div className="NavWrapper">
        <nav>
            {/* Links to Components */}
          <Link to="/" className="home">Home</Link>
          <h1>MrsRvr</h1>
          <Link to="/CreatePageComp" className="create">Create Page</Link>
        </nav>
        {/* Routes */}
        <Route path="/CreatePageComp" exact component={CreatePageComp}></Route>
      </div>
    );
  }
}
export default Nav;

import React, { Component } from "react";

//Need to import Home Component to Link to
//Impot Home Component Here

class Search extends Component {
  render() {
    return (
      <div className="SearchWrapper">
        <header>
          <form onSubmit={}>
          <h1>This is the Search Component</h1>
            <input placeholder="Search Here" type="text"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </header>
      </div>
    );
  }
}
export default Search;

import React, { Component } from "react";
import RvrImg from "./components/RvrImg";
import RvrPage from "./components/RvrPage";
import "./App.css";
import { Route, Link } from "react-router-dom";

//Tym's Component Imports
import Search from "./components/SearchComp";
import NavComp from "./components/NavComp";
import CreatePageComp from "./components/CreatePageComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers: []
    };
  }
  componentDidMount() {
    let roverData = [];
    fetch(
      "https://mrsrvr.herokuapp.com/"
    )
      .then(res => res.json())
      .then(res => {
        roverData = res;
        this.setState({
          rovers: roverData
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <main>
          <NavComp />
          <Route path="/" exact render={() => <Search rovers={this.state.rovers}/>} />
          <Route
            path="/"
            exact
            render={() => {
              return this.state.rovers.map((image, i) => {
                return (
                  <Link to={"/" + image._id} key={i}>
                    <RvrImg {...image} key={i} />
                  </Link>
                );
              });
            }}
          />
          {this.state.rovers.map((image, i) => {
            return (
              <Route
                path={"/" + image._id}
                key={i}
                render={() => <RvrPage {...image} key={i} />}
                key={i}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;

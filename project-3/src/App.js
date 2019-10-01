import React, { Component } from "react";
import RvrImg from "./components/RvrImg";
import RvrPage from "./components/RvrPage";
import "./App.css";
import { Route, Link } from "react-router-dom";

//Tym's Component Imports
import SearchComp from "./Components/SearchComp"
import NavComp from "./Components/NavComp"
import CreatePageComp from "./Components/CreatePageComp"

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
      "https://raw.githubusercontent.com/tiffdawn15/MrsRvr-Backend/master/rover.json"
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
          <SearchComp></SearchComp>
          <Route
            path="/"
            exact
            render={() =>
              this.state.rovers.map((image, i) => {
                console.log(image);
                return (
                  <Link to={"/" + image.id} key={i}>
                    <RvrImg {...image} key={i} />
                  </Link>
                );
              })
            }
          />
          {this.state.rovers.map((image, i) => {
            return (
              <Route
                path={"/" + image.id}
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


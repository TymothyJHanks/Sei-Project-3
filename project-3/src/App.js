import React, { Component } from "react";
import RvrImg from "./components/RvrImg";
import RvrPage from "./components/RvrPage";
import "./App.css";
import { Route, Link } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";

//Tym's Component Imports
import NavComp from "./components/NavComp";
import WeatherComp from "./components/WeatherCompBackUp";

//Tiff's Component Improts
import Register from "./auth/Register";
import Login from "./auth/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers: []
    };
    this.nameFind = this.nameFind.bind(this);
  }
  nameFind(evt) {
    //input set to variable
    let form = evt.target.value;
    //set to uppercase to match
    form = form.toUpperCase();
    //loop through all receipts
    this.state.rovers.forEach((rover, i) => {
      //set each person's order to a variable capped to compare with form
      let nameCap = rover.roverName.toUpperCase();
      //sliced to compare only as many letters as put into form
      nameCap = nameCap.slice(0, form.length);
      // array is a copy of array of receipts
      let array = this.state.rovers.slice();
      // if the name matches
      if (nameCap === form) {
        /* set paid to true (used to define which receipts to show in Receipts.js).
         ** this results in showing all receipts when input feild is changed, then
         ** changed back to blank. This would be a problem if this were an actual receipt,
         ** however it's not, so it works.
         */
        array[i].render = true;
        this.setState({
          rovers: array
        });
      } else {
        // else set paid to false to hide.
        array[i].render = false;
        this.setState({
          rovers: array
        });
      }
    });
  }
  componentDidMount() {
    let roverData = [];
    fetch("https://mrsrvr.herokuapp.com/")
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
        <VideoBackground />
        <main>
          {/* Tiff Trying to add Register and Login to the component  */}
          <Route exact path="/register" component={Register}>
            Register Account
          </Route>
          <Route exact path="/login" component={Login}>
            Login
          </Route>
          <NavComp />
          <Route
            path="/"
            exact
            render={() => (
              <div className="SearchWrapper">
                <input
                  placeholder="Search Name Here"
                  type="text"
                  onChange={this.nameFind}
                ></input>
              </div>
            )}
          />
          <Route
            path="/"
            exact
            render={() => {
              return this.state.rovers.map((image, i) => {
                return (
                  <Link to={"/" + image._id} key={i}>
                    <RvrImg {...image} info={image} key={i} />
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
                render={() => <RvrPage {...image} info={image} key={i} />}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;

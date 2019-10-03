import React, { Component } from "react";
import RvrImg from "./components/RvrImg";
import RvrPage from "./components/RvrPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import VideoBackground from "./components/VideoBackground"
import Audio from "./components/Audio"

//Tiff adding Redux stuff
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

//Tym's Component Imports
import NavComp from "./components/NavComp";
import CreatePageComp from "./components/CreatePageComp";
import Weather from "./components/WeatherComp"
import WeatherBack from "./components/WeatherCompBackUp"
import * as V from 'victory'

//Tiff's Component Improts 
import Register from "./auth/Register"
import Login from "./auth/Login"
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";


// Tiff's check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
const currentTime = Date.now() / 1000; // to get in milliseconds
if (decoded.exp < currentTime) {
  // Logout user
  store.dispatch(logoutUser());
  // Redirect to login
  window.location.href = "./login";
}
}


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

        <Provider store={store}>
        <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          <Login />
          <Register />
        </Provider>
       

        {/* <Audio />
        <VideoBackground />
        <main>
          //Tiff Trying to add Register and Login to the component 
        <Route exact path="/register" component={Register}>Register Account</Route> 
        <Route exact path="/login" component={Login}>Login</Route>
       <NavComp />
    
       
          <Route path="/" exact render={() => <div className="SearchWrapper">
          
        <input
          placeholder="Search Name Here"
          type="text"
          onChange={this.nameFind}
        ></input>
      </div>} />
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
              />
            );
          })}
        </main> */}
      </div>
    );
  }
}

export default App;

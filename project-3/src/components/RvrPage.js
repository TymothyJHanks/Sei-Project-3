import React, { Component } from "react";
import "../styles/RvrPage.css"

class RvrPage extends Component {
  render() {
    return (
      <div className="RvrPage">
        <img className="singlePhoto" src={this.props["img_src"]} alt={this.props.roverName} />
        <div className="photoData">
          <h3>{this.props.roverName} Rover</h3>
          <ul>
            <li>Earth date: {this.props.earth_date}</li>
            <li>Launch Date: {this.props.roverLaunch_date}</li>
            <li>Landing Date: {this.props.roverLanding_date}</li>
            <li>Status: {this.props.roverStatus}</li>
            <li>Total Photos: {this.props.roverTotal_photos}</li>
          </ul>
          <div className="heartButton"></div>
        </div>
      </div>
    );
  }
}

export default RvrPage;

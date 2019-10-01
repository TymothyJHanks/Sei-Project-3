import React, { Component } from "react";

class RvrPage extends Component {
  render() {
    return (
      <div>
        <img src={this.props["img_src"]} alt={this.props.name} />
        <div className="photoData">
          <h3>{this.props.rover.name} Rover</h3>
          <ul>
            <li>Earth date: {this.props.earth_date}</li>
            <li>Camera: {this.props.camera.full_name}</li>
            <li>Launch Date: {this.props.rover["launch_date"]}</li>
            <li>Landing Date: {this.props.rover["landing_date"]}</li>
            <li>Status: {this.props.rover.status}</li>
            <li>Max Sol: {this.props.rover["max_sol"]}</li>
          </ul>
          <div classname="heartButton"></div>
        </div>
      </div>
    );
  }
}

export default RvrPage;

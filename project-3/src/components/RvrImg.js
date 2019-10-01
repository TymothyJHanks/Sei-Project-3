import React, { Component } from "react";

class RvrImg extends Component {
  render() {
    return (
      <div classname="RvrImg">
        <img src={this.props["img_src"]} alt={this.props.name} />
        <div className="photoData">
          <h3>{this.props.rover.name}</h3>
          <ul>
            <li>{this.props.earth_date}</li>
            <li>{this.props.camera.full_name}</li>
          </ul>
          <div classname="heartButton"></div>
        </div>
      </div>
    );
  }
}

export default RvrImg;

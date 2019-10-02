import React, { Component } from "react";
import "../styles/RvrImg.css"
class RvrImg extends Component {
  render() {
    if(this.props.render){
    return (
      <div className="RvrImg">
        <img className="insta" src={this.props["img_src"]} alt={this.props.name} />
        <div className="photoData">
          <h3>{this.props.roverName}</h3>
          <ul>
            <li>{this.props.earth_date}</li>
            <li>Status: {this.props.roverStatus}</li>
          </ul>
          <div className="heartButton"></div>
        </div>
      </div>
    );
  } else {
    return null
  }
  }
}

export default RvrImg;

import React, { Component } from "react";
import "../styles/RvrImg.css";
import { ReactComponent as NoLike } from "./NoLike.svg";
import { ReactComponent as Like } from "./Like.svg";
class RvrImg extends Component {
  constructor() {
    super();
    this.state = {
      heartButton: [<NoLike />, <Like />],
      heartStatus: 0
    };
    this.likeIt = this.likeIt.bind(this);
  }
  likeIt(evt) {
    evt.preventDefault();
    this.setState({
      heartStatus: 1
    });
  }
  render() {
    if (this.props.render) {
      return (
        <div className="RvrImg">
          <img
            className="insta"
            src={this.props["img_src"]}
            alt={this.props.name}
          />
          <div className="photoData">
            <div className="nameAndLike">
              <div className="roverName">
                <h3>{this.props.roverName}</h3>
              </div>
              <div className="heartButton" onClick={this.likeIt}>
                {this.state.heartButton[this.state.heartStatus]}
              </div>
            </div>
            <ul>
              <li>{this.props.earth_date}</li>
              <li>Status: {this.props.roverStatus}</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RvrImg;

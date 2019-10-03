import React, { Component } from "react";
import "../styles/RvrPage.css";
import { ReactComponent as NoLike } from "./NoLike.svg";
import { ReactComponent as Like } from "./Like.svg";

class RvrPage extends Component {
  constructor() {
    super();
    this.state = {
      heartButton: [<NoLike />, <Like />],
      heartStatus: 0
    };
    this.likeIt = this.likeIt.bind(this);
    //bind functions here
    this.deleteData = this.deleteData.bind(this);
  }
  likeIt(evt) {
    evt.preventDefault();
    this.setState({
      heartStatus: 1
    });
  }
  //place functions here
  deleteData(event) {
    event.preventDefault();
    alert(`Deleting a Rover`);
    //Need to change fetch url when fully deployed backend is complete
    //Need to change rover.Name to Id when the backend is done
    fetch(`https://mrsrvr.herokuapp.com/delete/${this.props.id}`, {
      //check delete path controllers - `https://mrsrvr.herokuapp.com/delete/${this.}`
      method: "DELETE"
    })
      .then(responce => {
        console.log(responce + this.props.id);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="RvrPage">
        <img
          className="singlePhoto"
          src={this.props["img_src"]}
          alt={this.props.roverName}
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
            <li>
              <b>Earth Date:</b> {this.props.earth_date}
            </li>
            <li>
              <b>Launch Date:</b> {this.props.roverLaunch_date}
            </li>
            <li>
              <b>Landing Date:</b> {this.props.roverLanding_date}
            </li>
            <li>
              <b>Status:</b> {this.props.roverStatus}
            </li>
            <li>
              <b>Total Photos:</b> {this.props.roverTotal_photos}
            </li>
          </ul>
          <div className="deleteButton">
            <button onClick={this.deleteData}>Click Here to Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RvrPage;

// Original
// import React, { Component } from "react";
// import "../styles/RvrPage.css"

// class RvrPage extends Component {
//   render() {
//     return (
//       <div className="RvrPage">
//         <img className="singlePhoto" src={this.props["img_src"]} alt={this.props.roverName} />
//         <div className="photoData">
//           <h3>{this.props.roverName} Rover</h3>
//           <ul>
//             <li>Earth date: {this.props.earth_date}</li>
//             <li>Launch Date: {this.props.roverLaunch_date}</li>
//             <li>Landing Date: {this.props.roverLanding_date}</li>
//             <li>Status: {this.props.roverStatus}</li>
//             <li>Total Photos: {this.props.roverTotal_photos}</li>
//           </ul>
//           <div className="heartButton"></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default RvrPage;


//change ID's on the backend on deleting by ID

//Delete a rover record referencing the title 



// destroy: (req,res) => {
//   Rover.findOneAndDelete({id: req.params.id})
//   .then(rover => res.json(rover))
// }

// controllerRouter.delete("/delete/:", roverController.destroy)

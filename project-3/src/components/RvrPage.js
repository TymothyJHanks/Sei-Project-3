import React, { Component } from "react";
import "../styles/RvrPage.css";
import { ReactComponent as NoLike } from "./NoLike.svg";
import { ReactComponent as Like } from "./Like.svg";

class RvrPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartButton: [<NoLike />, <Like />],
      heartStatus: 0,
      updateForm: false,
      updateInfo: {
        earth_date: this.props.earth_date,
        roverLaunch_date: this.props.roverLaunch_date,
        roverLanding_date: this.props.roverLanding_date,
        roverStatus: this.props.roverStatus
      },
      updateButton: "Update Info"
    };
    this.likeIt = this.likeIt.bind(this);
    //bind functions here
    this.deleteData = this.deleteData.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    fetch(`https://mrsrvr.herokuapp.com/delete/${this.props._id}`, {
      //check delete path controllers - `https://mrsrvr.herokuapp.com/delete/${this.}`
      method: "DELETE"
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
  //Zach's update button function
  updateForm(event) {
    let current = this.state.updateForm;
    this.setState({
      updateForm: !current
    });
    if (current) {
      this.setState({
        updateButton: "Update Info"
      });
      fetch(`https://mrsrvr.herokuapp.com/name/update/${this.props._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive",
          "Cache-Control": "no-cache",
          Accept: "*/*"
        },
        body: JSON.stringify(this.state.updateInfo)
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      this.setState({
        updateButton: "Submit Changes"
      });
    }
  }

  handleChange(event) {
    let stateName = event.target.name;
    let newInfo = this.state.updateInfo;
    console.log(newInfo);
    newInfo[stateName] = event.target.value;
    this.setState({
      updateInfo: newInfo
    });
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
              <b>Earth Date:</b>{" "}
              {this.state.updateForm ? (
                <input
                  type="text"
                  placeholder={this.state.updateInfo.earth_date}
                  name="earth_date"
                  onChange={this.handleChange}
                />
              ) : (
                this.state.updateInfo.earth_date
              )}
            </li>
            <li>
              <b>Launch Date:</b>{" "}
              {this.state.updateForm ? (
                <input
                  type="text"
                  placeholder={this.state.updateInfo.roverLaunch_date}
                  name="roverLaunch_date"
                  onChange={this.handleChange}
                />
              ) : (
                this.state.updateInfo.roverLaunch_date
              )}
            </li>
            <li>
              <b>Landing Date:</b>{" "}
              {this.state.updateForm ? (
                <input
                  type="text"
                  placeholder={this.state.updateInfo.roverLanding_date}
                  name="roverLanding_date"
                  onChange={this.handleChange}
                />
              ) : (
                this.state.updateInfo.roverLanding_date
              )}
            </li>
            <li>
              <b>Status:</b>
              {this.state.updateForm ? (
                <input
                  type="text"
                  placeholder={this.state.updateInfo.roverStatus}
                  name="roverStatus"
                  onChange={this.handleChange}
                />
              ) : (
                this.state.updateInfo.roverStatus
              )}
            </li>
            <li>
              <b>Total Photos:</b> {this.props.roverTotal_photos}
            </li>
          </ul>

          <div className="Buttons">
            <button className="update" onClick={this.updateForm}>
              {this.state.updateButton}
            </button>
            <button onClick={this.deleteData} className="delete">
              Click Here to Delete
            </button>
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

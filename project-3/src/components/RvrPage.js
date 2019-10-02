import React, { Component } from "react";
import "../styles/RvrPage.css"

class RvrPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    //bind functions here
    this.deleteData = this.deleteData.bind(this)
  }
  //place functions here
  deleteData(event){
    event.preventDefault();
    alert(`Deleting a Rover`);
    //Need to change fetch url when fully deployed backend is complete
    fetch(`https://mrsrvr.herokuapp.com/delete/${this.props.roverName}`, { //check delete path controllers - `https://mrsrvr.herokuapp.com/delete/${this.}`
        method: "DELETE",
    })
    .then(responce =>{
        console.log(responce)
    })
    .catch(error => console.log(error));
}
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
          {/* Place a onClick  */}
          <div className="heartButton">
            <button>Click Here to Favorite</button>
          </div>

          <div className="deleteButton">
            <button onClick={this.deleteData} >Click Here to Delete</button>
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

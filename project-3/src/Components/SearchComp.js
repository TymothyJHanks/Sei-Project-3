import React, { Component } from "./node_modules/react";

//This data should be changed with the actual json backend data to loop through it


//Need to import Home Component to Link to
//Impot Home Component Here

class Search extends Component {
  constructor(props) {
    super(props);
    //this.state object to grab the input that the user places into the search bar
    this.state = {
      userInput: this.props.rovers
    };
    //Place Binding Functions Here
    // this.handleChange = this.handleChange.bind(this);
    this.nameFind = this.nameFind.bind(this);
  }

  //Place Functions Here

  // ################################################
  nameFind(evt) {
    //input set to variable
    let form = evt.target.value;
    //set to uppercase to match
    form = form.toUpperCase();
    //loop through all receipts
    this.state.userInput.forEach((receipt, i) => {
      //set each person's order to a variable capped to compare with form
      let nameCap = receipt.roverName.toUpperCase();
      //sliced to compare only as many letters as put into form
      nameCap = nameCap.slice(0, form.length);
      // array is a copy of array of receipts
      let array = this.state.userInput.slice();
      // if the name matches
      if (nameCap === form) {
        /* set paid to true (used to define which receipts to show in Receipts.js).
         ** this results in showing all receipts when input feild is changed, then
         ** changed back to blank. This would be a problem if this were an actual receipt,
         ** however it's not, so it works.
         */
        array[i].toggle = true;
        this.setState({
          userInput: array
        });
      } else {
        // else set paid to false to hide.
        array[i].toggle = false;
        this.setState({
          userInput: array
        });
      }
    });
  }
  // ################################################

  // //handleChange Funtion that changes the empty string into the value that the user types into the input field from the virtual dom below
  // handleChange(event) {
  //     //setting the state of the key "this.state.userInput" and giving it the value of whatever the user inputs into the virtual dom
  //     let stateName = event.target.name
  //     this.setState({
  //         [stateName]: event.target.value,
  //     });
  // }

  //Rendering the virtual dom and what displays on it
  render() {
    return (
      <div className="SearchWrapper">
        <input
          placeholder="Search Name Here"
          type="text"
          onChange={this.nameFind}
        ></input>
      </div>
    );
  }
}
//exporting this file so that it can be used globally
export default Search;

//NOTES/What I Need To Figure Out
//Need to figure out when I click search, I specifically search for something inside my json file
//You need the GET functionallity of the back end and then put the name of what the user imputs on the back of the url
//for the Api GET call to scan for that specific data like this: `https://www.exmpale.com/api/Plug_In_User_Data_Here`
//to specifically search for for that data point then display it

//How the search bar is working
//Searching for the rovers name and then match it up with the names in the database

// nameFind(evt) {
//     //input set to variable
//     let form = evt.target.value;
//     //set to uppercase to match
//     form = form.toUpperCase();
//       //loop through all receipts
//       this.state.orders.forEach((receipt, i) => {
//         //set each person's order to a variable capped to compare with form
//         let nameCap = receipt.person.toUpperCase();
//         //sliced to compare only as many letters as put into form
//         nameCap = nameCap.slice(0, form.length);
//         // array is a copy of array of receipts
//         let array = this.state.orders.slice();
//         // if the name matches
//         if (nameCap === form) {
//           /* set paid to true (used to define which receipts to show in Receipts.js).
//           ** this results in showing all receipts when input feild is changed, then
//           ** changed back to blank. This would be a problem if this were an actual receipt,
//           ** however it's not, so it works.
//            */
//           array[i].paid = true;
//           this.setState({
//             orders: array
//           });
//         } else {
//           // else set paid to false to hide.
//           array[i].paid = false;
//           this.setState({
//             orders: array
//           });
//         }
//       });

//   }

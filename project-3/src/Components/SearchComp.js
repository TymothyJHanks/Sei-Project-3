import React, { Component } from "react";

//Need to import Home Component to Link to
//Impot Home Component Here

class Search extends Component {
    constructor(props){
        super(props)
        //this.state object to grab the input that the user places into the search bar
        this.state = {
            userInput: ""
        } 
        //Place Binding Functions Here
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Place Functions Here
    
    //handleChange Funtion that changes the empty string into the value that the user types into the input field from the virtual dom below
    handleChange(event) {
        //setting the state of the key "this.state.userInput" and giving it the value of whatever the user inputs into the virtual dom
        this.setState({
            userInput: event.target.value
        });
    }

    //handleSubmit function sends the user the input that they have has been submitted and what it is
    handleSubmit(event){
        alert(`Searching the database for ${this.state.userInput}`);
        event.preventDefault();
    }

//Rendering the virtual dom and what displays on it
  render() {
    return (
      <div className="SearchWrapper">
          <form onSubmit={this.handleSubmit}>
          <h1>This is the Search Component</h1>

            <input 
                placeholder="Search Here" 
                type="text" 
                value={this.state.userInput}
                onChange={this.handleChange}></input>  

            <input type="Submit" value="Submit"></input>
          </form>
          <p></p>
      </div>
    );
  }
}
//exporting this file so that it can be used globally
export default Search;

//NOTES
    //Need to figure out when I click search, I specifically search for something inside my json file
    //You need the GET functionallity of the back end and then put the name of what the user imputs on the back of the url
    //for the Api GET call to scan for that specific data like this: `https://www.exmpale.com/api/Plug_In_User_Data_Here`
    //to specifically search for for that data point then display it
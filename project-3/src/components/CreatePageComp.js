import React, {Component} from "react";
import "../styles/CreatePageComp.css"
class CreatePageComp extends Component {
    constructor(props){
        super(props)
        //Houseing User Input Data
        this.state = {
            img_src: "",
            roverName: "",
            roverStatus: "",
            render: true
        }
        //Place Binding Here
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.submitNewData = this.submitNewData.bind(this);
    }
    //Place Functions Here
    handleChange(event) {
        //setting the state of the key "this.state.userInput" and giving it the value of whatever the user inputs into the virtual dom
        let stateName = event.target.name
        this.setState({
            [stateName]: event.target.value,
        });
    }

    // // Need to change this function so that when you submit something this function looks at the backend data
    // handleSubmit(event){
    //     alert(`Creating a rover based on this data... Img Url: ${this.state.img_src}; Earth Date: ${this.state.roverName}; roverStatus Number: ${this.state.roverStatus} `);
    //     event.preventDefault( );
    // }

    submitNewData(event){
        event.preventDefault();
        alert(`Creating a rover based on this data... Img Url: ${this.state.img_src}; Earth Date: ${this.state.roverName}; roverStatus Number: ${this.state.roverStatus} `);
        //Need to change fetch url when fully deployed backend is complete
        fetch("https://mrsrvr.herokuapp.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(responce =>{
            console.log(responce)
        })
        .catch(error => console.log(error));
        
    }
    
    //Place Rendering Virtual Dom Here
    render(){
        return(
            <div className="CreateWrapper">
                {/* Need to place onSubmit={} attribute to the Form Tag */}
                <form onSubmit={this.submitNewData}>
                <h1>this is the create page</h1>
                {/* Each Data Point Is based off of data/model/schema information that I need to create a new data peice in JSON */}
                <div className="DataPointOne">
                    <h2>Paste Image URL of Rover </h2>
                <input 
                    type="text" 
                    placeholder="Image Url"
                    value={this.state.img_src}
                    onChange={this.handleChange}
                    name="img_src"
                    ></input>
                </div>

                <div className="DataPointTwo">
                <h2>Rover Name Here</h2>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={this.state.roverName}
                    onChange={this.handleChange}
                    name="roverName"
                    ></input>
                </div>

                <div className="DataPointThree">
                <h2>Input Rover Status Here</h2>
                <input 
                    type="text" 
                    placeholder="Rover Status"
                    value={this.state.roverStatus}
                    onChange={this.handleChange}
                    name="roverStatus"
                    ></input>
                </div>
                {/* This submits the form */}
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default CreatePageComp

// NOTES/HELP

// inputChange(evt) {
//     let stateName = evt.target.name;
//     this.setState({
//       [stateName]: evt.target.value
//     });
//   }
//   submitNewChar(evt) {
//     evt.preventDefault();
//     fetch("https://safe-crag-03509.herokuapp.com/characters/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//                 "Connection": "keep-alive",
//                 "Cache-Control": "no-cache",
//                 "Accept": "*/*"
//       },
//       body: JSON.stringify(this.state)
//     })
//       .then(res => {
//         conroverStatuse.log(res)
        
//       })
//       .catch(err => conroverStatuse.log(err));
  
//   }


// img_src: String, = Image Url
//    roverName: Date, = Earth Date
//    roverStatus: Number, = roverStatus Date
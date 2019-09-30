import React, {Component} from "react";

class CreatePageComp extends Component {
    constructor(props){
        super(props)
        //Houseing User Input Data
        this.state = {
            dataPoint1: "",
            dataPoint2: "",
            dataPoint3: ""
        }
        //Place Binding Here
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Place Functions Here
    handleChange(event) {
        //setting the state of the key "this.state.userInput" and giving it the value of whatever the user inputs into the virtual dom
        let stateName = event.target.name
        this.setState({
            [stateName]: event.target.value,
        });
    }
    // Need to change this function so that when you submit something this function looks at the backend data
    handleSubmit(event){
        alert(`We are creating a rover based on this data ${this.state.dataPoint1} & ${this.state.dataPoint2} & ${this.state.dataPoint3} `);
        event.preventDefault( );
    }

    submitNewData(event){
        event.preventDefault();
        //Need to change fetch url when fully deployed backend is complete
        fetch("https://raw.githubusercontent.com/tiffdawn15/MrsRvr-Backend/master/rover.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*"
            },
            body: JSON.stringify(this.state)
        })
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
                <form onSubmit={this.handleSubmit}>
                <h1>this is the create page</h1>
                {/* Each Data Point Is based off of data/model/schema information that I need to create a new data peice in JSON */}
                <div className="DataPointOne">
                    <h2>Information for DataPoint 1 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint1"
                    value={this.state.dataPoint1}
                    onChange={this.handleChange}
                    name="dataPoint1"
                    ></input>
                </div>

                <div className="DataPointTwo">
                <h2>Information for DataPoint 2 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint2"
                    value={this.state.dataPoint2}
                    onChange={this.handleChange}
                    name="dataPoint2"
                    ></input>
                </div>

                <div className="DataPoiintThree">
                <h2>Information for DataPoint 3 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint3"
                    value={this.state.dataPoint3}
                    onChange={this.handleChange}
                    name="dataPoint3"
                    ></input>
                </div>
                {/* This submits the form */}
                    <input type="submit" value="Submit"></input>
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
//         console.log(res)
        
//       })
//       .catch(err => console.log(err));
  
//   }
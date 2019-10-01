import React, {Component} from "react";

class CreatePageComp extends Component {
    constructor(props){
        super(props)
        //Houseing User Input Data
        this.state = {
            img_src: "",
            earth_date: "",
            SOL: ""
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
    //     alert(`Creating a rover based on this data... Img Url: ${this.state.img_src}; Earth Date: ${this.state.earth_date}; Sol Number: ${this.state.SOL} `);
    //     event.preventDefault( );
    // }

    submitNewData(event){
        event.preventDefault();
        alert(`Creating a rover based on this data... Img Url: ${this.state.img_src}; Earth Date: ${this.state.earth_date}; Sol Number: ${this.state.SOL} `);
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
                    <h2>Paste Image Url Below</h2>
                <input 
                    type="text" 
                    placeholder="Image Url"
                    value={this.state.img_src}
                    onChange={this.handleChange}
                    name="img_src"
                    ></input>
                </div>

                <div className="DataPointTwo">
                <h2>Input Earth Date Here</h2>
                <input 
                    type="text" 
                    placeholder="YYYY-MM-DD"
                    value={this.state.earth_date}
                    onChange={this.handleChange}
                    name="earth_date"
                    ></input>
                </div>

                <div className="DataPoiintThree">
                <h2>Input SOL Number Here</h2>
                <input 
                    type="text" 
                    placeholder="SOL Number"
                    value={this.state.SOL}
                    onChange={this.handleChange}
                    name="SOL"
                    ></input>
                </div>
                {/* This submits the form */}
                    <input onClick={this.submitNewData} type="submit" value="Submit"></input>
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


// img_src: String, = Image Url
//    earth_date: Date, = Earth Date
//    SOL: Number, = SOL Date
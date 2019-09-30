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
        this.setState({
            dataPoint1: event.target.value,
            dataPoint2: event.target.value,
            dataPoint3: event.target.value
        });
    }

    handleSubmit(event){
        alert(`We are creating a rover based on this data ${this.state.dataPoint1} & ${this.state.dataPoint2} & ${this.state.dataPoint3} `);
        event.preventDefault( );
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
                    ></input>
                </div>

                <div className="DataPointTwo">
                <h2>Information for DataPoint 2 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint2"
                    value={this.state.dataPoint2}
                    onChange={this.handleChange}
                    ></input>
                </div>

                <div className="DataPoiintThree">
                <h2>Information for DataPoint 3 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint3"
                    value={this.state.dataPoint3}
                    onChange={this.handleChange}
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
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

    }
    //Place Functions Here

    render(){
        return(
            <div className="CreateWrapper">
                <form>
                <h1>this is the create page</h1>

                <div className="DataPointOne">
                    <h2>Information for DataPoint 1 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint1"
                    ></input>
                </div>

                <div className="DataPointTwo">
                <h2>Information for DataPoint 2 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint2"
                    ></input>
                </div>

                <div className="DataPoiintThree">
                <h2>Information for DataPoint 3 Here</h2>
                <input 
                    type="text" 
                    placeholder="DataPoint3"
                    ></input>
                </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
export default CreatePageComp
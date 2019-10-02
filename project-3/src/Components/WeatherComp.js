import React, { Component } from "react";
// import * as V from 'victory'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const GraphData = {
  "photos": [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ]
};
//VERY IMPORTANT - the 'Sol' data point needs to be equal to the tempature on mars and the "Season" data point is equal to the season on Earth"
//So find out in spring, whats the tempature on mars and plug that tempature into the 'Sol' data point
const weatherData = [
    {
      "_id": "5d93b1f01bbc6a00045d882a",
      "Sol": 294,
      "First_UTC": "2019-09-24T07:09:32Z",
      "Last_UTC": "2019-09-25T07:49:06Z",
      "Season": "spring",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    },
    {
      "_id": "5d93b1f01bbc6a00045d882b",
      "Sol": 95,
      "First_UTC": "2019-09-25T07:49:07Z",
      "Last_UTC": "2019-09-26T08:28:42Z",
      "Season": "winter",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    },
    {
      "_id": "5d93b1f01bbc6a00045d8829",
      "Sol": 293,
      "First_UTC": "2019-09-23T06:29:58Z",
      "Last_UTC": "2019-09-24T07:09:31Z",
      "Season": "summer",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    },
    {
      "_id": "5d93b1f01bbc6a00045d8828",
      "Sol": 292,
      "First_UTC": "2019-09-22T05:50:23Z",
      "Last_UTC": "2019-09-23T06:29:57Z",
      "Season": "fall",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    }
  ]

class Weather extends Component {
  render() {
    return (
      <div className="WeatherWrapper">
        <h1>This is the weather component</h1>
        <h3>X-Axis = Seasons on Earth and Y-Axis = Tempature on Mars</h3>

        <div className="chartWrapper">
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryAxis></VictoryAxis>
          <VictoryAxis
            dependentAxis={true}
            tickFormat={x => `${x / 10}°F`}
          ></VictoryAxis>
          <VictoryBar
            data={weatherData}
            x={"Season"}
            y={"Sol"}
          ></VictoryBar>
        </VictoryChart>
        </div>

      </div>
    );
  }
}
export default Weather;

//Earth Season for x axis and the tempeture on mars for y axis
//Earth Season for x axis and the tempeture on venus for y axis
//Earth Season for x axis and the tempeture on saturn for y axis

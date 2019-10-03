import React, { Component } from "react";
// import * as V from 'victory'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
//Using this as a test to make sure this data works 
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
      "Sol": 81,
      "First_UTC": "2019-09-24T07:09:32Z",
      "Last_UTC": "2019-09-25T07:49:06Z",
      "Season": "Spring",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    },
    {
      "_id": "5d93b1f01bbc6a00045d882b",
      "Sol": 195,
      "First_UTC": "2019-09-25T07:49:07Z",
      "Last_UTC": "2019-09-26T08:28:42Z",
      "Season": "Winter",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    },
    {
      "_id": "5d93b1f01bbc6a00045d8829",
      "Sol": 112,
      "First_UTC": "2019-09-23T06:29:58Z",
      "Last_UTC": "2019-09-24T07:09:31Z",
      "Season": "Summer",
      "airTemp": [
        
      ],
      "pre": [
        
      ],
      "__v": 0
    },
    {
      "_id": "5d93b1f01bbc6a00045d8828",
      "Sol": 125,
      "First_UTC": "2019-09-22T05:50:23Z",
      "Last_UTC": "2019-09-23T06:29:57Z",
      "Season": "Fall",
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
        <h3>X-Axis = Days on Mars and Y-Axis = Tempature on Mars</h3>

        <div className="chartWrapper">
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryAxis></VictoryAxis>
          <VictoryAxis
            dependentAxis={true}
            tickFormat={x => `${x / -1}°F`}
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
//NOTES
// Use Victory Stack to stack more data points on the same graph without making another graph and you can use different data points meaning if you wanted to add venus and other planets this would be the best way!
//Click this link to be able to see what we can do with the data points - https://formidable.com/open-source/victory/docs/
//Earth Season for x axis and the tempeture on mars for y axis
//Earth Season for x axis and the tempeture on venus for y axis
//Earth Season for x axis and the tempeture on saturn for y axis

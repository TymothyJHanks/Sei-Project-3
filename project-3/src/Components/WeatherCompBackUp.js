import React, { Component } from "react";
// import * as V from 'victory'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine
} from "victory";
//Using this as a test to make sure this data works
const GraphData = {
  photos: [
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
        "_id": "5d94b8efd07b4c00043dbae7",
        "Sol": 295,
        "av": -69.706,
        "ct": 177459,
        "mn": -102.089,
        "mx": -26.606,
        "First_UTC": "2019-09-25T07:49:07Z",
        "Last_UTC": "2019-09-26T08:28:42Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbae5",
        "Sol": 293,
        "av": -61.575,
        "ct": 297434,
        "mn": -102.044,
        "mx": -26.367,
        "First_UTC": "2019-09-23T06:29:58Z",
        "Last_UTC": "2019-09-24T07:09:31Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbae4",
        "Sol": 292,
        "av": -68.784,
        "ct": 174137,
        "mn": -101.153,
        "mx": -26.434,
        "First_UTC": "2019-09-22T05:50:23Z",
        "Last_UTC": "2019-09-23T06:29:57Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbaea",
        "Sol": 298,
        "av": -75.574,
        "ct": 224624,
        "mn": -104.139,
        "mx": -26.833,
        "First_UTC": "2019-09-28T09:47:54Z",
        "Last_UTC": "2019-09-29T10:27:28Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbaec",
        "Sol": 300,
        "av": -67.873,
        "ct": 274576,
        "mn": -103.151,
        "mx": -25.6,
        "First_UTC": "2019-09-30T11:07:04Z",
        "Last_UTC": "2019-10-01T11:46:38Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbae6",
        "Sol": 294,
        "av": -64.969,
        "ct": 295273,
        "mn": -100.407,
        "mx": -24.846,
        "First_UTC": "2019-09-24T07:09:32Z",
        "Last_UTC": "2019-09-25T07:49:06Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbae9",
        "Sol": 297,
        "av": -71.11,
        "ct": 201018,
        "mn": -103.733,
        "mx": -26.088,
        "First_UTC": "2019-09-27T09:08:18Z",
        "Last_UTC": "2019-09-28T09:47:53Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbae8",
        "Sol": 296,
        "av": -63.258,
        "ct": 230447,
        "mn": -102.893,
        "mx": -26.39,
        "First_UTC": "2019-09-26T08:28:43Z",
        "Last_UTC": "2019-09-27T09:08:17Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbaeb",
        "Sol": 299,
        "av": -69.939,
        "ct": 180108,
        "mn": -101.252,
        "mx": -27.67,
        "First_UTC": "2019-09-29T10:27:29Z",
        "Last_UTC": "2019-09-30T11:07:03Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      },
      {
        "_id": "5d94b8efd07b4c00043dbaed",
        "Sol": 301,
        "av": -71.768,
        "ct": 208772,
        "mn": -103.886,
        "mx": -26.371,
        "First_UTC": "2019-10-01T11:46:39Z",
        "Last_UTC": "2019-10-02T06:00:51Z",
        "Season": "spring",
        "pre": [
          
        ],
        "__v": 0
      }
];


//three graphs and just displaying the average, min and max temp 
//SOl is the day of the week
class Weather extends Component {
  render() {
    return (
      <div className="WeatherWrapper">
        <h1>This is the weather component</h1>
        <h3>X-Axis = SOL aka the Soloar Date and Y-Axis = Average Tempature in °F</h3>

        <div className="chartWrapper">
          <VictoryChart theme={VictoryTheme.material}>
              {/* This first axis is so that the x-axis displays */}
              <VictoryAxis></VictoryAxis> 
              {/* created another axis specifically for the y-axis and so that information is independent from the x. Both are needed */}
              <VictoryAxis
              dependentAxis={true}
              tickFormat={x => `${x/1}°F`}/>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" }
              }}
            //   data={[
            //     { x:-64.969, y: 294 },
            //     { x: -69.706, y: 295 },
            //     { x: -63.258, y: 296 },
            //     { x: -71.11, y: 297 },
            //     { x: -75.574, y: 298 }
            //   ]}
            //   data={[
            //     { x:294, y: -64.969 },
            //     { x: 295, y: -69.706 },
            //     { x: 296, y: -63.258 },
            //     { x: 297, y: -71.11},
            //     { x: 298, y: -75.574}
            //   ]}
            //   data={[
            //     { x:`${-64.969}°F`, y: 294 },
            //     { x: `${-69.706}°F`, y: 295 },
            //     { x: `${-63.258}°F`, y: 296 },
            //     { x: `${-71.11}°F`, y: 297 },
            //     { x: `${-75.574}°F`, y: 298 }
            //   ]}
            data={weatherData}
            x={"Sol"}
            y={"av"}
            />
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

import React, { Component } from "react";
// import * as V from 'victory'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryStack,
  VictoryLegend
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
const weatherData2 = [ //This is not being used and  an delete
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
        <h3>X-Axis = Soloar Date / Y-Axis = Tempature in °F</h3>

        <div className="chartWrapper">
          <VictoryChart domainPadding={3} theme={VictoryTheme.material}>
            {/* This is the chart ledgend */}
            <VictoryLegend
              x={75} //Moves the chart on the x-axis
              y={100} //Moves the chart on the y-axis
              title="Daily Tempature on Mars" //This is where you put the legend title
              centerTitle //This is how you center the legend title
              orientation="horizontal" //this makes the legend data points horizontal instead of vertical
              gutter={10} //This spreads apart the legend data points and the larger the number the larger the spread between them
              style={ //this "styles" specifically works on the styling for the legend
                  {
                  border:{ //"border" adds a border box around the entire legend
                    stroke:"black"
                  },
                  title:{fontSize: 14} //this only increases the sisze of the "title" font
                }
              }s
              data={ //this this specifically adjusts the data points and interacts with them
                [
                  {name: "Max", symbol: { fill: "#fc0f03", type: "star"}}, //this interacts with the first data point
                  {name: "Average", symbol: { fill: "#24fc03", type: "star"}}, //this interacts with the second data point
                  {name: "Min", symbol: { fill: "#032cfc", type: "star"}}, //this interacts with the third data point
                ]
              }
              />
              {/* This first axis is so that the x-axis displays */}
              <VictoryAxis></VictoryAxis> 
              {/* created another axis specifically for the y-axis and so that information is independent from the x. Both are needed */}
              <VictoryAxis
              dependentAxis={true}
              tickFormat={x => `${x/1}°F`}/>
              {/* Data point 1 - average tempature */}
            <VictoryLine
            animate = {{ //this is how you animate 
              duration: 2000,
              onLoad: {duration: 8000}
            }}
              style={{
                data: { stroke: "#24fc03" },
                parent: { border: "1px solid #ccc" }
              }}
            data={weatherData}
            x={"Sol"}
            y={"av"}
            />
            {/* Data point 2 - max tempature */}
            <VictoryLine
            animate = {{
              duration: 2000,
              onLoad: {duration: 8000}
            }}
              style={{
                data: { stroke: "#fc0f03" },
                parent: { border: "1px solid #ccc" }
              }}
            data={weatherData}
            x={"Sol"}
            // x={`Sol`}
            y={"mx"}
            />
            {/* Data point 3 - Min tempature */}
            <VictoryLine
            animate = {{
              duration: 2000,
              onLoad: {duration: 8000}
            }}
              style={{
                data: { stroke: "#032cfc" },
                parent: { border: "1px solid #ccc" }
              }}
            data={weatherData}
            x={"Sol"}
            y={"mn"}
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



//UPDATE NOTES
//Need to add a chart that tells you the color - DONE
//need to add animation when you hover over the chart or something else 
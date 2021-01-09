// Use d3.json() to fetch data from JSON file. Incoming data is internally referred to as incomingData

// d3.json("shelter-in-place-records.json").then((incomingData) => {
//     function filtercovidstarts(stateCovidOrders) {
//         return stateCovidOrders.policy_level === "state" && stateCovidOrders.start_stop === "start";
//     }
//    }

// d3.json("shelter-in-place-records.json", function(data) {
//         console.log(data);
//    });

console.log("covid: starting covid: code . . .");

//function filtercovidstarts(stateCovidOrders) {
//    return stateCovidOrders.start_stop === "start";
//}

console.log("covid: function defined . . .");

// Use filter() to pass the function as its argument
//var filteredCovidStarts = covidRecords.filter(filtercovidstarts);
// Use filter() to pass the function as its argument
//    var filteredCovidStarts = incomingData.filter(filtercovidstarts);

console.log("covid: function run . . .");
console.log("covid: three sets of records should start printing . . .");

// Check to make sure covid records are filtering.
console.log(covidRecords);
  
// Use the map method with the arrow function to return all the states with start dates.
var statesStarted = covidRecords.map(covidrecs =>  covidrecs.state_id);
var datesStarted = covidRecords.map(covidrecs => covidrecs.start_date);
  
// Check your filtered states and dates.
console.log(statesStarted);
console.log(datesStarted);

// Use the map method with the arrow function to return all the states with start dates.
var statesStopped = covidRecords.map(covidrecs =>  covidrecs.state_id);
var datesStopped = covidRecords.map(covidrecs => covidrecs.stop_date);

// Check your filtered states and dates.
console.log(statesStopped);
console.log(datesStopped);

// Create first trace.
    var trace1 = {
      x: statesStarted,
      y: datesStarted,
      type: "line",
      name: "Start Dates",
      line: {color: "red"}
    };

// Create second trace.
var trace2 = {
    x: statesStopped,
    y: datesStopped,
    type: "line",
    name: "Stop Dates",
    line: {color: "green"}
  };

// Create the data array for our plot
var data = [trace1,trace2];
  
// Define the plot layout
    var layout = {
      title: "COVID-19 Stay-at-Home Orders by State",
      xaxis: { title: "State" },
      yaxis: { title: "Dates of Stay-at-Home Orders"}
    };
  
// Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("covid-by-state-line-plot", data, layout);

  
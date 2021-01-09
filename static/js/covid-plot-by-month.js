// Graph the number of COVID-19 Stay-at-Home Closures by month

console.log("covid-by-month: function defined . . .");

// Check to make sure covid records are filtering.
console.log(covidRecords);
  
// Use the map method with the arrow function to return all the states with start dates.
var numberStarts = covidRecords.map(covidrecs =>  covidrecs.start_month);
var numberStops = covidRecords.map(covidrecs =>  covidrecs.stop_month);

var startMonth = numberStarts.map(function(num) {
        if (num === 1) {
          return "January"
        }
        else if (num === 2) {
          return "February"
        }
        else if (num === 3) {
          return "March"
        }
        else if (num === 4) {
          return "April"
        }
        else if (num === 5) {
          return "May"
        }
        else if (num === 6) {
          return "June"
        }
        else if (num === 7) {
          return "July"
        }
        else if (num === 8) {
          return "August"
        }
        else if (num === 9) {
          return "September"
        }
        else if (num === 10) {
          return "October"
        }
        else if (num === 11) {
          return "November"
        }
        else if (num === 12) {
          return "December"
        }
      });

      var stopMonth = numberStops.map(function(num) {
        if (num === 1) {
          return "January"
        }
        else if (num === 2) {
          return "February"
        }
        else if (num === 3) {
          return "March"
        }
        else if (num === 4) {
          return "April"
        }
        else if (num === 5) {
          return "May"
        }
        else if (num === 6) {
          return "June"
        }
        else if (num === 7) {
          return "July"
        }
        else if (num === 8) {
          return "August"
        }
        else if (num === 9) {
          return "September"
        }
        else if (num === 10) {
          return "October"
        }
        else if (num === 11) {
          return "November"
        }
        else if (num === 12) {
          return "December"
        }
      });

console.log(numberStarts);

// Create first trace.
    var trace1 = {
      x: startMonth,
      y: numberStarts,
      type: "bar",
      barmode: 'stack',
      name: "Start Dates",
      line: {color: "orange"}
    };

// Create second trace.
var trace2 = {
  x: stopMonth,
  y: numberStops,
  type: "bar",
  barmode: 'stack',
  name: "Stop Dates",
  line: {color: "green"}
};

// Create the data array for our plot
var data = [trace1,trace2];
  
// Define the plot layout
    var layout = {
      title: "COVID-19 Stay-at-Home Orders by Month",
      xaxis: { title: "Month (2020)" },
      yaxis: { title: "Number of Stay-at-Home Orders"},
      barmode: 'stack'
    };
  
// Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("covid-by-month-bar-plot", data, layout);

  
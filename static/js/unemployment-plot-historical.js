// Plot unemployment since 2011

function filterunemployment(unemployment) {
  return unemployment.year >= "2018";
};

// Use filter() to pass the function as its argument
var filteredUnemployment = unemploymentRecords.filter(filterunemployment);

// Reverse the array to accommodate Plotly's defaults
var reversedUnemploymentAll = filteredUnemployment.reverse();

// Use the map method with the arrow function to return all the filtered year, month, and unemployment rate.
var month_yearCode2 = reversedUnemploymentAll.map(unemploymentrecs =>  unemploymentrecs.month_year);
var unemploymentRate2 = reversedUnemploymentAll.map(unemploymentrecs => unemploymentrecs.unemployment_rate);

// Check your filtered states and dates.
console.log(month_yearCode2);
console.log(unemploymentRate2);

// Create your trace.
    var trace2 = {
      x: month_yearCode2,
      y: unemploymentRate2,
      type: "bar",
    };
  
// Create the data array for our plot
var data2 = [trace2];
  
// Define the plot layout
    var layout2 = {
      title: "Unemployment Rate by Month Since 2018",
      xaxis: { title: "Month" },
      yaxis: { title: "Unemployment Rate"}
    };
  
// Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("unemployment-all-bar-plot", data2, layout2);

var s = new Rect(0, 0, 20, 10);
s.addTo(stage);
s.fill(
  gradient.linear('top right', ['purple', ['yellow', 80], 'blue'])
);
// Create unemployment charts

function filterunemployment2020(unemployment) {
    return unemployment.year === "2020";
};

// Use filter() to pass the function as its argument
var unemployment2020 = unemploymentRecords.filter(filterunemployment2020);

// Check to make sure covid records are filtering.
console.log(unemployment2020);

// Reverse the array to accommodate Plotly's defaults
var reversedUnemployment2020 = unemployment2020.reverse();

// Use the map method with the arrow function to return all the filtered year, month, and unemployment rate.
var month_yearCode1 = reversedUnemployment2020.map(unemploymentrecs =>  unemploymentrecs.month_year);
var unemploymentRate1 = reversedUnemployment2020.map(unemploymentrecs => unemploymentrecs.unemployment_rate);

// Check your filtered states and dates.
console.log(month_yearCode1);
console.log(unemploymentRate1);


// Create your trace.
    var trace1 = {
      x: month_yearCode1,
      y: unemploymentRate1,
      type: "bar",
      color: "red"
    };
  
// Create the data array for our plot
var data1 = [trace1];
  
// Define the plot layout
    var layout1 = {
      title: "Unemployment Rate by Month for 2020",
      xaxis: { title: "Month" },
      yaxis: { title: "Unemployment Rate"}
    };
  
// Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("unemployment-2020-bar-plot", data1, layout1);

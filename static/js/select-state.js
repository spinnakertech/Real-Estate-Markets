// This program will accept a state input from the user and will plot real estate sales for that state for 2020

console.log("in select-state.js code . . .")

// Initializes the page with a default plot of real estate sales for 2020
function init() {
    // Create the trace object for homes sold year over year 2020
    var trace1 = {
        x: monthSold2020,
        y: homesSoldyoy2020,
        type: "line",
        name: "Homes Sold Change (year-over-year)"
    };

    // Create the trace object for homes sold year over year 2020
    //   var trace2 = {
    //     x: monthSold2020,
    //     y: newListingsyoy2020,
    //     type: "line",
    //     name: "New Listings Change (year-over-year)"
    //   };

    // Create the trace object for homes sold year over year 2020
    //   var trace3 = {
    //     x: monthSold2020,
    //     y: pendingSalesyoy2020,
    //     type: "line",
    //     name: "Pending Home Sales Change (year-over-year)"
    //   };

    // Create the data array for the plot
    var data = [trace1];

    // Define the plot layout
      var layout = {
        title: "Real Estate Sales Data 2020",
        xaxis: { title: "Month (2020)" },
        yaxis: { title: "Sales Volume"}
      };

    // Plot the chart to a div tag with id "real-estate-line-plot"
      Plotly.newPlot("state-line-plot", data, layout);
    }


//   data = [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16] }];

//   Plotly.newPlot("plot", data);
// }

console.log("starting select-state code . . .")

// Filter the real estate sales data to just year 2000 records
function filterhomesales2020(realestateSales) {
    return realestateSales.year === "2020";
}

// Use filter() to pass the function as its argument
var filteredhomesales2020 = realestateRecords.filter(filterhomesales2020);

// Sort the data by month
var sortedhomesales2020 = filteredhomesales2020.sort((a, b) => b.month_code - a.month_code);

// Reverse the order to be ascending
reversededhomesales2020 = sortedhomesales2020.reverse();

console.log("showing filtered, sorted, and reversed home sales 2020 . . .")
console.log(filteredhomesales2020)
console.log(sortedhomesales2020)
console.log(reversededhomesales2020)



// Filter the real estate sales data to return requested state records
function filterState(realestateSales) {
  return realestateSales.state === "Maryland" && realestateSales.year === "2020";
}
// Use filter() to pass the function as its argument
var filteredstateData = realestateRecords.filter(filterState);

  console.log("check stateData = Maryland")
  console.log(filteredstateData)
  
// Use the map method with the arrow function to return all the filtered states.
var monthSold2020 = filteredstateData.map(homesalerecs => homesalerecs.month);
var homesSoldyoy2020 = filteredstateData.map(homesalerecs => homesalerecs.homes_sold_yoy);
var newListingsyoy2020 = filteredstateData.map(homesalerecs => homesalerecs.new_listings_yoy);
var pendingSalesyoy2020 = filteredstateData.map(homesalerecs =>  homesalerecs.pending_sales_yoy);



// Call updateStatePlot() when a change takes place to the DOM
// #selDataset is associated with the dropdown menu on the html page
d3.selectAll("#selStateOption").on("change", updateStatePlot);

// This function is called when a dropdown menu item is selected
function updateStatePlot() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selStateOtion");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

console.log("showing dataset dropdown selection . . .")
console.log(dataset)




//   // Restyle will restyle the existing plot
//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
}

// This command runs the function from the first line above to initialize the chart
init();
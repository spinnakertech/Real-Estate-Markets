// Real Estate charts

console.log("real estate: starting code . . .");

function filterhomesalesUS(realestateSales) {
    return realestateSales.state_code === "US" && realestateSales.year === "2020";
}

console.log("real estate: function defined . . .");

// Use filter() to pass the function as its argument
var filteredhomesalesUS2020 = realestateRecords.filter(filterhomesalesUS);

// Sort the data by month
var sortedhomesalesUS2020 = filteredhomesalesUS2020.sort((a, b) => b.month_code - a.month_code);

reversededhomesalesUS2020 = sortedhomesalesUS2020.reverse();
  
// Use the map method with the arrow function to return all the filtered states.
var monthSoldUS2020 = reversededhomesalesUS2020.map(homesalerecs => homesalerecs.month);
var homesSoldyoyUS2020 = reversededhomesalesUS2020.map(homesalerecs => homesalerecs.homes_sold_yoy);
var newListingsyoyUS2020 = reversededhomesalesUS2020.map(homesalerecs => homesalerecs.new_listings_yoy);
var pendingSalesyoyUS2020 = reversededhomesalesUS2020.map(homesalerecs =>  homesalerecs.pending_sales_yoy);

// Create the trace object for homes sold year over year 2020
    var trace1 = {
      x: monthSoldUS2020,
      y: homesSoldyoyUS2020,
      type: "line",
      name: "Homes Sold Change (year-over-year)"
    };

    // Create the trace object for homes sold year over year 2020
    var trace2 = {
      x: monthSoldUS2020,
      y: newListingsyoyUS2020,
      type: "line",
      name: "New Listings Change (year-over-year)"
    };

    // Create the trace object for homes sold year over year 2020
    var trace3 = {
      x: monthSoldUS2020,
      y: pendingSalesyoyUS2020,
      type: "line",
      name: "Pending Home Sales Change (year-over-year)"
    };

// Create the data array for the plot
var data = [trace1, trace2, trace3];
  
// Define the plot layout
    var layout = {
      title: "Real Estate Sales Data 2020",
      xaxis: { title: "Month (2020)" },
      yaxis: { title: "Sales Volume"}
    };
  
// Plot the chart to a div tag with id "real-estate-line-plot"
    Plotly.newPlot("real-estate-2020-line-plot", data, layout);

  
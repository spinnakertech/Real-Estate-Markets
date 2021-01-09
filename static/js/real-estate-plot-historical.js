// Real Estate charts

console.log("real estate: starting code . . .");

function filterhomesalesUS(realestateSales) {
    return realestateSales.state_code === "US" && realestateSales.year >= 2018;
}

console.log("real estate: function defined . . .");

// Use filter() to pass the function as its argument
var filteredhomesalesUS = realestateRecords.filter(filterhomesalesUS);

// // Sort the data by month
var sortedhomesalesUS = filteredhomesalesUS.sort((a, b) => b.month_year_code - a.month_year_code);
var reversededhomesalesUS = sortedhomesalesUS.reverse();
  
// Use the map method with the arrow function to return all the filtered states.
var monthSoldUS = reversededhomesalesUS.map(homesalerecs => homesalerecs.month_year);
var homesSoldUS = reversededhomesalesUS.map(homesalerecs => homesalerecs.homes_sold_yoy);
var newListingsUS = reversededhomesalesUS.map(homesalerecs => homesalerecs.new_listings_yoy);
var pendingSalesUS = reversededhomesalesUS.map(homesalerecs =>  homesalerecs.pending_sales_yoy);
var housingInventoryUS = reversededhomesalesUS.map(homesalerecs =>  homesalerecs.homes_inventory_yoy);

// Create the trace object for homes sold over time
    var trace1 = {
      x: monthSoldUS,
      y: homesSoldUS,
      type: "line",
      name: "Homes Sold Change (year-over-year)"
    };

    // Create the trace object for homes sold year over year 2020
    var trace2 = {
      x: monthSoldUS,
      y: newListingsUS,
      type: "line",
      name: "New Listings Change (year-over-year)"
    };

    // Create the trace object for homes sold year over year 2020
    var trace3 = {
      x: monthSoldUS,
      y: pendingSalesUS,
      type: "line",
      name: "Pending Home Sales Change (year-over-year)"
    };


// Create the data array for the plot
var data = [trace1,trace2,trace3];
  
// Define the plot layout
    var layout = {
      title: "Real Estate Sales Data 2018-2020 (Year-over-Year Changes)",
      xaxis: { title: "Date" },
      yaxis: { title: "Sales Volume"}
    };
  
// Plot the chart to a div tag with id "real-estate-line-plot"
    Plotly.newPlot("real-estate-all-line-plot", data, layout);

  
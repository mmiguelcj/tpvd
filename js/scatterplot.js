// Main function to draw and set up the visualization, once we have the data.
function createScatterplot(Data) {
  // data that you want to plot, I've used separate arrays for x and y values
  var xdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var ydata = new Array();

  for (var key in Data) {
    ydata.push(Data[key].tempoTotal);
    xdata.push(key);
  }
  console.log(ydata.length);

  // size and margins for the chart
  var margin = {
      top: 20,
      right: 15,
      bottom: 60,
      left: 60
    },
    width = $("#scatteGraph").width() - margin.left - margin.right,
    height = $("#scatteGraph").width() * 0.65 - margin.top - margin.bottom;
  console.log($("#scatteGraph").width());

  // x and y scales, I've used linear here but there are other options
  // the scales translate data values to pixel values for you
  var x = d3.scale.linear()
    .domain([0, d3.max(xdata)]) // the range of the values to plot
    .range([0, width]); // the pixel range of the x-axis

  var y = d3.scale.linear()
    .domain([d3.min(ydata) * 0.9, d3.max(ydata) * 1.1])
    .range([height, 0]);

  // the chart object, includes all margins
  var chart = d3.select('#scatteGraph')
    .append('svg:svg')
    .attr('width', width + margin.right + margin.left+ 70)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

  // the main object where the chart and axis will be drawn
  var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main')

  // draw the x axis
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');

  main.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'main axis date')
    .call(xAxis);

  // draw the y axis
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

  main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(yAxis);

  // draw the graph object
  var g = main.append("svg:g");

  g.selectAll("scatter-dots")
    .data(ydata) // using the values in the ydata array
    .enter().append("svg:circle") // create a new circle for each value
    .attr("cy", function(d) {
      return y(d);
    }) // translate y value to a pixel
    .attr("cx", function(d, i) {
      return x(xdata[i]);
    }) // translate x value
    .attr("r", 10) // radius of circle
    .style("opacity", 0.6); // opacity of circle
    

    //Adicionando as legendas nas bolinhas
    var texto =  g.selectAll("text")
      .data(ydata)
      .enter().append("text")
      .text( function(d, i) {
        return xdata[i + 15];
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("fill", "red")
      .attr("x", function(d, i) {
        return x(xdata[i])+9;
      })
      .attr("y", function(d) {
        return y(d);
      });
}
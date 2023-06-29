'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
const productNames = [];
const productViews = [];
const productClicks = [];

function renderChart() {
  const localProducts = JSON.parse(localStorage.getItem("productData"));


  for (let i=0; i < localProducts.length; i++){
    productNames.push(localProducts[i].name);
    productViews.push(localProducts[i].timesShown);
    productClicks.push(localProducts[i].timesClicked);
  }
  
  const data = {
    labels: productNames,
    datasets: [
      {
      label: "Views",
      data: productViews,
      backgroundColor: ["lightblue"],
      borderColor: ["black"],
      bandWidth: 1
      },
      {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["blue"],
        borderColor: ["black"],
        bandWidth: 1
      }
    ] 
  }

  const config = {
    type: "bar",
    data: data,
  }
  
  const productChart = document.getElementById("chart");
  const myChart = new Chart(productChart, config)
}

renderChart();

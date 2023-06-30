import jsondata from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/World Happiness Index by Reports 2013-2023 with nulls.json';


document.addEventListener("DOMContentLoaded", async () => {
  const barchart = document.getElementById('chart').getContext('2d');
  const paths = document.querySelectorAll('path')
  const  slider = document.getElementById('slider')
  const currentyear = slider.value

  function updateChart(event) {
    let country = event.target.getAttribute("title");
    let years = jsondata.map(function(e) {return e.Year})
    let labels = jsondata.map(function (e) {return e.Country})
    let index = jsondata.map(function(e) {return e.Index})
    for(let i = 0; i < labels.length; i ++) {
      if (labels[i] === country && years[i] === parseInt(currentyear)) {
        addData(worldchart, labels[i], index[i])
      }
    }
  }


  // function barCountry(country, year) {
  //   let labels = jsondata.map(function (e) {return e.Country})
  //   let years = jsondata.map(function(e) {return e.Year})
  //   let index = jsondata.map(function(e) {return e.Index})
  //   for(let i = 0; i < labels.length; i ++) {
  //     if (labels[i] === country && years[i] === year) {
  //       return([labels[i], index[i]])
  //   }}}


  // let selected = barCountry('Afghanistan', 2022)
  let datapoints = jsondata.map(function(e) {return e.Index})
  let worldchart = new Chart(barchart,{
  type: 'bar',
  data: {
      labels: [],
      datasets:[{
          label: 'Index',
          data: []
      }]
  },
  options: {}
  })

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

paths.forEach(path => {
  path.addEventListener('click', updateChart)
})

// slider.addEventListener('input', updateChart)
})
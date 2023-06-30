import jsondata from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/World Happiness Index by Reports 2013-2023 with nulls.json';


document.addEventListener("DOMContentLoaded", async () => {
  const barchart = document.getElementById('chart').getContext('2d');
  const paths = document.querySelectorAll('path')
  const slider = document.getElementById('slider')
  let years = jsondata.map(function(e) {return e.Year})
  let labels = jsondata.map(function (e) {return e.Country})
  let index = jsondata.map(function(e) {return e.Index})

  function updateChart(event) {
    let currentyear = slider.value
    let country = event.target.getAttribute("title");

    if (worldchart.data.labels.includes(country)) {
      let idx = worldchart.data.labels.indexOf(country);
      worldchart.data.labels = worldchart.data.labels.slice(0,idx).concat(worldchart.data.labels.slice(idx + 1))
      worldchart.update();
    } else { for(let i = 0; i < labels.length; i ++) {
      if (labels[i] === country && years[i] === parseInt(currentyear)) {
        addData(worldchart, labels[i], index[i])
        }
      }
    }
  }

  function updateYear() {
    let currentyear = slider.value
    let prevLabels = worldchart.data.labels
    worldchart.data.labels = [];
    worldchart.data.datasets.forEach((dataset) => {
      dataset.data = [];
  });
    for (let i = 0; i < prevLabels.length; i ++) {
      for(let j = 0; j < labels.length; j ++) {
        if (labels[j] === prevLabels[i] && years[j] === parseInt(currentyear)) {
          addData(worldchart, labels[j], index[j])

        }
      }
    }
  }

  
  // if (chart.data.labels.includes(country)) {
  //   let idx = chart.data.labels.indexOf(country)
  //   delete chart.database.labels[idx];
  //   // chart.data.labels = chart.data.labels.slice(0, idx).concat(chart.data.labels.slice(idx, chart.data.labels.length));
  //   chart.data.datasets.forEach((dataset) => {
  //       delete dataset.data[idx];
  //   });
  //   chart.update();


  // function barCountry(country, year) {
  //   let labels = jsondata.map(function (e) {return e.Country})
  //   let years = jsondata.map(function(e) {return e.Year})
  //   let index = jsondata.map(function(e) {return e.Index})
  //   for(let i = 0; i < labels.length; i ++) {
  //     if (labels[i] === country && years[i] === year) {
  //       return([labels[i], index[i]])
  //   }}}


  // let selected = barCountry('Afghanistan', 2022)
  // let datapoints = jsondata.map(function(e) {return [e.Index]})

  let worldchart = new Chart(barchart,{
  type: 'bar',
  data: {
      labels: [ "Greece", "Afghanistan", "United States", "Finland", "China", "Egypt"],
      datasets:[{
          label: 'Happiness Index',
          data: [5.931, 1.859, 6.894, 7.804, 5.818, 4.17],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
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

slider.addEventListener('input', updateYear)

})
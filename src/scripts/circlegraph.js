import circledata from "/Users/michelleli/Downloads/WHR2023.json"

document.addEventListener("DOMContentLoaded", async () => {
    const circle = document.getElementById('circlegraph').getContext('2d');
    const countries = circledata.map(function(e) {return e.Country})
    const social = circledata.map(function(e) {return e.Social})
    const life = circledata.map(function(e) {return e.Healthy})
    const freedom = circledata.map(function(e) {return e.Freedom})
    const generosity = circledata.map(function(e) {return e.Generosity})
    const corruption = circledata.map(function(e) {return e.Corruption})
    const gdp = circledata.map(function(e) {return e.GDP})
    const paths = document.querySelectorAll('path')
    const info = document.getElementById("info")
    const selector = document.getElementById('selector')

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function updateChart(e){
        let countryName = e.target.getAttribute('title');
        circlegraph.data.labels = [];
        circlegraph.data.datasets.forEach((dataset) => {
          dataset.data = [];
      });
        for (let i = 0; i < circledata.length; i++){
            if (circledata[i].Country === countryName) {
                addData(circlegraph, "Social Support", social[i])
                addData(circlegraph, "Freedom to Make Life Choices", freedom[i])
                addData(circlegraph, "Generosity", generosity[i])
                addData(circlegraph, "Perceptions of Corruption", corruption[i])
                info.innerText = `Healthy Life Expectancy: ${life[i]} \n Logged GDP per capita: ${gdp[i]}`
            }
        }
    }
    
    function changeCountry(e) {
        let countryName = selector.value
        circlegraph.data.labels = [];
        circlegraph.data.datasets.forEach((dataset) => {
          dataset.data = [];
      });
        for (let i = 0; i < circledata.length; i++){
            if (circledata[i].Country === countryName) {
                addData(circlegraph, "Social Support", social[i])
                addData(circlegraph, "Freedom to Make Life Choices", freedom[i])
                addData(circlegraph, "Generosity", generosity[i])
                addData(circlegraph, "Perceptions of Corruption", corruption[i])
                info.innerText = `Healthy Life Expectancy: ${life[i]} \n Logged GDP per capita: ${gdp[i]}`
            }
        }
    }

    

    paths.forEach(path => {
        path.addEventListener('click', updateChart)
      })

    let circlegraph = new Chart(circle,{
    type: 'polarArea',
    data: {
        labels: [ "Social Support", "Freedom to Make Life Choices", "Generosity", "Perceptions of Corruption"],
        datasets:[{
            data: [0.919, 0.8, 0.137, 0.689],
            borderWidth: 1,
            backgroundColor: ['rgba(246, 189, 96, 0.85)', 'rgba(247, 237, 226, 0.7)', 'rgba(245, 202, 195, 0.85)', 'rgba(175, 62, 77, 0.85)', 'rgba(242, 132, 130, 0.85)']
        }]
    },
    options: {}
    })


    countries.sort().forEach (country => {
        let option = document.createElement("option");
        option.innerHTML =  `value = ${country}`
        option.innerText = country
        selector.appendChild(option);
    })

    selector.addEventListener("change", function() {
        let option = document.querySelector('option');
        option.value = "none"
        option.disabled = true
        option.innerText = "Select A Country"
    }, {once : true});

    selector.addEventListener('change', changeCountry)

})
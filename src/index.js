import data from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/src/scripts/air-passengers-carried.json';

document.addEventListener("DOMContentLoaded", async () => {

const slider = document.getElementById("slider")
const paths = document.querySelectorAll('path');
const popup = document.getElementById('popup');
const valueDisplay = document.getElementById("valuedisplay")
const legend = document.getElementById("legend");  

  
  function createLegend() {
    ["none", "halfMil", "oneMil", "twentyFiveMil", "fiftyMil", "hunMil"].forEach (dataClass => {
      const cell = document.createElement("div");
      cell.classList.add(dataClass)
      legend.appendChild(cell);
    })
  }
createLegend();

function createMarkers () {
  ["No data", "50000", "1 million", "25 million", "50 million", "100 million"].forEach (marker => {
    let cell = document.createElement("div");
    cell.classList.add("markers")
    cell.innerText = marker
    legend.appendChild(cell);
  })
}

createMarkers()

  function getPassengers(countryName) {
    let currentyear = slider.value
    for (let i = 0; i < data.length; i ++) {
      if (data[i]['Entity'] === countryName && data[i]['Year'] === parseInt(currentyear)) {
        return (data[i]['Air transport, passengers carried'] / 1000000).toFixed(2);
      }
    }
  }

function updatePath() {
  paths.forEach (path => {
    path.classList.remove("halfMil")
    path.classList.remove("oneMil")
    path.classList.remove("twentyFiveMil")
    path.classList.remove("fiftyMil")
    path.classList.remove("none")

    let pass = getPassengers(path.getAttribute("title"))
    if (pass > 0 && pass < 0.5) {
      path.classList.add("halfMil")
    } else if (pass >= 0.5 && pass < 1) {
      path.classList.add("oneMil")
    } else if (pass >= 1 && pass < 25) {
      path.classList.add("twentyFiveMil")
    } else if (pass >= 25 && pass < 50) {
      path.classList.add("fiftyMil")
    } else if (pass >= 50) {
      path.classList.add("hunMil")
    } else {
      path.classList.add("none")
    }
  })
}

updatePath();
  

  function createPopup(event) {
      const countryName = event.target.getAttribute('title');
      // const rect = event.target.getBoundingClientRect();
      let x = event.clientX;  
      let y = event.clientY; 
      // let centerX = rect.left + rect.width / 2;
      // let centerY = rect.top + rect.height / 2;
      if (getPassengers(countryName)) {
        popup.innerHTML = `<p>Country:${countryName}</p><p>Passengers: ${getPassengers(countryName)}million</p>`;
      } else {
        popup.innerHTML = `<p>Country:${countryName}<p><p> No data </p>`
      }
      popup.style.display = 'block';
      popup.style.left = x + 'px';
      popup.style.top = y + 'px';
  }

  const legendDivs = document.querySelectorAll("#legend div")

  function hoverLegend(e) {
    const selectedClass = e.target.getAttribute("class");
    legendDivs.forEach (div => {
      if (div.getAttribute("class") === selectedClass) {
        div.classList.add("hovered")
      }
    })
  }

  function hoverRegions(e) {
    const selectedClass = e.target.getAttribute("class");
    paths.forEach (path => {
      if (path.getAttribute("class") === selectedClass) {
        path.classList.add("hovered")
      } else {
        path.classList.add("unhovered")
      }
    })
  }

  legendDivs.forEach (div => {
    div.addEventListener('mouseover', hoverRegions)

    div.addEventListener('mouseout', function() {
      paths.forEach (path => {
        path.classList.remove("hovered")
        path.classList.remove("unhovered")
      })
    })
  })


  // function addPin(event) {
  //   let path = event.target
  //   console.log(path)

  //   const img = document.createElement('img')
  //   img.src = "/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/58889219bc2fc2ef3a1860aa.png"
  //   document.querySelector('#map-container').append(img)
  //   const rect = event.target.getBoundingClientRect();
  //   let centerX = rect.left + rect.width / 2;
  //   let centerY = rect.top + rect.height / 2;
  //   img.style.left = centerX + 'px';
  //   img.style.top = centerY + 'px';
  //   img.style.zIndex = 100;
  // }

  paths.forEach(path => {
    path.addEventListener('mouseover', createPopup)
    path.addEventListener('mouseover', hoverLegend)
    // path.addEventListener('click', addPin)

    path.addEventListener('mouseout', function() {
      popup.style.display = 'none';
      legendDivs.forEach (div => {
        div.classList.remove("hovered")
        div.classList.remove("unhovered")
      })
    });
  });

  function updatevalue() {
    valueDisplay.innerText = `Year: ${slider.value}`
  }
  updatevalue()

  slider.addEventListener('input', updatePath)
  slider.addEventListener('input', updatevalue)
  
});
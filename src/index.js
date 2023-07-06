import data from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/World Happiness Index by Reports 2013-2023 with nulls.json';
import bargraph from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/src/scripts/bargraph.js'
import modal from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/src/scripts/modal.js'
import circlegraph from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/src/scripts/circlegraph.js'
import description from '/Users/michelleli/Downloads/APP ACADEMY/JS PROJECT/src/scripts/description.js'

document.addEventListener("DOMContentLoaded", async () => {


const slider = document.getElementById("slider")
const paths = document.querySelectorAll('path');
const popup = document.getElementById('popup');
const valueDisplay = document.getElementById("valuedisplay")
const legend = document.getElementById("legend");  
const icon1 = document.getElementById("openmodal")
const icon2 = document.getElementById("github")


  
  function createLegend() {
    ["none", "one", "two", "three", "four", "five", "six", "seven"].forEach (dataClass => {
      const cell = document.createElement("div");
      cell.classList.add(dataClass)
      legend.appendChild(cell);
    })
  }
createLegend();

["No data", "1", "2" ,"3" ,"4" ,"5" ,"6", "7","8"].forEach (marker => {
  let tick = document.createElement("li");
  tick.innerText = marker
  legendmarkers.appendChild(tick)
})

  function getIndex(countryName) {
    let currentyear = slider.value
    for (let i = 0; i < data.length; i ++) {
      if (data[i]['Country'] === countryName && data[i]['Year'] === parseInt(currentyear)) {
        return data[i]['Index'];
      }
    }
  }

  function getRank(countryName) {
    let currentyear = slider.value
    for (let i = 0; i < data.length; i ++) {
      if (data[i]['Country'] === countryName && data[i]['Year'] === parseInt(currentyear)) {
        return data[i]['Rank'];
      }
    }
  }

function updatePath() {
  paths.forEach (path => {
    ["none", "one", "two", "three" ,"four" ,"five" ,"six" ,"seven", "eight"].forEach (el => {
      path.classList.remove(el)
    })

    let index = getIndex(path.getAttribute("title"))
    if (index >= 1 && index < 2) {
      path.classList.add("one")
    } else if (index >= 2 && index < 3) {
      path.classList.add("two")
    } else if (index >= 3 && index < 4) {
      path.classList.add("three")
    } else if (index >= 4 && index < 5) {
      path.classList.add("four")
    }  else if (index >= 5 && index < 6) {
      path.classList.add("five")    
    } else if (index >= 6 && index < 7) {
      path.classList.add("six")
    } else if (index >= 7 && index < 8) {
      path.classList.add("seven")
    } else {
      path.classList.add("none")
    }
  })
}

updatePath();
  

  function createPopup(event) {
      const countryName = event.target.getAttribute('title');
      let x = event.clientX;  
      let y = event.clientY; 

      if (getIndex(countryName)) {
        popup.innerHTML = `<p> Country: ${countryName}</p><p>Index: ${getIndex(countryName)}</p> Rank: ${getRank(countryName)}`;
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

  paths.forEach(path => {
    path.addEventListener('mouseover', createPopup)
    path.addEventListener('mouseover', hoverLegend)

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

  function flipIcon(e) {
    e.target.src = "./assets/smile.png"
  }

  function flipBackModal(e) {
      e.target.src = "./assets/icons8-info-52.png"
  }

  function flipBackGit(e) {
    e.target.src = "./assets/github-mark.png"
  }

  slider.addEventListener('input', updatePath)
  slider.addEventListener('input', updatevalue)

  icon1.addEventListener('mouseover', flipIcon)
  icon1.addEventListener('mouseout', flipBackModal)

  icon2.addEventListener('mouseover', flipIcon)
  icon2.addEventListener('mouseout', flipBackGit)
});
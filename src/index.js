const paths = document.querySelectorAll('path');
const popup = document.getElementById('popup');

function createPopup(event) {
    const countryName = event.target.getAttribute('title');
    const rect = event.target.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;
    popup.innerText = countryName;
    //  css?
    popup.style.display = 'block';
    popup.style.left = centerX + 'px';
    popup.style.top = centerY + 'px';
}

paths.forEach(path => {
  path.addEventListener('mouseover', createPopup)

  path.addEventListener('mouseout', function() {
    popup.style.display = 'none';
  });
})




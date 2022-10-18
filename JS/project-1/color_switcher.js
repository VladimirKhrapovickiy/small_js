let projectDiv = document.querySelector(".project_1");
let pixelEl = document.createElement("div");
pixelEl.className = "project_1__pixel";
let divHeight = projectDiv.clientHeight;
let divWidth = projectDiv.clientWidth;
let numberOfEl = (divHeight * divWidth) / Math.pow(25, 2);
let pixel;
function switchBackground() {
  let element = document.querySelector(".project_1");
  pixel = document.querySelector(".project_1__pixel");
  element.classList.toggle("cool");
  if (pixel == null) {
    projectDiv.prepend(pixelEl);
    pixel = document.querySelector(".project_1__pixel");
    for (let i = 0; i < numberOfEl; i++) {
      var el = pixel.cloneNode(true);
      projectDiv.appendChild(el);
    }
  } else {
    let pixels = document.querySelectorAll(".project_1__pixel");
    for (i = 0; i < pixels.length; i++) {
      pixels[i].parentNode.removeChild(pixels[i]);
    }
  }
}
document.querySelector(".project_1__button").onclick = switchBackground;

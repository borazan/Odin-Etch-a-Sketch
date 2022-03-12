const divContainer = document.createElement("div");
createGrid(16);
function createGrid(n) {
  for (let i = 0; i < n * n; i++) {
    let tempdiv = document.createElement("div");
    tempdiv.style.width = "auto";
    tempdiv.style.height = "auto";
    tempdiv.style.background = "rgb(255,0,0)";
    tempdiv.style.opacity = "0";
    divContainer.appendChild(tempdiv);
  }
}
divContainer.addEventListener("mouseover", function (e) {
  let opacity = e.target.style.opacity;
  let nextOpacity = parseFloat(opacity) + 0.2;
  console.log(parseFloat(opacity));
  console.log(parseFloat(nextOpacity));
  if (parseFloat(opacity) < 0.9) {
    e.target.style.opacity = `${nextOpacity}`;
  }
});
const pageWrapper = document.querySelector(".pagewrapper");
divContainer.classList.add("wrapper");
pageWrapper.appendChild(divContainer);

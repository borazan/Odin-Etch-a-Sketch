const body = document.querySelector("body");
const divContainer = document.querySelector(".wrapper");
divContainer.addEventListener("click", animate);

function animate() {
    console.log("clicked the wrapper");
}

for (let i = 1; i <= 16; i++) {
  let tempdiv = document.createElement("div");
  tempdiv.style.width = "auto";
  tempdiv.style.height = "auto";
  tempdiv.style.border = "1px dotted grey";
  divContainer.appendChild(tempdiv);
}


body.appendChild(divContainer);

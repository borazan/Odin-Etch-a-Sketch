const divContainer = document.createElement("div");

const rightSidebar = document.querySelector(".sidebar.right");
const leftSidebar = document.querySelector(".sidebar.left");
var pickedHue;
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

function rgb2hue(R, G, B) {
  let Max = 0.0;
  let Min = 0.0;

  let fR = R / 255.0;
  let fG = G / 255.0;
  let fB = B / 255.0;

  if (fR >= fG && fR >= fB) Max = fR;
  else if (fG >= fB && fG >= fR) Max = fG;
  else if (fB >= fG && fB >= fR) Max = fB;

  if (fR <= fG && fR <= fB) Min = fR;
  else if (fG <= fB && fG <= fR) Min = fG;
  else if (fB <= fG && fB <= fR) Min = fB;

  let Hue;

  if (Max == Min) {
    Hue = -1.0;
  } else {
    if (Max == fR) {
      Hue = (fG - fB) / (Max - Min);
    } else if (Max == fG) {
      Hue = 2.0 + (fB - fR) / (Max - Min);
    } else if (Max == fB) {
      Hue = 4.0 + (fR - fG) / (Max - Min);
    }

    Hue *= 60.0;

    if (Hue < 0.0) {
      Hue += 360.0;
    }
  }

  return Hue;
}

function setBackgrounds() {
  leftSidebar.children[0].style.backgroundColor = "hsl(0,100%,50%)";
  leftSidebar.children[1].style.backgroundColor = "hsl(120,100%,50%)";
  leftSidebar.children[2].style.backgroundColor = "hsl(240,100%,50%)";
}

function formatRGB(target) {
  var pickedRGB = target.style.backgroundColor.toString();
  pickedRGB = pickedRGB.slice(4, pickedRGB.length - 1).split(",");
  for (let i = 0; i < pickedRGB.length; i++) {
    pickedRGB[i] = parseInt(pickedRGB[i]);
  }
  return rgb2hue(pickedRGB[0], pickedRGB[1], pickedRGB[2]);
}
setBackgrounds();
//get the hue of the clicked color
leftSidebar.addEventListener("click", function (e) {
  if (e.target.classList.contains("color")) {
    pickedHue = formatRGB(e.target);
    console.log(pickedHue);
  }
});

divContainer.addEventListener("mouseover", function (e) {
  let opacity = e.target.style.opacity;
  let nextOpacity = parseFloat(opacity) + 0.2;
  if (parseFloat(opacity) < 0.9) {
    e.target.style.opacity = `${nextOpacity}`;
  }
});
const pageWrapper = document.querySelector(".pagewrapper");
divContainer.classList.add("wrapper");
pageWrapper.insertBefore(divContainer, rightSidebar);

//refernce, https://github.com/HodaSalim/ColorGame/blob/master/app.js

let stars = document.querySelectorAll(".a");
let rows = document.querySelectorAll(".row");
let christmas = document.querySelector("svg");

let intensity = document.querySelector("#intensity");
let lightsNum = document.querySelector("#lights-num");
let speed = document.querySelector("#speed");

let stratButton = document.querySelector("#start");

var colors = [];

function setupColors() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.fill = randomColor();
    stars[i].style.animation = `glow ease-in-out ${
      Number(speed.value.substring(1)) * 1.5
    }s infinite `;
  }
}

//function setupStars

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from  0 -255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from  0 -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setupModeButtons() {
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].id != `row-${Number(lightsNum.value)}`) {
      for (var j = lightsNum.value; j < rows.length; j++) {
        rows[j].classList.add("selected");
        for (var k = lightsNum.value - 1; k >= 0; k--) {
          rows[k].classList.remove("selected");
        }
      }
    }
  }
}

// function setupSpeed() {
//   for (var i = 0; i < rows.length; i++) {
//     if (rows[i].classList.contains("animate")) {
//       rows[i].style.animationDuration = `${
//         Number(speed.value.substring(1)) * 1.5
//       }s`;
//     }
//   }
// }

function init() {
  setupModeButtons();
  setupColors();
}

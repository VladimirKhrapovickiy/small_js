"use strict";
let buttonTry = document.querySelector(".chek_button");
let inputNumber;
let score = 0;
let scoreToAdd = 10;
let winNumber = Math.floor(Math.random() * 10);
let restartButton = document.querySelector(".restart_button");
let prompt = document.querySelector(".prompt");
let bestScore = 0;
function toggle(classname, classtoggle) {
  let element = document.querySelector(classname);
  element.classList.toggle(classtoggle);
}
function chekResult(num) {
  if (num == winNumber) {
    alert("Congratulations");
    toggle(".pyro", "display_none");
    setTimeout(toggle, 3000, ".pyro", "display_none");
    score += scoreToAdd;
    document.querySelector(".score").textContent = score;
    document.querySelector(".quastion-marks").textContent = winNumber;
    winNumber = Math.floor(Math.random() * 10);
    document.querySelector(".prompt").textContent = "You guessed!";
    if (document.querySelector(".best_score").textContent < scoreToAdd) {
      document.querySelector(".best_score").textContent = scoreToAdd;
    }
    scoreToAdd = 10;
  } else if (num < winNumber) {
    document.querySelector(".prompt").textContent = "Warmer!";
    scoreToAdd--;
  } else {
    document.querySelector(".prompt").textContent = "Colder!";
    scoreToAdd--;
  }
}
restartButton.addEventListener("click", function () {
  winNumber = Math.floor(Math.random() * 10);
  scoreToAdd = 10;
  document.querySelector(".best_score").textContent = "0";
  document.querySelector(".quastion-marks").textContent = "???";
});
buttonTry.addEventListener("click", function () {
  inputNumber = document.getElementsByClassName("number_input")[0].value;
  if (inputNumber == "") {
    alert("Enter the number");
  } else if (inputNumber < 0 || inputNumber > 10) {
    alert("Only numbers from 1 to 10");
  } else {
    if (document.querySelector(".quastion-marks").textContent !== "???") {
      document.querySelector(".quastion-marks").textContent = "???";
    }
    chekResult(inputNumber);
  }
});
restartButton.addEventListener("click", function () {
  winNumber = Math.floor(Math.random() * 10);
  document.querySelector(".score").textContent = 0;
});

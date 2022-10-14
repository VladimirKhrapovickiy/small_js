"use strict";
const btnNewGame = document.querySelector(".new_game_button");
const dicePic = document.querySelector(".dice_img");
const btnRoll = document.querySelector(".roll_button");
const btnPickPoints = document.querySelector(".pick_button");
const player1Score = document.querySelector(".player_1_score");
const player2Score = document.querySelector(".player_2_score");
const gameContainer = document.querySelector(".project_7");
const player1TotalScore = document.querySelector(
  ".player_1_total_score_number"
);
const player2TotalScore = document.querySelector(
  ".player_2_total_score_number"
);
let playerNumber = 0;
let pointsToAdd = 0;
let numberOfRolls = 0;
let playersTotalScore = [0, 0];
const diceRollsPic = {
  1: "&#9856;",
  2: "&#9857;",
  3: "&#9858;",
  4: "&#9859;",
  5: "&#9860;",
  6: "&#9861;",
};
let diceNumber = generateDiceNumber();
function generateDiceNumber() {
  let number = Math.trunc(Math.random() * 6 + 1);
  return number;
}
function switchPlayers() {
  playerNumber = playerNumber == 0 ? 1 : 0;
  pointsToAdd = 0;
  numberOfRolls = 0;
  gameContainer.classList.toggle("player_2");
  player1Score.textContent = 0;
  player2Score.textContent = 0;
}
btnNewGame.addEventListener("click", function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1TotalScore.textContent = 0;
  player2TotalScore.textContent = 0;
  diceNumber = generateDiceNumber();
  dicePic.innerHTML = "";
  numberOfRolls = 0;
  pointsToAdd = 0;
  gameContainer.classList.remove("player_2");
});

btnRoll.addEventListener("click", function () {
  diceNumber = generateDiceNumber();
  dicePic.innerHTML = diceRollsPic[diceNumber];
  numberOfRolls++;
  pointsToAdd += diceNumber;
  if (numberOfRolls !== 1 && diceNumber == 1) {
    switchPlayers();
  }
  if (playerNumber == 0) {
    player1Score.textContent = pointsToAdd;
  } else {
    player2Score.textContent = pointsToAdd;
  }
});
btnPickPoints.addEventListener("click", function () {
  playersTotalScore[playerNumber] += pointsToAdd;
  player1TotalScore.textContent = playersTotalScore[0];
  player2TotalScore.textContent = playersTotalScore[1];
  switchPlayers();
});

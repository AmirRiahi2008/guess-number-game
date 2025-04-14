"use strict";
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const number = document.querySelector(".number");
const inputNumber = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
let highScore = 0;
let score = 20;
let isPlaying = true;
function changeMessage(msg) {
  messageEl.textContent = msg;
}
let random = Math.trunc(Math.random() * 20 + 1);
console.log(random);

checkButton.addEventListener("click", (e) => {
  const inp = Number(inputNumber.value);
  if (isPlaying) {
    if (!inp) {
      changeMessage("Input is empty");
    } else if (inp === random) {
      number.textContent = random;
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }

      changeMessage("You are Correct");
      isPlaying = false;
    } else if (inp !== random) {
      if (score > 0) {
        if (inp > random) {
          changeMessage("Shorter");
        } else {
          changeMessage("Bigger");
        }
        score--;
        scoreEl.textContent = score;
      } else {
        changeMessage("You missed");
        isPlaying = false;
      }
    }
  } else {
    alert("You missed");
  }
});

againButton.addEventListener("click", (e) => {
  random = Math.trunc(Math.random() * 20 + 1);

  score = 20;
  scoreEl.textContent = score;

  isPlaying = true;
  number.textContent = "?";
  inputNumber.value = "";
  changeMessage("Start Guessing Again");
});

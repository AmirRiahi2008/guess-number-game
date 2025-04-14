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
let random = Math.trunc(Math.random() * 20 + 1);

function changeMessage(msg) {
  messageEl.textContent = msg;
}

console.log(`Secret Number: ${random} 🤫`);

checkButton.addEventListener("click", () => {
  const guess = Number(inputNumber.value);

  if (!isPlaying) return alert("🎮 Game Over! Click 'Again' to play.");

  if (!guess) {
    changeMessage("⚠️ Please enter a number!");
    return;
  }

  if (guess === random) {
    number.textContent = random;
    changeMessage("🎉 Correct! You guessed it! 🎯");
    document.body.style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
    isPlaying = false;
  } else {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      changeMessage(guess > random ? "📉 Too high! Try lower 🔻" : "📈 Too low! Try higher 🔺");
    } else {
      score = 0;
      scoreEl.textContent = score;
      changeMessage("💥 You missed all your chances! 💀");
      document.body.style.backgroundColor = "#b34747";
      isPlaying = false;
    }
  }
});

againButton.addEventListener("click", () => {
  random = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  isPlaying = true;

  scoreEl.textContent = score;
  number.textContent = "?";
  inputNumber.value = "";
  document.body.style.backgroundColor = "#222";
  changeMessage("🤔 Start guessing...");
  console.clear();
  console.log(`Secret Number: ${random} 🤫`);
});

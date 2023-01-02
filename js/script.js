"use strict";
// LECTURE 71. DOM and DOM manipulation
// Document Object Model:
// Structured representation of HTML docs. Allows JS to access HTML elements and styles to manipulate them
// refer to page 69 of theory-lectures-v2.pdf to see more

// NOTE always set the "textContent" from querySelector if you want to change text!

/* document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17; */

const rngNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = rngNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(`guess = ${guess}, type = ${typeof guess}`);

  if (!guess) {
    console.log("⛔ Please type a number!");
  } else if (guess === rngNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
  } else if (guess > rngNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "☝️ Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < rngNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇 Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

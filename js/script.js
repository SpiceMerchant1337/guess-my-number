"use strict";
// LECTURE 71. DOM and DOM manipulation
// Document Object Model:
// Structured representation of HTML docs. Allows JS to access HTML elements and styles to manipulate them
// refer to page 69 of theory-lectures-v2.pdf to see more

// NOTE always set the "textContent" from querySelector if you want to change text!

/* document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17; */

let rngNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(`guess = ${guess}, type = ${typeof guess}`);

  // When there is no input
  if (!guess) {
    console.log("⛔ Please type a number!");

    // When player wins
  } else if (guess === rngNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = rngNumber;

    // When player guess is too high
  } else if (guess > rngNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "☝️ Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;

      // When the player runs out of points
    } else {
      document.querySelector(".message").textContent = "💥 Game over!";
      document.querySelector(".score").textContent = 0;
    }

    // When player guess is too low
  } else if (guess < rngNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇 Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;

      // When the player runs out of points
    } else {
      document.querySelector(".message").textContent = "💥 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// CODING CHALLENGE 1: DOM and events
// main task: make it possible to restart the game via the "Again!" button on top left of the page

// sub-tasks
// 1) attach the again button to add an eventListener
// 2) reset the values of score and rngNumber variables
// 3) reset the initials of all the messages in page
// 4) reset the initial css styles

// sub-task 1: eventListener on click
document.querySelector(".again").addEventListener("click", function () {
  // sub-task 2: reset values of score and winning number
  rngNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;

  // sub-task 3: reset initial messages on screen
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "1";

  // sub-task 4: reset the css initials
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

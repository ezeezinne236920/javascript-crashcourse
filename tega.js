// Age Calculator
function calAge() {
  let birthYear = prompt("What is your Year of Birth Dear Friend?");
  let ageInDays = (2022 - birthYear) * 365;
  let msg = document.createTextNode(
    "You are " + ageInDays + " days old Dear Friend"
  );

  if (birthYear >= 1) {
    document.getElementById("result").appendChild(msg);
  } else {
    document.getElementById("result").innerHTML = "";
  }
}

function reset() {
  document.getElementById("result").innerHTML = "";
}

// Generate Cat
function createCat() {
  let img = document.createElement("img");
  img.src = "/img/download (3).png";
  let div = document.getElementById("box");
  div.appendChild(img);
}

// CHALLENGE 3: ROCK PAPER SCISSOR GAME

function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  // console.log(humanChoice);
  botChoice = numToChoice(randomNum());
  // console.log(botChoice);
  result = decideWinner(humanChoice, botChoice);
  // console.log(result);
  message = finalMessage(result);
  // console.log(message);
  rpsFrontEnd(humanChoice, botChoice, message);
}

function randomNum() {
  return Math.floor(Math.random() * 3);
}

function numToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(humanChoice, botChoice) {
  rpsDatabase = {
    rock: { rock: 0.5, paper: 0, scissors: 1 },

    paper: { rock: 1, paper: 0.5, scissors: 0 },

    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };

  let yourScore = rpsDatabase[humanChoice][botChoice];
  let computerScore = rpsDatabase[botChoice][humanChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  rpsImageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // Remove all Images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    rpsImageDatabase[humanImageChoice] +
    "' style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1);'>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    ";  font-size:60px; border-bottom:none;' >" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    rpsImageDatabase[botImageChoice] +
    "' style='box-shadow: 0 10px 50px rgba(243, 38, 24, 1)'>";

  document.getElementById("rps").appendChild(humanDiv);
  document.getElementById("rps").appendChild(messageDiv);
  document.getElementById("rps").appendChild(botDiv);
}

// CHALLENGE 4: CHANGE THE COLOR OF ALL BUTTONS

let allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

let copyAllButtons = [];
for (i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonChoice) {
  if (buttonChoice.value === "red") {
    buttonRed();
  } else if (buttonChoice.value === "blue") {
    buttonBlue();
  } else if (buttonChoice.value === "green") {
    buttonGreen();
  } else if (buttonChoice.value === "yellow") {
    buttonYellow();
  } else if (buttonChoice.value === "reset") {
    buttonReset();
  } else if (buttonChoice.value === "random") {
    buttonRandom();
  }
}

function buttonRed() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-danger");
  }
}

function buttonBlue() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-primary");
  }
}

function buttonGreen() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
}

function buttonYellow() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-warning");
  }
}

function buttonReset() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

function buttonRandom() {
  for (i = 0; i < allButtons.length; i++) {
    let randomBut = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[randomBut]);
  }
}

// Challenge 5: Blackjack

let blackjackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    K: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("./sounds/swish.m4a");
const winSound = new Audio("./sounds/cash.mp3");
const lossSound = new Audio("./sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", blackjackStand);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU["score"]);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] < 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;
    blackjackGame["turnsOver"] = false;
    removeCard();
  }
}

function removeCard() {
  let yourImages = document
    .querySelector(["#your-box"])
    .querySelectorAll("img");
  let dealerImages = document
    .querySelector(["#dealer-box"])
    .querySelectorAll("img");

  for (i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }
  for (i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }

  YOU["score"] = 0;
  DEALER["score"] = 0;

  document.querySelector(blackjackGame["you"]["scoreSpan"]).textContent = 0;
  document.querySelector(blackjackGame["you"]["scoreSpan"]).style.color =
    "#fff";

  document.querySelector(blackjackGame["dealer"]["scoreSpan"]).textContent = 0;
  document.querySelector(blackjackGame["dealer"]["scoreSpan"]).style.color =
    "#fff";

  document.querySelector("#bjResult").textContent = "Let's Play";
  document.querySelector("#bjResult").style.color = "#000";
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    // If adding 11 keeps me below 21, add 11, Otherwise, add 1
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] <= 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  }
}

function blackjackStand() {
  dealerLogic();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame["turnsOver"] = true;
  showResult(computeWinner());
}

// Compute winner and return who just won
// update the wins, draws and losses
function computeWinner() {
  let winner;

  if (YOU["score"] <= 21) {
    // condition: Higher score than the dealer or when dealer busts but you're 21 or under;
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      if (DEALER["score"] <= 21) {
        blackjackGame["losses"]++;
        winner = DEALER;
      }
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }

    // condition: when user busts but dealer doesn't;
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }

  console.log(blackjackGame);

  return winner;
}

function showResult(winner) {
  let message, messageColor;
  if (blackjackGame["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "you won!";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      message = "you lost!";
      messageColor = "red";
      lossSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      message = "you drew!";
      messageColor = "black";
    }

    document.querySelector("#bjResult").textContent = message;
    document.querySelector("#bjResult").style.color = messageColor;
  }
}

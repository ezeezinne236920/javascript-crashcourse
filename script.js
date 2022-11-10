// alert("this is big brother");
function ageInDays() {
  var birthYear = prompt("my good friend, which year dem born you? do tell!");
  var ageInDays = (2022 - birthYear) * 365;
  // lets practice dom manipulation
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "you are " + ageInDays + "  days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("blue").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
  // document.getElementById("howOld").remove();
}

function howOld() {
  var howOld = prompt("what is your birth year, wonderful earthling?");
  var howOld = 2022 - howOld;
  var h2 = document.createElement("h2");
  var myAge = document.createTextNode(
    "you are " + howOld + " years old; do you know sound of music?"
  );
  h2.setAttribute("id", "howOld");
  h2.appendChild(myAge);
  document.getElementById("reclick").appendChild(h2);
}
// var button = document.createElement("button");01
// button.setAttribute("id", "remove");
// button.appendChild(remove);

// function remove() {
//   document.getElementById("remove").remove();
// }
function cancelYear() {
  document.getElementById("howOld").remove();
}

// cat generator
function generateCat() {
  var image = document.createElement("img");
  var p = document.getElementById("cat-images");
  image.src = "images/download(1).jpg";
  p.appendChild(image);
}
function catGen() {
  document.getElementById("cat-images").remove();
}

// my own side of the story

//   if (((humanChoice = 1), (botChoice = 0))) {
//     status = "you won!";
//     console.log(message);
//   } else if (((humanChoice = 0), (botChoice = 1))) {
//     status = "you lost!";
//   } else  (((humanChoice = 0.5), (botChoice = 0.5))) {
//     status = "you tied!";
//   }
//   //(0,1)human lost | bot won
//   message = finalMessage(results);
//   rgsFrontEnd(yourChoice.id, botChoice, Message); //{"message": "you won!", "color": "green"}

/* challenge 3  ----   rock, paper, scissors;*/

function rpsGame(yourChoice) {
  // from line 67 to line 75 is more like the skeleton and the procedures
  console.log(yourChoice); //to get the answer to the body, which is the body we are supposed to fill up
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log(botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);

  rpsfrontend(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, " scissors": 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "you lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "you tied!", color: "yellow" };
  } else {
    return { message: "you won!", color: "green" };
  }
}

function rpsfrontend(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // lets remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "'height=150 width=150 style='box-shadow:0px 10px 50px #000'>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size:60px; box-shadow:0px 10px 50px #00e; padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "'height=150 width=150 style='box-shadow:0px 10px 50px #f0ff'>";
  document.getElementById("rpsimages").appendChild(botDiv);
  document.getElementById("rpsimages").appendChild(messageDiv);
  document.getElementById("rpsimages").appendChild(humanDiv);
}

// challenge four: change the color of all buttons!!!
var all_buttons = document.getElementsByTagName("button");
// console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
  // console.log(copyAllButtons);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonGreen();
  } else if (buttonThingy.value === "reset") {
    buttonColorReset();
  } else if (buttonThingy.value === "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[1].classList[1]);
    all_buttons[i].classList.add("red");
  }
}
function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("green");
  }
}
function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function randomColors() {
  let choices = ["red", "green", "yellow", "blue"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

// blackjack challeange

let blackJackGame = {
  you: { scorespan: "#your-black-jack-result", div: "#your-box", score: 0 },
  dealer: {
    scorespan: "#dealer-black-jack-result",
    div: "#dealer-box",
    score: 0,
  },
};

const YOU = blackJackGame["you"];
const DEALER = blackJackGame["dealer"];
const hitSound = new Audio("_MACOSX/sounds/._aww.mp3");
document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackJackHit);

function blackJackHit() {
  let cardImage = document.createElement("img");
  cardImage.src = "images/._9.png";
  document.querySelector[YOU["div"]].appendChild(cardImage);
  hitSound.play();
}
// // const YOU = blackjackGame["you"];
// document
//   .querySelector("#blackjack-deal-button")
//   .addEventListener("click", blackjackDeal);
// const winSound = new Audio("./sounds/cash.mp3");
// addEventListener("click", function () {
//   blackJackHit();
// });

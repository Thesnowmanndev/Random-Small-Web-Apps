import {
  navbar,
  appHead,
  appContent,
  footer,
  navbarContent,
  appHeadContent,
  appBodyContent,
  footerContent,
  createApp,
} from "./components/appMarkup.js";

import databank from "./data/databank.json" assert { type: "json" };

// App Initialization (see ./components/appMarkup.js)
// TODO: Clean up imports/exports
createApp();

// App logic
let newGame = true;
let startGame = false;
let inGame = false;
let amountOfIds = 0;
let score = 0;

let currentId = 0;
let question = databank.triviaOne[currentId].question;
let answerOne = databank.triviaOne[currentId].answerOne;
let answerTwo = databank.triviaOne[currentId].answerTwo;
let answerThree = databank.triviaOne[currentId].answerThree;
let answerFour = databank.triviaOne[currentId].answerFour;
let correctAnswer;
let option = 0;

let questions = databank.triviaOne;
function establishMaxQuestions() {
  const maxId = databank.triviaOne.reduce(
    (maxIds, currentQuestion) =>
      currentQuestion.id > maxIds ? currentQuestion.id : maxIds,
    questions[0].id
  );

  return maxId;
}

const triviaCard = `
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
  <div class="card-body">
    <p id="question">${question}</p>
    <div id="options" class="card-actions justify-center md:justify-end">
      <button id="btn-answerOne" class="btn btn-primary dark:btn-outline">${answerOne}</button>
      <button id="btn-answerTwo" class="btn btn-success dark:btn-outline">${answerTwo}</button>
      <button id="btn-answerThree" class="btn btn-secondary dark:btn-outline">${answerThree}</button>
      <button id="btn-answerFour" class="btn btn-error dark:btn-outline">${answerFour}</button>
    </div>
  </div>
</div>
`;

// Start Screen button
if (newGame == true) {
  let btnBegin = document.querySelector("#btn-begin");

  btnBegin.onclick = (event) => {
    event.preventDefault();
    manageTrivia();
  };
}

function setGameStatus() {
  newGame = false;
  startGame = true;
  inGame = true;
}

function startOfTrivia() {
  amountOfIds = establishMaxQuestions();
  score = 0;
  writeTriviaCard();
}

function writeTriviaCard() {
  return (appContent.innerHTML = triviaCard);
}

function iterateQuestionsAnswers() {
  currentId += 1;
  console.log(currentId);
}

function checkCorrect(option) {
  let result;
  let correctOption = databank.triviaOne[currentId].option;

  if (option == correctOption) {
    result = true;
    addToScore();
    populateCorrect();
  } else {
    result = false;
    populateIncorrect();
  }
  return result;
}

function addToScore() {
  score += 10;
}

function populateCorrect() {
  correctAnswer = databank.triviaOne[currentId].correctAnswer;

  alert(
    "Your answer " + correctAnswer + " was the correct answer! +10 Points!"
  );
}

function populateIncorrect() {
  correctAnswer = databank.triviaOne[currentId].correctAnswer;

  alert("I'm sorry, the correct answer was " + correctAnswer + "! +0 Points.");
}

function showNextButton() {
  let questionElement = document.querySelector("#question");
  let maxPoints = establishMaxQuestions() * 10 + 10;
  let emptyQuestion = `Current score: ${score} out of ${maxPoints}`;
  let nextButton = `<button id="btn-next" class="btn btn-accent dark:btn-outline">Next Question</button>`;
  let optionElement = document.querySelector("#options");

  return (
    (questionElement.innerHTML = emptyQuestion),
    (optionElement.innerHTML = nextButton)
  );
}

function assignNext() {
  let btnNext = document.querySelector("#btn-next");

  btnNext.onclick = (event) => {
    event.preventDefault();

    currentId += 1;
    advanceGame(currentId);
    manageTrivia();
  };
}

function advanceGame(currentId) {
  // End of Trivia check
  if (currentId > amountOfIds) {
    inGame = false;
    let maxPoints = establishMaxQuestions() * 10 + 10;
    let scoreScreen = `
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
        <div class="card-body">
            <h2 class="card-title">Congratulations! You reached the end!</h2>
            <p>You scored ${score} points out of ${maxPoints}!</p>
            <div id="options" class="card-actions justify-center md:justify-end">
                <a href="/src/index.html" class="btn btn-primary dark:btn-outline">Replay</a>
            </div>
        </div>
    </div>
    `;

    return (appContent.innerHTML = scoreScreen);
  }
  question = databank.triviaOne[currentId].question;
  answerOne = databank.triviaOne[currentId].answerOne;
  answerTwo = databank.triviaOne[currentId].answerTwo;
  answerThree = databank.triviaOne[currentId].answerThree;
  answerFour = databank.triviaOne[currentId].answerFour;

  let newTriviaCard = `
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
    <div class="card-body">
      <p id="question">${question}</p>
      <div id="options" class="card-actions justify-center md:justify-end">
        <button id="btn-answerOne" class="btn btn-primary dark:btn-outline">${answerOne}</button>
        <button id="btn-answerTwo" class="btn btn-success dark:btn-outline">${answerTwo}</button>
        <button id="btn-answerThree" class="btn btn-secondary dark:btn-outline">${answerThree}</button>
        <button id="btn-answerFour" class="btn btn-error dark:btn-outline">${answerFour}</button>
      </div>
    </div>
  </div>
  `;

  return (appContent.innerHTML = newTriviaCard);
}

// Main Gameplay Loop
function manageTrivia() {
  // New Game Check
  if (newGame == true) {
    setGameStatus();
  }
  // Start of Game Check
  if (startGame == true) {
    startOfTrivia();
    startGame = false;
  }
  // In Game Check
  if (inGame == true) {
    let btnAnswerOne = document.querySelector("#btn-answerOne");
    let btnAnswerTwo = document.querySelector("#btn-answerTwo");
    let btnAnswerThree = document.querySelector("#btn-answerThree");
    let btnAnswerFour = document.querySelector("#btn-answerFour");

    btnAnswerOne.onclick = (event) => {
      event.preventDefault();
      option = 1;

      checkCorrect(option);
      showNextButton();
      assignNext();
    };

    btnAnswerTwo.onclick = (event) => {
      event.preventDefault();
      option = 2;

      checkCorrect(option);
      showNextButton();
      assignNext();
    };

    btnAnswerThree.onclick = (event) => {
      event.preventDefault();
      option = 3;

      checkCorrect(option);
      showNextButton();
      assignNext();
    };

    btnAnswerFour.onclick = (event) => {
      event.preventDefault();
      option = 4;

      checkCorrect(option);
      showNextButton();
      assignNext();
    };
  }
}

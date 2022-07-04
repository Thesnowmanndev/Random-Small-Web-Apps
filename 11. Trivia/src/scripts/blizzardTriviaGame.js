import questions from "../data/questions.json" assert { type: "json" };
import answers from "../data/answers.json" assert { type: "json" };

const appContent = document.querySelector("#app-content");
const blizzTitle = "Blizzard";

let blizzardQuestions = questions.blizzardQuestions;
const maxId = questions.blizzardQuestions.reduce(
  (maxQuestions, blizzQuestion) =>
    blizzQuestion.id > maxQuestions ? blizzQuestion.id : maxQuestions,
  blizzardQuestions[0].id
);

let questionId = 0;
let answerID = 0;

// Assigns initial questions and answers
let blizzQuestion = questions.blizzardQuestions[questionId].question;
let blizzAnswerOneText = answers.blizzardAnswers[answerID].answerOne;
let blizzAnswerTwoText = answers.blizzardAnswers[answerID].answertwo;
let blizzAnswerThreeText = answers.blizzardAnswers[answerID].answerThree;
let blizzAnswerFourText = answers.blizzardAnswers[answerID].answerFour;

let score = 0;

// Starts Game
function gameplay() {
  score = 0;

  manageGame();
}

// Gameplay Loop
function manageGame() {
  // Checks to see if at the end
  if (questionId > maxId) {
    let btnReplay = document.querySelector("#btn-replay");
    let btnExit = document.querySelector("#btn-exit");

    btnReplay.onclick = (event) => {
      event.preventDefault();
      window.location.reload();
    };

    btnExit.onclick = (event) => {
      event.preventDefault();
      window.open("index.html", "_self");
    };
  }

  let btnAnswerOne = document.querySelector("#btn-answerOne");
  let btnAnswerTwo = document.querySelector("#btn-answerTwo");
  let btnAnswerThree = document.querySelector("#btn-answerThree");
  let btnAnswerFour = document.querySelector("#btn-answerFour");

  let option;

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

function checkCorrect(option) {
  let result;
  let correctOption = answers.blizzardAnswers[answerID].option;

  if (option == correctOption) {
    result = true;
    addToScore();
    populateAnswerCorrect();
  } else {
    result = false;
    populateAnswerIncorrect();
  }

  return result;
}

function addToScore() {
  score += 10;
}

function populateAnswerCorrect() {
  let correctAnswer = answers.blizzardAnswers[answerID].correctAnswer;

  alert(
    "Your answer " + correctAnswer + " was the correct answer! +10 Points!"
  );
}

function populateAnswerIncorrect() {
  let correctAnswer = answers.blizzardAnswers[answerID].correctAnswer;

  alert("I'm sorry, the correct answer was " + correctAnswer + "! +0 Points.");
}

function showNextButton() {
  let nextButton = `<button id="btn-next" class="btn btn-accent md:btn-outline">Next Question</button>`;
  let optionElement = document.querySelector("#options");

  return (optionElement.innerHTML = nextButton);
}

function assignNext() {
  let btnNext = document.querySelector("#btn-next");

  btnNext.onclick = (event) => {
    event.preventDefault();

    questionId += 1;
    answerID += 1;
    advanceGame(questionId, answerID);
    manageGame();
  };
}

function advanceGame(questionId, answerID) {
  // Checks to see if all questions have been answered
  if (questionId > maxId) {
    let scoreScreen = `
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
        <div class="card-body">
            <h2 class="card-title">Congratulations! You reached the end!</h2>
            <p>You scored ${score} points out of 50 points!</p>
            <div id="options" class="card-actions justify-center md:justify-end">
                <button id="btn-replay" class="btn btn-primary md:btn-outline">Replay</button>
                <button id="btn-exit" class="btn btn-secondary md:btn-outline">Main Menu</button>
            </div>
        </div>
    </div>
    `;

    return (appContent.innerHTML = scoreScreen);
  }

  // Assigns new questions and answers
  blizzQuestion = questions.blizzardQuestions[questionId].question;
  blizzAnswerOneText = answers.blizzardAnswers[answerID].answerOne;
  blizzAnswerTwoText = answers.blizzardAnswers[answerID].answertwo;
  blizzAnswerThreeText = answers.blizzardAnswers[answerID].answerThree;
  blizzAnswerFourText = answers.blizzardAnswers[answerID].answerFour;

  // Repopulates the App Content
  let newAppBodyContent = `
      <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
      <div class="card-body">
          <h2 class="card-title">${blizzTitle}:</h2>
          <p>${blizzQuestion}</p>
          <div id="options" class="card-actions justify-center md:justify-end">
              <button id="btn-answerOne" class="btn btn-primary md:btn-outline">${blizzAnswerOneText}</button>
              <button id="btn-answerTwo" class="btn btn-success md:btn-outline">${blizzAnswerTwoText}</button>
              <button id="btn-answerThree" class="btn btn-secondary md:btn-outline">${blizzAnswerThreeText}</button>
              <button id="btn-answerFour" class="btn btn-error md:btn-outline">${blizzAnswerFourText}</button>
          </div>
      </div>
      </div>
      `;

  return (appContent.innerHTML = newAppBodyContent);
}

gameplay();

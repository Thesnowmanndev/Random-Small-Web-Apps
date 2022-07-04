import questions from "../data/questions.json" assert { type: "json" };
import answers from "../data/answers.json" assert { type: "json" };

import {
  navbar,
  appHead,
  appContent,
  footer,
  navbarContent,
  appHeadContent,
  footerContent,
  writeNavbar,
  writeAppHead,
  writeAppBody,
  writeFooter,
  createApp,
} from "/app";
import {
  blizzardTitle,
  blizzardQuestions,
  blizzardAnswers,
} from "./blizzardTriviaGame";
import { warcraftTitle } from "./warcraftTriviaGame";

let triviaTitle = "";
let gameTheme = "";
let questionID = 0;
let answerID = 0;
let score = 0;
let option = 0;

function setGameTitle(gameTitle) {
  return (triviaTitle = gameTitle);
}

function establishGameTheme(gameTheme) {
  if (gameTheme == "Blizzard") {
    setGameTitle(blizzardTitle);
    gameTheme = blizzardTitle;
  }

  if (gameTheme == "Warcraft") {
  }

  if (gameTheme == "Starcraft") {
  }

  if (gameTheme == "Diablo") {
  }
}

// Checks the amount of questions in the theme requested (blizz, warcraft, starcraft, diablo)
function establishMaxIds(themeOfQuestions) {
  const maxIds = themeOfQuestions.reduce(
    (maxQuestions, question) =>
      question.id > maxQuestions ? question.id : maxQuestions,
    themeOfQuestions[0].id
  );

  return maxIds;
}

// Creates trivia content
function buildTriviaCard(
  triviaTitle,
  questionText,
  answerOneText,
  answerTwoText,
  answerThreeText,
  answerFourText
) {
  const triviaCard = `
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
        <div class="card-body">
            <h2 class="card-title">${triviaTitle}:</h2>
            <p>${questionText}</p>
            <div id="options" class="card-actions justify-center md:justify-end">
                <button id="btn-answerOne" class="btn btn-primary md:btn-outline">${answerOneText}</button>
                <button id="btn-answerTwo" class="btn btn-success md:btn-outline">${answerTwoText}</button>
                <button id="btn-answerThree" class="btn btn-secondary md:btn-outline">${answerThreeText}</button>
                <button id="btn-answerFour" class="btn btn-error md:btn-outline">${answerFourText}</button>
            </div>
        </div>
    </div>
    `;

  return triviaCard;
}

function checkCorrect(option, themeOfAnswers) {
  let result = false;
  let correctOption = themeOfAnswers[answerID].option;

  if (option == correctOption) {
    result = true;
    addToScore();
    populateAnswer(result, themeOfAnswers);
  } else {
    result = false;
    populateAnswer(result, themeOfAnswers);
  }

  return result;
}

function populateAnswer(result, themeOfAnswers) {
  let correctAnswer = themeOfAnswers[answerID].correctAnswer;

  if (result == true) {
    alert(
      "Your answer " + correctAnswer + " was the correct answer! +10 Points!"
    );
  } else {
    alert(
      "I'm sorry, the correct answer was " + correctAnswer + "! +0 Points."
    );
  }
}

function addToScore() {
  score += 10;
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
    advanceGame(questionId, maxIds, answerID, themeOfQuestions, themeOfAnswers);
    manageGame();
  };
}

function advanceGame(
  questionID,
  maxIds,
  answerID,
  themeOfQuestions,
  themeOfAnswers
) {
  // Checks to see if all questions have been answered
  if (questionID > maxIds) {
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

  // Assign new questions and answers
  questionText = themeOfQuestions[questionID].question;
  answerOneText = themeOfAnswers[answerID].answerOne;
  answerTwoText = themeOfAnswers[answerID].answertwo;
  answerThreeText = themeOfAnswers[answerID].answerThree;
  answerFourText = themeOfAnswers[answerID].answerFour;

  let newTriviaCard = buildTriviaCard(
    triviaTitle,
    questionText,
    answerOneText,
    answerTwoText,
    answerThreeText,
    answerFourText
  );

  return (appContent.innerHTML = newTriviaCard);
}

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

  establishMaxIds(themeOfQuestions);

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

function startGame() {
  score = 0;
}

function createNewApp() {
  writeNavbar();
  writeAppHead();
  writeAppBody();
  writeFooter();
}

createNewApp();

startGame();
manageGame();

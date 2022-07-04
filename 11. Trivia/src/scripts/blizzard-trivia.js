import questions from "../data/questions.json" assert { type: "json" };
import answers from "../data/answers.json" assert { type: "json" };

const navbar = document.querySelector("#navbar");
const appHead = document.querySelector("#app-head");
const appContent = document.querySelector("#app-content");
const footer = document.querySelector("#footer");

const blizzTitle = "Blizzard";
let questionId = 0;
let answerID = 0;
let blizzQuestion = questions.blizzardQuestions[questionId].question;
let blizzAnswerOneText = answers.blizzardAnswers[answerID].answerOne;
let blizzAnswerTwoText = answers.blizzardAnswers[answerID].answertwo;
let blizzAnswerThreeText = answers.blizzardAnswers[answerID].answerThree;
let blizzAnswerFourText = answers.blizzardAnswers[answerID].answerFour;

// App Markup
const navbarContent = `
<div class="navbar bg-base-100 py-2 md:px-8">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
            </label>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li><a class="hover:text-sky-400  hover:border-b hover:border-orange-400" href="index.html">Home</a></li>
                <li>
                <a
                    class="hover:text-sky-400  hover:border-b hover:border-sky-400"
                    href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
                    target="_blank"
                    >Code</a
                >
                </li>
                <li>
                <a  class="hover:text-sky-400  hover:border-b hover:border-sky-400"
                    href="https://github.com/Thesnowmanndev" target="_blank"
                    >About</a
                >
                </li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case tracking-tight text-lg font-thin"
        ><i class="fas fa-laptop-code mr-2 text-sky-400"></i> <span class="text-sky-400 hover:text-orange-400">Small Apps</span></a
        >
    </div>
    <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 tracking-tight">
        <li
            class="hover:border-b hover:border-sky-400"
        >
            <a href="index.html"><span class="text-sky-400 hover:text-orange-400">Home</span></a>
        </li>
        <li class="hover:text-orange-400 hover:border-b hover:border-sky-400">
            <a
            href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
            target="_blank"
            >Code</a
            >
        </li>
        <li class="hover:text-orange-400 hover:border-b hover:border-sky-400">
            <a href="https://github.com/Thesnowmanndev" target="_blank"
            >About</a
            >
        </li>
        </ul>
    </div>
</div>
`;

const appHeadContent = `
    <div>
        <div>
            <h1>How have you been?</h1>
        </div>
        <h2 class="text-sm mt-8 underline">11. Trivia:</h2>
        <p class="mt-2 md:mt-4">This small web app will allow the user to play a trivia game.</p>
        <div class="divider"></div> 
    </div>
`;

const appBodyContent = `
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

const footerContent = `
<footer class="footer items-center p-4 text-neutral-content rounded-md">
  <div class="items-center grid-flow-col mt-4 rounded-lg">
    <a target="_blank" class="invisible md:visible cursor-none">
        <img src="../images/icons/snowman.png" alt="snowman" class="w-0 md:w-10 h-0 md:h-10">
    </a>
    <p>Copyright Kyle Martin © 2022 - All right reserved</p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end invisible md:visible">
    <a href="https://github.com/Thesnowmanndev" target="_blank">
        <img src="../images/icons/github.png" alt="github" class="w-0 md:w-10 h-0 md:h-10">
    </a> 
    <a href="https://www.linkedin.com/in/developer-kyle-martin/" target="_blank">
        <img src="../images/icons/linkedin.png" alt="linkedin" class="w-0 md:w-10 h-0 md:h-10">
    </a> 
  </div>
</footer>
`;

// App Initialization
let writeNavbar = () => (navbar.innerHTML = navbarContent);
let writeAppHead = () => (appHead.innerHTML = appHeadContent);
let writeAppBody = () => (appContent.innerHTML = appBodyContent);
let writeFooter = () => (footer.innerHTML = footerContent);

let createApp = () => {
  writeNavbar();
  writeAppHead();
  writeAppBody();
  writeFooter();
};

createApp();

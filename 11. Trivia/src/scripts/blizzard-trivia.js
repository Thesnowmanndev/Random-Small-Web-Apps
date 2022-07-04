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

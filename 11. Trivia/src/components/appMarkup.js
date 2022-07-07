const repositoryName = `Small Apps`;
const repositoryURL = `https://github.com/Thesnowmanndev/Random-Small-Web-Apps`;
const developerURL = `https://github.com/Thesnowmanndev`;
const appName = `11. Trivia-App`;
const greeting = `How have you been?`;
const appDescription = `This small web app will allow the user to play a trivia game.`;
const developer = `Kyle Martin`;
const githubURL = `https://github.com/Thesnowmanndev`;
const linkedinURL = `https://www.linkedin.com/in/developer-kyle-martin/`;
const browserNewTab = `_blank`;

export const navbar = document.querySelector("#navbar");
export const appHead = document.querySelector("#app-head");
export const appContent = document.querySelector("#app-content");
export const footer = document.querySelector("#footer");

let triviaTitle = `TRIVIA`;
let triviaIntro = `Welcome to a trivia game regarding Javascript! Good luck!`;

export const navbarContent = `
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
                <li><a class="hover:text-sky-400  hover:border-b hover:border-orange-400" href="./index.html">Home</a></li>
                <li>
                <a
                    class="hover:text-sky-400  hover:border-b hover:border-sky-400"
                    href="${repositoryURL}"
                    target="${browserNewTab}"
                    >Code</a
                >
                </li>
                <li>
                <a  class="hover:text-sky-400  hover:border-b hover:border-sky-400"
                    href="${developerURL}" target="${browserNewTab}"
                    >About</a
                >
                </li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case tracking-tight text-lg font-thin"
        ><i class="fas fa-laptop-code mr-2 text-sky-400"></i> <span class="text-sky-400 hover:text-orange-400">${repositoryName}</span></a
        >
    </div>
    <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 tracking-tight">
        <li
            class="hover:border-b hover:border-sky-400"
        >
            <a href="./index.html"><span class="text-sky-400 hover:text-orange-400">Home</span></a>
        </li>
        <li class="hover:text-orange-400 hover:border-b hover:border-sky-400">
            <a
            href="${repositoryURL}"
            target="${browserNewTab}"
            >Code</a
            >
        </li>
        <li class="hover:text-orange-400 hover:border-b hover:border-sky-400">
            <a href="${developerURL}" target="${browserNewTab}"
            >About</a
            >
        </li>
        </ul>
    </div>
</div>
`;

export const appHeadContent = `
    <div>
        <div>
            <h1>${greeting}</h1>
        </div>
        <h2 class="text-sm mt-8 underline">${appName}</h2>
        <p class="mt-2 md:mt-4">${appDescription}</p>
        <div class="divider"></div> 
    </div>
`;

export const appBodyContent = `
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/tech" alt="Album"></figure>
  <div class="card-body">
    <h2 class="card-title">${triviaTitle}:</h2>
    <p id="question">${triviaIntro}</p>
    <div id="options" class="card-actions justify-center md:justify-end">
      <button id="btn-begin" class="btn btn-primary dark:btn-outline">Begin!</button>
    </div>
  </div>
</div>
`;

export const footerContent = `
<footer class="footer items-center p-4 text-neutral-content rounded-md">
  <div class="items-center grid-flow-col mt-4 rounded-lg">
    <a target="${browserNewTab}" class="invisible md:visible cursor-none">
        <img src="./images/snowman.png" alt="snowman" class="w-0 md:w-10 h-0 md:h-10">
    </a>
    <p>Copyright ${developer} © 2022 - All right reserved</p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end invisible md:visible">
    <a href="${githubURL}" target="${browserNewTab}">
        <img src="./images/github.png" alt="github" class="w-0 md:w-10 h-0 md:h-10">
    </a> 
    <a href="${linkedinURL}" target="${browserNewTab}">
        <img src="./images/linkedin.png" alt="linkedin" class="w-0 md:w-10 h-0 md:h-10">
    </a> 
  </div>
</footer>
`;

// App Initialization
let writeNavbar = () => (navbar.innerHTML = navbarContent);
let writeAppHead = () => (appHead.innerHTML = appHeadContent);
let writeAppBody = () => (appContent.innerHTML = appBodyContent);
let writeFooter = () => (footer.innerHTML = footerContent);

export let createApp = () => {
  writeNavbar();
  writeAppHead();
  writeAppBody();
  writeFooter();
};

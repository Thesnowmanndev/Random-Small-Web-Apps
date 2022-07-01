import greetingsFile from "./data/greetingsListing.json" assert { type: "json" };

const navbar = document.getElementById("navbar");
const app = document.getElementById("app-content");
const footer = document.getElementById("footer");

let greetingsId = getRandomInt(2);
let greeting = greetingsFile.greetingsListing[greetingsId].greeting;

const navbarContent = `
<div class="navbar bg-base-100 border-b border-white py-2">
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
                <li><a class="hover:text-sky-400" href="./index.html">Home</a></li>
                <li>
                <a
                    class="hover:text-sky-400"
                    href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
                    target="_blank"
                    >Code</a
                >
                </li>
                <li>
                <a  class="hover:text-sky-400"
                    href="https://github.com/Thesnowmanndev" target="_blank"
                    >About</a
                >
                </li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case tracking-tight text-lg font-thin hover:text-sky-400"
        ><i class="fas fa-laptop-code mr-2 text-sky-400"></i> Small Apps</a
        >
    </div>
    <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 tracking-tight">
        <li
            class="hover:text-sky-400 border-b border-sky-400 hover:border-orange-400"
        >
            <a href="./index.html">Home</a>
        </li>
        <li class="hover:text-sky-400">
            <a
            href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
            target="_blank"
            >Code</a
            >
        </li>
        <li class="hover:text-sky-400">
            <a href="https://github.com/Thesnowmanndev" target="_blank"
            >About</a
            >
        </li>
        </ul>
    </div>
</div>
`;

const appContent = `
    <div class="mt-4 md:mt-6 px-2">
        <div id="greeting-message">
            <h1 class="hover:text-sky-400">${greeting}!</h1>
        </div>
        <h2 class="text-sm mt-10 underline">08. Greetings-Generator:</h2>
        <p class="mt-2">This small web app will generate a friendly greeting upon page load and a simple click of the button below. What are you waiting for? Clickity click! Every small web app I am creating in this Random-Small-Web-Apps repo I try to include a random greeting, however I want to automate this process from here on out.</p>
        <div class="flex justify-center">
            <button id="btn" class="btn btn-active bg-sky-400 text-white my-6">New Greeting!</button>
        </div>
    </div>
`;

const footerContent = `
    <p class="border-r border-gray-600 px-2">
        Copyright &copy Kyle Martin, 2022
    </p>
    <p class="px-2">
        <a href="https://www.linkedin.com/in/developer-kyle-martin/" target="_blank" class="hover:text-orange-400">
            Contact Me
        </a>
    </p>
`;

// App Initialization
let writeNavbar = () => (navbar.innerHTML = navbarContent);
let writeApp = () => (app.innerHTML = appContent);
let writeFooter = () => (footer.innerHTML = footerContent);

let createApp = () => {
  writeNavbar();
  writeApp();
  writeFooter();
};

createApp();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let chooseGreeting = () => {
  greetingsId = getRandomInt(2);
  greeting = greetingsFile.greetingsListing[greetingsId].greeting;
  return greeting;
};

const btn = document.querySelector("#btn");
const greetingOutput = document.querySelector("#greeting-message");

btn.onclick = (event) => {
  event.preventDefault();
  greeting = chooseGreeting();

  let newGreeting = `<h1 class="hover:text-sky-400">${greeting}!</h1>`;

  return (greetingOutput.innerHTML = newGreeting);
};

// Debug
let logClicked = () => console.log("Clicked");

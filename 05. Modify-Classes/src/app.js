const navbar = document.getElementById("navbar");
const app = document.getElementById("app-content");
const footer = document.getElementById("footer");

const snowman = document.getElementById("snowman");

const navbarContent = `
    <div class="flex-shrink-0 cursor-none">
        <i class="fas fa-laptop-code ml-10 mr-2 text-sky-400"></i>
        <span>Small Apps</span>
    </div>
    <i class="fas fa-bars visible md:invisible mr-10 md:mr-0 text-sky-400 cursor-pointer" onclick="logClicked();"></i>
    <ul class="hidden md:flex overflow-x-hidden mr-10 tracking-tight">
        <li class="mr-6 p-1 hover:text-sky-400 border-b border-sky-400 hover:border-orange-400">
            <a href="./index.html">Home</a>
        </li>
        <li class="mr-6 p-1 hover:text-sky-400">
            <a href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps" target="_blank">
                Code
            </a>
        </li>
        <li class="mr-6 p-1 hover:text-sky-400">
            <a href="https://github.com/Thesnowmanndev" target="_blank">
                About
            </a>
        </li>
    </ul>
`;

const appContent = `
    <div class="mt-4 md:mt-8 px-2">
        <h1 class="hover:text-sky-400">Hola!</h1>
        <h2 class="text-sm mt-5 underline">05. Snowman:</h2>
        <p class="mt-2">The goal of this small app is to change the color of the snowman icon when the user clicks a button. The color options are Sky blue, Rose pink, Emerald green, and white.</p>
    </div>

    <div class="flex justify-between mt-10 md:mt-20">
        <button
            class="border border-sky-400 text-sky-400 rounded-lg py-4 px-2"
            onclick="colorSky();"
        >
            Sky Colored Snowman
        </button>
        <button
            class="border border-rose-400 text-rose-400 rounded-lg py-4 px-2"
            onclick="colorRose();"
        >
            Rose Colored Snowman
        </button>
        <button
            class="border border-emerald-400 text-emerald-400 rounded-lg py-4 px-2"
            onclick="colorEmerald();"
        >
            Emerald Colored Snowman
        </button>
        <button
            class="border border-slate-800 text-slate-800 dark:border-white dark:text-white rounded-lg py-4 px-2"
            onclick="location.reload();"
        >
            Reset Color of Snowman
        </button>
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

let colorSky = () =>
  (snowman.className = "fas fa-snowman text-sky-400 text-9xl");
let colorRose = () =>
  (snowman.className = "fas fa-snowman text-rose-400 text-9xl");
let colorEmerald = () =>
  (snowman.className = "fas fa-snowman text-emerald-400 text-9xl");

let writeNavbar = () => (navbar.innerHTML = navbarContent);
let writeApp = () => (app.innerHTML = appContent);
let writeFooter = () => (footer.innerHTML = footerContent);

let createApp = () => {
  writeNavbar();
  writeApp();
  writeFooter();
};

createApp();

// Debug
let logClicked = () => console.log("Clicked");

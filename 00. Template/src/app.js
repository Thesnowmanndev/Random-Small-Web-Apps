const navbar = document.getElementById("navbar");
const app = document.getElementById("app-content");
const footer = document.getElementById("footer");

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
        <h1 class="hover:text-sky-400">Hello, World!</h1>
        <h2 class="text-sm mt-10 underline">00. Template:</h2>
        <p class="mt-2">The app will soon be created from this template. If this message still exists, I overlooked it and will change it to match a descriptive paragraph of the app.</p>
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

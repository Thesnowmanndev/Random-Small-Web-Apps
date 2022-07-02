const navbar = document.querySelector("#navbar");
const appHead = document.querySelector("#app-head");
const appContent = document.querySelector("#app-content");
const footer = document.querySelector("#footer");

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
                <li><a class="hover:text-sky-400  hover:border-b hover:border-orange-400" href="./index.html">Home</a></li>
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
            <a href="./index.html"><span class="text-sky-400 hover:text-orange-400">Home</span></a>
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
            <h1>How do you do?</h1>
        </div>
        <h2 class="text-sm mt-8 underline">10. Notifications:</h2>
        <p class="mt-2 md:mt-4">This small web app will mimic the appearance of a notification on an avatar when a button is clicked. Simply, click the button below and see the amount of notifications get reflected.</p>
    </div>
`;

const appBodyContent = `
    <div class="container max-w-lg">
        <div class="flex flex-col w-full">
            <div class="grid h-auto card bg-base-300 rounded-box place-items-center py-10">
                
                <div class="avatar indicator">
                    <span id="notification"></span>
                    <div class="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div> 
            <div class="divider"></div> 
            <div class="grid h-auto py-10 card bg-base-300 rounded-box place-items-center">
                <button
                id="btn"
                class="btn dark:btn-outline btn-info btn-sm mt-4"
                >
                    Add a Notification
                </button>
                <div id="easter-egg" class="mt-4 md:mt-10 px-20"></div>
                <div id="reset" class="invisible">
                    <button
                        id="btn-reset"
                        class="btn dark:btn-outline btn-error btn-sm mt-4"
                    >
                        Reset
                    </button>
            </div>
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

// Functions
const btn = document.querySelector("#btn");
const btnReset = document.querySelector("#btn-reset");
const reloadApp = document.querySelector("#reset");
const notifications = document.querySelector("#notification");
const easterEgg = document.querySelector("#easter-egg");
const easterEggMarkup = `
<h1 class="text-slate-800 dark:text-white text-2xl">Wow! That sure is a whole lot of notifications. Nice work!</h1>
`;

let notificationsAmount = 0;
let notificationsVisible = false;

function addNotification() {
  let notificationsMarkup = `<span class="indicator-item badge badge-error"><i class="fas fa-bell"></i> <span class="ml-1">${notificationsAmount}</span></span>`;

  if (notificationsAmount > 0 && notificationsVisible == true) {
    return (notifications.innerHTML = notificationsMarkup);
  }
}

btn.onclick = (event) => {
  event.preventDefault();

  if (notificationsVisible == false) {
    notificationsVisible = true;
  }

  notificationsAmount += 1;

  addNotification();

  if (notificationsAmount >= 30) {
    return (
      (easterEgg.innerHTML = easterEggMarkup), (reloadApp.className = "visible")
    );
  }
};

btnReset.onclick = (event) => {
  event.preventDefault();

  location.reload();
};

// Debug
let logClicked = () => console.log("Clicked");

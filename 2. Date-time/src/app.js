const nav = document.getElementById("nav");
const siteContent = document.getElementById("site-content");
const header = document.getElementById("header-section");
const pageContent = document.getElementById("date-time");
const footer = document.getElementById("footer");

let date = new Date();
let currentDate;
let currentTime;

function setDate() {
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDate();
  let currentYear = date.getFullYear();

  currentDate = currentMonth + "/" + currentDay + "/" + currentYear;

  return currentDate;
}

function setTime() {
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }

  currentTime = currentHour + ":" + currentMinutes;

  return currentTime;
}

function writePageContent() {
  let dateTime = `
        <h1 class="text-xl underline">Date:</h1>
        <p>${currentDate}</p>
        <h1 class="text-xl underline">Time:</h1>
        <p>${currentTime}</p>
    `;

  return (pageContent.innerHTML = dateTime);
}

function setNav() {
  const navbar = `
    <ul class="flex align-inline justify-between">
        <li><a href="#">Home</a></li>
        <li class="text-xl hover:cursor-none">
            <a href="https://github.com/Thesnowmanndev" target="_blank"
                >TheSnowmanndev's
            </a>
        </li>
        <li>
            <a
                href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
                target="_blank"
                > See Code
            </a>
        </li>
    </ul>
    <hr />
`;

  return (nav.innerHTML = navbar);
}

function setHeader() {
  const headerContent = `
    <h1 class="text-white dark:text-slate-500 font-medium tracking-tight">
        Hello, there!
    </h1>
    <p>
        This a simple web application made with Javascript that will modify
        the webpage to display the current date and time that the page is
        loaded. 
    </p>
    <p class="mt-4">
        Application: 2. Date-Time
    </p>
`;

  return (header.innerHTML = headerContent);
}

function setFooter() {
  let footerContent = `
    <footer
    class="text-center text-white bg-slate-800 dark:text-slate-800 dark:bg-white"
    >
        <div class="pt-20">
            <div
                class="p-4 bg-slate-500 dark:bg-slate-200 dark:text-slate-800 rounded-lg flex justify-between"
            >
                <div>
                    <p>
                        Check out more of my work on 
                        <a
                        href="https://github.com/Thesnowmanndev/"
                        target="_blank"
                        class="underline decoration-slate-800 text-sky-500"
                        >
                        GitHub</a
                        >
                    </p>
                    </div>
                    <div>
                        <p>Created 6/21/2022</p>
                    </div>
            </div>
        </div>
    </footer>
`;

  return (footer.innerHTML = footerContent);
}

function initializePage() {
  setDate();
  setTime();
  setNav();
  setHeader();
  writePageContent();
  setFooter();
}

initializePage();

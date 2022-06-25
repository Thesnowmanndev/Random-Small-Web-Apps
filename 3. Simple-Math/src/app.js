const nav = document.getElementById("nav");
const siteContent = document.getElementById("site-content");
const header = document.getElementById("header-section");
const pageContent = document.getElementById("simple-math");
const output = document.getElementById("output-calculation");
const footer = document.getElementById("footer");

function multiplication() {
  let x = Number(document.getElementById("firstGivenInt").value);
  let y = Number(document.getElementById("secondGivenInt").value);
  let result = x * y;

  outputCalculation(result);
}

function division() {
  let x = Number(document.getElementById("firstGivenInt").value);
  let y = Number(document.getElementById("secondGivenInt").value);
  let result = x / y;

  outputCalculation(result);
}

function addition() {
  let x = Number(document.getElementById("firstGivenInt").value);
  let y = Number(document.getElementById("secondGivenInt").value);
  let sum = x + y;

  outputCalculation(sum);
}

function subtraction() {
  let x = Number(document.getElementById("firstGivenInt").value);
  let y = Number(document.getElementById("secondGivenInt").value);
  let result = x - y;

  outputCalculation(result);
}

function outputCalculation(result) {
  let positiveCalculation = `
        <p class="text-2xl">The result of the calculation is: <span class="text-green-600">${result}</span></p>
    `;

  let negativeCalculation = `
        <p class="text-2xl">The result of the calculation is: <span class="text-red-600">${result}</span></p>
    `;

  if (result >= 0) {
    return (output.innerHTML = positiveCalculation);
  } else {
    return (output.innerHTML = negativeCalculation);
  }
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
          Happy to see ya!
      </h1>
      <p>
          This a simple web application made with Javascript that will modify
          the webpage to display the calculation of two given inputs and a chosen 
          operator.
      </p>
      <p class="mt-4">
          Application: 3. Simple-Math
      </p>
  `;

  return (header.innerHTML = headerContent);
}

function setForm() {
  let formMarkup = `
    <div class="py-12">
        <!-- Input Section -->
        <div class="block">
            <h2 class="text-xl font-bold underline mb-2">Input Numbers:</h2>
            <span class="text-white dark:text-gray-700">Number 1:</span>
            <input
                type="number"
                name=""
                id="firstGivenInt"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
            />
            <span class="text-white dark:text-gray-700">Number 2:</span>4
            <input
                type="number"
                name=""
                id="secondGivenInt"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
            />
        </div>
        <!-- Buttons -->
        <div class="inline-block mt-4">
            <button
                type="button"
                onclick="multiplication();"
                class="inline-block mx-2 px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:shadow-lg hover:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out hover:ring-4 hover:ring-indigo-600"
            >
                Multiply
            </button>
            <button
                type="button"
                onclick="division();"
                class="inline-block mx-2 px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:shadow-lg hover:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out hover:ring-4 hover:ring-sky-600"
            >
                Divide
            </button>
            <button
                type="button"
                onclick="addition();"
                class="inline-block mx-2 px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:shadow-lg hover:bg-emerald-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out hover:ring-4 hover:ring-emerald-600"
            >
                Add
            </button>
            <button
                type="button"
                onclick="subtraction();"
                class="inline-block mx-2 px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:shadow-lg hover:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out hover:ring-4 hover:ring-rose-600"
            >
                Subtract
            </button>
        </div>
    </div>
    `;

  return (pageContent.innerHTML = formMarkup);
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
                          <p>Created 6/25/2022</p>
                      </div>
              </div>
          </div>
      </footer>
  `;

  return (footer.innerHTML = footerContent);
}

function initializePage() {
  setNav();
  setHeader();
  setForm();
  setFooter();
}

initializePage();

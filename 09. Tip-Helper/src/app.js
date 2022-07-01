const navbar = document.querySelector("#navbar");
const appHead = document.querySelector("#app-head");
const appContent = document.querySelector("#app-content");
const footer = document.querySelector("#footer");

let preTipAmount = Number(0.0);
let tipPercentage = Number(0);
let tipAmount = Number(0.0);
let total = Number(0.0);

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
            <h1>Pleased to meet you.</h1>
        </div>
        <h2 class="text-sm mt-8 underline">09. Tip-Helper:</h2>
        <p class="mt-2 md:mt-4">This small web app will help you with tipping. Simply fill out your dining bill total, click one of the buttons, and view the data that is generated on the page.</p>
    </div>
`;

const appBodyContent = `
<div
class="grid h-auto flex-grow card bg-base-300 rounded-box place-items-center"
>
    <div id="app-inputs" class="mb-4">
        <h2 class="underline mt-4 mb-4">Enter Data</h2>
        <label class="label">
            <span class="label-text">Pre-tip amount:</span>
        </label>
        <input
            id="bill-amount"
            type="text"
            placeholder="17.99"
            class="input input-bordered w-full max-w-xs"
        />
        <div class="grid flex-grow">
            <button
            id="btn-poor"
            class="btn dark:btn-outline btn-error btn-sm mt-4"
            >
            Poor Service (5%)
            </button>
            <button
            id="btn-mediocre"
            class="btn dark:btn-outline btn-warning btn-sm mt-4"
            >
            Mediocre Service (10%)
            </button>
            <button
            id="btn-expected"
            class="btn dark:btn-outline btn-info btn-sm mt-4"
            >
            Expected Service (15%)
            </button>
            <button
            id="btn-great"
            class="btn dark:btn-outline btn-success btn-sm mt-4"
            >
            Great Service (20%)
            </button>
        </div>
    </div>
</div>
<div class="divider divider-horizontal"></div>
<div
class="grid h-auto flex-grow card bg-base-300 rounded-box place-items-center"
>
    <div id="app-output" class="mb-4">
        <h1 class="underline">Dining Bill Breakdown</h1>
        <h3 class="mt-4">Pre-tip amount:</h3>
        <span id="pre-tip-amount">$${preTipAmount}</span>
        <h3 class="mt-4">Tip percentage:</h3>
        <span id="tip-amount">${tipPercentage}%</span>
        <h3 class="mt-4">Tip amount:</h3>
        <span id="tip-amount">$${tipAmount}</span>
        <h3 class="mt-4">Total:</h3>
        <span id="total">$${total}</span>
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
const billAmountEntry = document.querySelector("#bill-amount");
const btnPoor = document.querySelector("#btn-poor");
const btnMediocre = document.querySelector("#btn-mediocre");
const btnExpected = document.querySelector("#btn-expected");
const btnGreat = document.querySelector("#btn-great");

const appOutput = document.querySelector("#app-output");
const preTipAmountOutput = document.querySelector("#pre-tip-amount");
const tipAmountOutput = document.querySelector("#tip-amount");
const totalOuput = document.querySelector("#total");

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function displayDiningBill(preTipAmount, tipPercentage, tipAmount, total) {
  let diningBillBreakdown = `
    <h1 class="underline">Dining Bill Breakdown</h1>
    <h3 class="mt-4">Pre-tip amount:</h3>
    <span id="pre-tip-amount">$${preTipAmount}</span>
    <h3 class="mt-4">Tip percentage:</h3>
    <span id="tip-amount">${tipPercentage}%</span>
    <h3 class="mt-4">Tip amount:</h3>
    <span id="tip-amount">$${tipAmount}</span>
    <h3 class="mt-4">Total:</h3>
    <span id="total">$${total}</span>
    `;

  return (appOutput.innerHTML = diningBillBreakdown);
}

btnPoor.onclick = (event) => {
  event.preventDefault();

  preTipAmount = roundToTwo(Number(billAmountEntry.value.trim()));
  tipPercentage = 5;
  tipAmount = roundToTwo(Number(preTipAmount * 0.05));
  total = roundToTwo(Number(tipAmount + preTipAmount));

  displayDiningBill(preTipAmount, tipPercentage, tipAmount, total);
};

btnMediocre.onclick = (event) => {
  event.preventDefault();

  event.preventDefault();

  preTipAmount = roundToTwo(Number(billAmountEntry.value.trim()));
  tipPercentage = 10;
  tipAmount = roundToTwo(Number(preTipAmount * 0.1));
  total = roundToTwo(Number(tipAmount + preTipAmount));

  displayDiningBill(preTipAmount, tipPercentage, tipAmount, total);
};

btnExpected.onclick = (event) => {
  event.preventDefault();

  event.preventDefault();

  preTipAmount = roundToTwo(Number(billAmountEntry.value.trim()));
  tipPercentage = 15;
  tipAmount = roundToTwo(Number(preTipAmount * 0.15));
  total = roundToTwo(Number(tipAmount + preTipAmount));

  displayDiningBill(preTipAmount, tipPercentage, tipAmount, total);
};

btnGreat.onclick = (event) => {
  event.preventDefault();

  event.preventDefault();

  preTipAmount = roundToTwo(Number(billAmountEntry.value.trim()));
  tipPercentage = 20;
  tipAmount = roundToTwo(Number(preTipAmount * 0.2));
  total = roundToTwo(Number(tipAmount + preTipAmount));

  displayDiningBill(preTipAmount, tipPercentage, tipAmount, total);
};

// Debug
let logClicked = () => console.log("Clicked");

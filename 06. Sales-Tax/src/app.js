import states from "./data/stateTaxListing.json" assert { type: "json" };

const navbar = document.getElementById("navbar");
const appIntro = document.getElementById("app-intro");
const selection = document.getElementById("state-selection");
const footer = document.getElementById("footer");
const statesFile = states;

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

const appIntroduction = `
    <div class="mt-4 md:mt-8 px-2">
        <h1 class="hover:text-sky-400">Greetings!</h1>
        <h2 class="text-sm mt-10 underline">06. Sales-Tax:</h2>
        <p class="mt-2">A simple web app that allows the user to choose what State they live in (USA) and input a cost of an item they desire to purchase. The app will take the sales tax of their chosen state, perform a proper calculation, and output the data.</p>
    </div>

`;

const stateSelection = `
    <div class="form-control w-full max-w-xs" id="state-selection">
        <label class="label">
            <span class="label-text">Your state?</span>
        </label>
        <select id="us-states" class="select select-bordered">
            <option disabled selected>Pick one</option>
            <option value="0">Alabama</option>
            <option value="1">Alaska</option>
            <option value="2">Arizona</option>
            <option value="3">Arkansas</option>
            <option value="4">California</option>
            <option value="5">Colorado</option>
            <option value="6">Connecticut</option>
            <option value="7">Delaware</option>
            <option value="8">Florida</option>
            <option value="9">Georgia</option>
            <option value="10">Hawaii</option>
            <option value="11">Idaho</option>
            <option value="12">Illinois</option>
            <option value="13">Indiana</option>
            <option value="14">Iowa</option>
            <option value="15">Kansas</option>
            <option value="16">Kentucky</option>
            <option value="17">Louisiana</option>
            <option value="18">Maine</option>
            <option value="19">Maryland</option>
            <option value="20">Massachusetts</option>
            <option value="21">Michigan</option>
            <option value="22">Minnesota</option>
            <option value="23">Mississippi</option>
            <option value="24">Missouri</option>
            <option value="25">Montana</option>
            <option value="26">Nebraska</option>
            <option value="27">Nevada</option>
            <option value="28">New Hampshire</option>
            <option value="29">New Jersey</option>
            <option value="30">New Mexico</option>
            <option value="31">New York</option>
            <option value="32">North Carolina</option>
            <option value="33">North Dakota</option>
            <option value="34">Ohio</option>
            <option value="35">Oklahoma</option>
            <option value="36">Oregon</option>
            <option value="37">Pennsylvania</option>
            <option value="38">Rhode Island</option>
            <option value="39">South Carolina</option>
            <option value="40">South Dakota</option>
            <option value="41">Tennessee</option>
            <option value="42">Texas</option>
            <option value="43">Utah</option>
            <option value="44">Vermont</option>
            <option value="45">Virginia</option>
            <option value="46">Washington</option>
            <option value="47">West Virginia</option>
            <option value="48">Wisconsin</option>
            <option value="49">Wyoming</option>
        </select>
        <label class="label">
            <span class="label-text">Cost of the item?</span>
        </label>
        <input id="item-cost" type="text" placeholder="2.99" class="input input-bordered w-full max-w-xs" />
        <label class="label">
        <span class="label-text">Local Tax?</span>
    </label>
    <input id="local-tax" type="text" placeholder="6.5" class="input input-bordered w-full max-w-xs" />
        <button id="btn" class="btn btn-active bg-sky-400 text-white my-4">Submit</button>
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

// Initialization
let writeNavbar = () => (navbar.innerHTML = navbarContent);
let writeApp = () => {
  appIntro.innerHTML = appIntroduction;
  selection.innerHTML = stateSelection;
};
let writeFooter = () => (footer.innerHTML = footerContent);

let createApp = () => {
  writeNavbar();
  writeApp();
  writeFooter();
};

createApp();

// Functions
const btn = document.querySelector("#btn");
const sb = document.querySelector("#us-states");

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

btn.onclick = (e) => {
  const itemCostEntry = document.getElementById("item-cost");
  const localTaxRateEntry = document.getElementById("local-tax");
  const outputElement = document.getElementById("calculation-output");

  e.preventDefault();
  const selectedValues = [].filter
    .call(sb.options, (option) => option.selected)
    .map((option) => option.value);

  let stateNumber = Number(selectedValues);
  let itemCost = Number(itemCostEntry.value.trim());
  let stateTaxRate = statesFile.states[stateNumber].stateTaxRate;
  let localTaxRate = Number(localTaxRateEntry.value.trim()) / 100;
  let totalCost = itemCost * stateTaxRate + itemCost * localTaxRate + itemCost;
  let totalCostRounded = roundToTwo(totalCost);

  let calculationOutput = `
    <h1>Total Cost of Item: $${totalCostRounded}</h1>
  `;

  console.log("Tax Percentage: " + roundToTwo(stateTaxRate * 100) + "%");
  console.log("Item Cost: " + itemCost);
  console.log("Local Tax: " + localTaxRate);
  console.log("Total Cost: $" + totalCostRounded);

  return (outputElement.innerHTML = calculationOutput);
};

// Debug
let logClicked = () => console.log("Clicked");

import { createApp } from "./components/appMarkup.js";
import {
  employeeOneCard,
  employeeTwoCard,
  employeeThreeCard,
} from "./components/employee.js";

let empSlotOne = document.querySelector("#card-one");
let empSlotTwo = document.querySelector("#card-two");
let empSlotThree = document.querySelector("#card-three");

createApp();

let writeEmployeeCards = () => (
  (empSlotOne.innerHTML = employeeOneCard),
  (empSlotTwo.innerHTML = employeeTwoCard),
  (empSlotThree.innerHTML = employeeThreeCard)
);

writeEmployeeCards();

// Debug
let logClicked = () => console.log("Clicked");

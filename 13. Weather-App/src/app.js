import { headerMarkup } from "./components/header.js";
import { banner } from "./components/appdetails.js";
import { weatherMarkup } from "./components/weather.js";
import { footerMarkup } from "./components/footer.js";

const headerSection = document.querySelector("#header");
const appDetailSection = document.querySelector("#app-details");
const weather = document.querySelector("#weather");
const footer = document.querySelector("#footer");

let writeHeader = () => (headerSection.innerHTML = headerMarkup);
let writeAppDetails = () => (appDetailSection.innerHTML = banner);
let writeWeather = () => (weather.innerHTML = weatherMarkup);
let writeFooter = () => (footer.innerHTML = footerMarkup);

writeHeader();
writeAppDetails();
writeWeather();
writeFooter();

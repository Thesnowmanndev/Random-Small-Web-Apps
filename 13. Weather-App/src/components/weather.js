import { repositoryURL, browserNewTab } from "./links.js";

const requestURL =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=auto%3Aip";
// It is bad practice to hardcode your API keys / Passwords / DB accs in a JS file - Look into dotenv (people other than me)
const APIKEY = "PLACE WEATHERAPI.COM APIKEY HERE";
const HOST = "weatherapi-com.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": HOST,
  },
};

const response = await fetch(requestURL, options);
const weatherData = await response.json();
const { current, location } = weatherData;

let CityName = weatherData.location.name;
let CountryName = weatherData.location.country;
let TimeZone = weatherData.location.tz_id;
let LocalTime = weatherData.location.localtime;
let temp_f = weatherData.current.temp_f;
let wind_mph = weatherData.current.wind_mph;
let wind_dir = weatherData.current.wind_dir;
let humidity = weatherData.current.humidity;
let cloud = weatherData.current.cloud;
let feelslike_f = weatherData.current.feelslike_f;

if (cloud > 75) {
  cloud = "Mostly Cloudy";
} else if (cloud < 75 && cloud > 50) {
  cloud = "Cloudy";
} else if (cloud < 50 && cloud > 25) {
  cloud = "Somewhat Cloudy";
} else {
  cloud = "Clear Skies";
}

export const weatherMarkup = `
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Your <span class="text-sky-500">Weather</span> Situation</h2>

      <p class="mt-4 text-gray-300">
        This application pulls your IP address to update (fetch) weather data in your IP's local area. For this Small App I am not creating a way to change the location, keeping it simple. 
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-sky-500/10 hover:border-sky-500/10"
      >
        <i class="fa-solid fa-city text-sky-500 text-3xl"></i>

        <h3 class="mt-4 text-xl font-bold text-white">${CityName}</h3>

        <p class="mt-1 text-sm text-gray-300">
          ${CountryName}
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-sky-500/10 hover:border-sky-500/10"
      >
        <i class="fa-solid fa-clock text-sky-500 text-3xl"></i>

        <h3 class="mt-4 text-xl font-bold text-white">Time Zone</h3>

        <p class="mt-1 text-sm text-gray-300">
          ${TimeZone}
        </p>
        <p class="mt-1 text-sm text-gray-300">
          ${LocalTime}
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-sky-500/10 hover:border-sky-500/10"
      >
        <i class="fa-solid fa-temperature-half text-sky-500 text-3xl"></i>

        <h3 class="mt-4 text-xl font-bold text-white">Current Temp</h3>

        <p class="mt-1 text-sm text-gray-300">
          ${temp_f} degrees F
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-sky-500/10 hover:border-sky-500/10"
      >
        <i class="fa-solid fa-wind text-sky-500 text-3xl"></i>

        <h3 class="mt-4 text-xl font-bold text-white">Wind</h3>

        <p class="mt-1 text-sm text-gray-300">
            ${wind_mph} mph
        </p>
        <p class="mt-1 text-sm text-gray-300">
            Blowing towards ${wind_dir}
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-sky-500/10 hover:border-sky-500/10"
      >
        <i class="fa-solid fa-cloud text-sky-500 text-3xl"></i>

        <h3 class="mt-4 text-xl font-bold text-white">Misc Data</h3>

        <p class="mt-1 text-sm text-gray-300">
            Humidity is ${humidity}%
        </p>
        <p class="mt-1 text-sm text-gray-300">
            ${cloud}
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-sky-500/10 hover:border-sky-500/10"
      >
      <i class="fa-solid fa-temperature-high text-3xl text-sky-500"></i>

        <h3 class="mt-4 text-xl font-bold text-white">Feels Like</h3>

        <p class="mt-1 text-sm text-gray-300">
            ${feelslike_f} degrees F
        </p>
      </a>
    </div>

    <div class="mt-12 text-center">
      <a
        class="inline-flex items-center px-8 py-3 mt-8 text-white bg-sky-600 border border-sky-600 rounded hover:bg-transparent active:text-sky-500 focus:outline-none focus:ring"
        href="${repositoryURL}" target="${browserNewTab}"
      >
        <span class="text-sm font-medium"> See Code </span>

        <svg
          class="w-5 h-5 ml-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
`;

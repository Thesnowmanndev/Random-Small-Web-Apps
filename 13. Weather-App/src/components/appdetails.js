import { repositoryURL, weatherApiURL } from "./links.js";

export const banner = `
<section class="relative bg-white">
  <img
    class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
    src="/src/images/weather.jpg"
    alt="Sunset"
  />

  <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

  <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        This is my
        <strong class="font-extrabold text-sky-500 sm:block">
          Weather App.
        </strong>
      </h1>

      <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
      This <a class="hover:text-sky-500 hover:border-b hover:border-orange-500" href="${repositoryURL}" target="_blank">Small App</a> is my attempt to learn how to utilize the JavaScript Fetch commands with the <a class="hover:text-sky-500 hover:border-b hover:border-orange-500" href="${weatherApiURL}" target="_blank">RapidAPI: WeatherAPI</a>  in order to display information. This will simply utilize your ip address to fetch data from the WeatherAPI and populate components with the realative data. 
      </p>
    </div>
  </div>
</section>
`;

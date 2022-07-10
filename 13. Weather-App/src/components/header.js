import {
  repositoryURL,
  githubURL,
  linkedinURL,
  browserNewTab,
  indexPage,
} from "./links.js";

export const headerMarkup = `
<header class="bg-white md:dark:bg-gray-900 shadow-sm">
<div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
        <div class="md:flex md:items-center md:gap-12">
            <a href="${indexPage}" class="block text-sky-500">
                <span class="sr-only">Home</span>
                <ul class="flex items-center">
                    <li><i class="fa-solid fa-laptop-code text-4xl"></i></li>
                    <li class="ml-2"><p class="text-gray-500 md:dark:text-white text-xl">Weather | <span class="hover:border-b hover:border-orange-500 hover:text-sky-500">Small Apps</span></p></li>
                </ul>
                
                
            </a>
        </div>

        <div class="hidden md:block">
            <nav aria-labelledby="header-navigation">
                <h2 id="header-navigation" class="sr-only">Header Navigation</h2>
                <ul class="flex items-center gap-6 text-md">
                    <li>
                        <a href="${indexPage}" class="text-gray-500 dark:text-white transition hover:text-sky-500/75 hover:border-b hover:border-orange-500">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="${repositoryURL}" target="${browserNewTab}" class="text-gray-500 dark:text-white transition hover:text-sky-500/75 hover:border-b hover:border-orange-500">
                            Project
                        </a>
                    </li>
                    <li>
                        <a href="${githubURL}" target="${browserNewTab}" class="text-gray-500 dark:text-white transition hover:text-sky-500/75 hover:border-b hover:border-orange-500">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="${linkedinURL}" target="${browserNewTab}" class="text-gray-500 dark:text-white transition hover:text-sky-500/75 hover:border-b hover:border-orange-500">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="flex items-center gap-4">
            <div class="sm:gap-4 sm:flex">
                <a onclick="window.location.reload();" class="px-5 py-2 5 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-md shadow-xl">Refresh</a>
            </div>
        </div>

        <div class="block md:hidden">
            <button
              class="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
    </div>
</div>
</header>
`;

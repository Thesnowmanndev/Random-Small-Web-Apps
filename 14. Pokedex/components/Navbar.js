import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../public/favicon.ico";
import { repositoryURL, browserNewTab } from "./devLinks";

export default function Navbar() {
  return (
    <nav className="flex items-center bg-white">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <Link href="/">
              <a className="flex-shrink-0 invisible lg:visible">
                <Image width={32} height={32} src={Logo} alt="Small Apps" />
              </a>
            </Link>

            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <Link href="/">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Home
                  </a>
                </Link>

                <Link href="/kanto">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Kanto
                  </a>
                </Link>

                <Link href="/johto">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Johto
                  </a>
                </Link>

                <Link href="/hoenn">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Hoenn
                  </a>
                </Link>
                <Link href="/sinnoh">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Sinnoh
                  </a>
                </Link>
                <Link href="/unova">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Unova
                  </a>
                </Link>
                <Link href="/kalos">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Kalos
                  </a>
                </Link>
                <Link href="/alola">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Alola
                  </a>
                </Link>
                <Link href="/galar">
                  <a className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-orange-600">
                    Galar
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex items-center ml-4 md:ml-6"></div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <a className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md hover:text-orange-500">
              Home
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

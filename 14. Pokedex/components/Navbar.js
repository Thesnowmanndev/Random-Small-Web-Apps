import React from "react";
import Link from "next/link";
import { repositoryURL, browserNewTab } from "./devLinks";

export default function Navbar() {
  return (
    <div className="container pb-10 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li tabIndex="0">
                <a className="justify-between">
                  Pokedex&apos;s
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li className="bg-base-100">
                    <Link href="/kanto">
                      <a>Kanto Dex</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="text-xl normal-case btn btn-ghost">
              <span className="pr-2 text-sky-500">Small Apps</span> |
              <span className="pl-2 text-orange-500">Pokedex</span>
            </a>
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 menu menu-horizontal">
            <li>
              <Link href="/kanto">
                <a className="text-lg hover:bg-sky-500 hover:text-white hover:text-semibold">
                  Kanto
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="invisible navbar-end md:visible">
          <Link href={repositoryURL}>
            <a className="btn" target={browserNewTab}>
              See Code Repo
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

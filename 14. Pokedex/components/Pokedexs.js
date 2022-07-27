import Link from "next/link";
import Image from "next/image";

// Pokedexs
import kanto from "../public/images/kanto.png";
import johto from "../public/images/johto.png";
import hoenn from "../public/images/hoenn.png";
import sinnoh from "../public/images/sinnoh.png";
import unova from "../public/images/unova.png";
import kalos from "../public/images/kalos.png";
import alola from "../public/images/alola.png";
import galar from "../public/images/galar.png";

// Starters
import missingStarter from "../public/images/missing-starter.png";

import bulbasaur from "../public/images/kanto/001.png";
import charmander from "../public/images/kanto/004.png";
import squirtle from "../public/images/kanto/007.png";

import chikorita from "../public/images/johto/152.png";
import cyndaquil from "../public/images/johto/155.png";
import totodile from "../public/images/johto/158.png";

import treeko from "../public/images/hoenn/252.png";
import torchic from "../public/images/hoenn/255.png";
import mudkip from "../public/images/hoenn/258.png";

import turtwig from "../public/images/sinnoh/387.png";
import chimchar from "../public/images/sinnoh/390.png";
import piplup from "../public/images/sinnoh/393.png";

import snivy from "../public/images/unova/495.png";
import tepig from "../public/images/unova/498.png";
import oshawott from "../public/images/unova/501.png";

import chespin from "../public/images/kalos/650.png";
import fennekin from "../public/images/kalos/653.png";
import froakie from "../public/images/kalos/656.png";

import grookey from "../public/images/galar/810.png";
import scorbunny from "../public/images/galar/813.png";
import sobble from "../public/images/galar/816.png";

import rowlet from "../public/images/alola/722.png";
import litten from "../public/images/alola/725.png";
import poppilo from "../public/images/alola/728.png";

export default function Pokedexs() {
  return (
    <main className="py-20">
      <div className="w-full bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg">
        <div className="flex items-end justify-between mb-12 bg-white border-b-2 rounded-t-lg header">
          <div className="px-5 pt-10 title">
            <p className="text-4xl text-gray-600 primary-font">Pokedexs</p>
            <p className="mb-5 text-xl font-light text-gray-500">
              Each pokedex display their region&apos;s native Pokemon and their
              respective details.
            </p>
          </div>
          <div className="px-10 py-5 text-end">
            <Link href="">
              <a target="_blank">
                <button className="flex-shrink-0 invisible px-4 py-2 text-white rounded-lg shadow-xl font-inset bg-sky-500 hover:bg-sky-700 lg:visible">
                  Submit Issues
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {/* Kanto */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-xl cursor-pointer h-90 w-60 md:w-80">
            <Link href="/kanto">
              <div className="block w-full h-full">
                <Image
                  src={kanto}
                  alt="Kanto Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Kanto region is a region of the Pokemon World. Kanto is
                    the setting of the first generation of games and can be
                    played in generations two, three, four, and seven.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=1">
                      <a className="relative block px-2">
                        <Image
                          alt="bulbasaur"
                          src={bulbasaur}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=4">
                      <a className="relative block px-2">
                        <Image
                          alt="charmander"
                          src={charmander}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=7">
                      <a className="relative block px-2">
                        <Image
                          alt="squirtle"
                          src={squirtle}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Johto */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/johto">
              <div className="block w-full h-full">
                <Image
                  src={johto}
                  alt="Johto Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=152">
                      <a className="relative block px-2">
                        <Image
                          alt="chikorita"
                          src={chikorita}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=155">
                      <a className="relative block px-2">
                        <Image
                          alt="cyndaquil"
                          src={cyndaquil}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=158">
                      <a className="relative block px-2">
                        <Image
                          alt="totodile"
                          src={totodile}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* hoenn */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/hoenn">
              <div className="block w-full h-full">
                <Image
                  src={hoenn}
                  alt="Hoenn Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=252">
                      <a className="relative block px-2">
                        <Image
                          alt="treeko"
                          src={treeko}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=255">
                      <a className="relative block px-2">
                        <Image
                          alt="torchic"
                          src={torchic}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=258">
                      <a className="relative block px-2">
                        <Image
                          alt="mudkip"
                          src={mudkip}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Sinnoh */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/sinnoh">
              <div className="block w-full h-full">
                <Image
                  src={sinnoh}
                  alt="Sinnoh Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=387">
                      <a className="relative block px-2">
                        <Image
                          alt="turtwig"
                          src={turtwig}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=390">
                      <a className="relative block px-2">
                        <Image
                          alt="chimchar"
                          src={chimchar}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=393">
                      <a className="relative block px-2">
                        <Image
                          alt="piplup"
                          src={piplup}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Unova */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/unova">
              <div className="block w-full h-full">
                <Image
                  src={unova}
                  alt="Unova Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=495">
                      <a className="relative block px-2">
                        <Image
                          alt="snivy"
                          src={snivy}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=498">
                      <a className="relative block px-2">
                        <Image
                          alt="tepig"
                          src={tepig}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=501">
                      <a className="relative block px-2">
                        <Image
                          alt="oshawott"
                          src={oshawott}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Kalos */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/kalos">
              <div className="block w-full h-full">
                <Image
                  src={kalos}
                  alt="Kalos Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=650">
                      <a className="relative block px-2">
                        <Image
                          alt="chespin"
                          src={chespin}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=653">
                      <a className="relative block px-2">
                        <Image
                          alt="fennekin"
                          src={fennekin}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=656">
                      <a className="relative block px-2">
                        <Image
                          alt="froakie"
                          src={froakie}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Alola */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/alola">
              <div className="block w-full h-full">
                <Image
                  src={alola}
                  alt="Alola Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=722">
                      <a className="relative block px-2">
                        <Image
                          alt="rowlet"
                          src={rowlet}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=725">
                      <a className="relative block px-2">
                        <Image
                          alt="litten"
                          src={litten}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=728">
                      <a className="relative block px-2">
                        <Image
                          alt="poppilo"
                          src={poppilo}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Galar */}
          <div className="m-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="/galar">
              <div className="block w-full h-full">
                <Image
                  src={galar}
                  alt="Galar Region"
                  className="object-cover w-full max-h-40"
                ></Image>
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-sky-500 text-md">Pokedex</p>
                  <p className="font-light text-gray-400 text-md">
                    The Johto region is a region of the Pokemon World. Johto is
                    the setting of the second generation of games and can be
                    played in generations two and four of the core series.
                  </p>
                  <div className="flex items-center mt-4">
                    <Link href="/pokemon?id=810">
                      <a className="relative block px-2">
                        <Image
                          alt="grookey"
                          src={grookey}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=813">
                      <a className="relative block px-2">
                        <Image
                          alt="scorbunny"
                          src={scorbunny}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                    <Link href="/pokemon?id=816">
                      <a className="relative block px-2">
                        <Image
                          alt="sobble"
                          src={sobble}
                          width={40}
                          height={40}
                          className="object-cover mx-auto rounded-full"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-10 font-light text-gray-500 text-light text-md">
          <p className="p-5">
            Pokedex badge images by{" "}
            <Link href="https://ko-fi.com/album/Pokemon-Art-Z8Z051HNG">
              <a target="_blank" className="border-b border-sky-500">
                Quassihollic
              </a>
            </Link>{" "}
            on Ko-fi
          </p>
        </div>
      </div>
    </main>
  );
}

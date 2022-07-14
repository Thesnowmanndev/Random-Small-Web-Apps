import Layout from "../components/Layout.js";
import Link from "next/Link";

export default function Home({ pokemon, paddedIndex }) {
  return (
    <Layout title="Pokedex | Generations">
      <div className="flex justify-center">
        <h1 className="mb-8 text-4xl uppercase">
          <span className="border-b-2 border-sky-500 hover:text-orange-500">
            Choose a Generation
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <ul>
          <li>
            <Link href={`/kanto`}>
              <a>
                <div className="max-w-xl mx-2 my-4 border border-gray-800 shadow-xl card card-side">
                  <figure className="px-2">
                    {/* TODO: Learn next/image */}
                    <img
                      src="https://static.wikia.nocookie.net/pokemon/images/8/85/Kanto_Let%27s_Go%2C_Pikachu%21_and_Let%27s_Go%2C_Eevee%21.png"
                      alt="Kanto Region"
                      className="border-2 border-white rounded-lg w-80"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="md:border-b-2 md:border-gray-800 card-title">
                      Kanto Region
                    </h2>
                    <p className="hidden md:block">
                      The Kanto region is a region of the Pokemon World. Kanto
                      is the setting of the first generation of games and can be
                      played in generations two, three, four, and seven. Kanto
                      is located east of Johto, which together form a joint
                      landmass that is south of Sinnoh.
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          {/* TODO: Add All Generations */}
        </ul>
      </div>
    </Layout>
  );
}

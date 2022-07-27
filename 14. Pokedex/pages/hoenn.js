import Layout from "../components/Layout.js";
import Link from "next/link";
import Image from "next/image";
import HomeButton from "../components/buttons/homeButton.js";

const description =
  "A responsive web app containing images and details regarding Pokemon found in the Hoenn Region";

export default function hoenn({ pokemon }) {
  return (
    <Layout title="Hoenn Pokedex" description={description}>
      <main className="py-20">
        <div className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-lg">
          <div className="flex items-end justify-between mb-12 bg-white border-b-2 rounded-t-lg header">
            <div className="px-5 pt-10 title">
              <p className="text-4xl text-gray-600 primary-font">
                Hoenn Region Pokemon
              </p>
              <p className="pt-5 mb-5 text-xl font-light text-gray-500">
                The Pokemon listed below are the Pokemon originally developed
                for the Ruby, Sapphire, and Emerald games on the Gameboy Advance
                and the Omega Ruby and Alpha Sapphire games on the Nintendo 3DS.
              </p>
            </div>
            <div className="px-20 py-5 text-end">
              <Link href="">
                <a target="_blank">
                  <button className="flex-shrink-0 invisible px-4 py-2 text-white rounded-lg shadow-xl font-inset bg-sky-500 hover:bg-sky-700 lg:visible primary-font">
                    Submit Issues
                  </button>
                </a>
              </Link>
            </div>
          </div>
          {/* Pokemon */}
          <div className="flex justify-center px-10">
            <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
              {pokemon.map((eachPokemon, index) => (
                <li key={index} className="mx-1">
                  <Link href={`/pokemon?id=${index + 252}`}>
                    <a>
                      <div className="my-4 bg-gray-300 rounded-md shadow-xl w-96 card card-side">
                        <figure className="flex justify-center border-b-2 border-gray-500 shadow-xl">
                          <Image
                            src={`${eachPokemon.image}`}
                            alt={eachPokemon.name}
                            width={300}
                            height={300}
                          />
                        </figure>
                        <div className="bg-white card-body">
                          <h1 className="px-5 text-xl text-gray-500">
                            #{index + 252}
                          </h1>
                          <h2 className="px-5 py-5 text-2xl tracking-tight text-gray-800 capitalize card-title primary-font">
                            {eachPokemon.name}
                          </h2>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <HomeButton />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
    );
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 252)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...result,
        image,
      };
    });

    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error("Alert: " + err);
  }
}

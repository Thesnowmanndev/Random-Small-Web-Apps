import Layout from "../components/Layout.js";
import Link from "next/Link";

export default function Home({ pokemon }) {
  return (
    <Layout title="Kanto Pokedex">
      <div className="flex justify-center hover:cursor-none">
        <h1 className="mb-8 text-4xl uppercase">
          <span className="border-b-2 border-sky-500 hover:text-orange-500 hover:cursor-none">
            Kanto Region | Pokedex
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {pokemon.map((eachPokemon, index) => (
            <li key={index} className="mx-1">
              <Link href={`/pokemon?id=${index + 1}`}>
                <a>
                  <div className="my-4 shadow-xl w-96 card card-side bg-base-100">
                    <figure>
                      <img src={eachPokemon.image} alt={eachPokemon.name}></img>
                    </figure>
                    <div className="card-body">
                      <h2 className="capitalize card-title">
                        <span>{index + 1}.</span> {eachPokemon.name}
                      </h2>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
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

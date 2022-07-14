import React from "react";
import Layout from "../components/Details";

export default function pokemon({ pokemon }) {
  return (
    <div className="container mx-auto">
      <Layout title={pokemon.name}>
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row">
            <img
              src={pokemon.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold capitalize">{pokemon.name}</h1>
              <ul className="pt-2">
                <li>
                  <span>ID # </span>
                  {pokemon.id}
                </li>
                <li>
                  <span>Height: </span>
                  {pokemon.height} m
                </li>
                <li>
                  <span>Weight: </span>
                  {pokemon.weight} kg
                </li>
              </ul>
              <h2 className="mt-4 text-2xl">Types:</h2>
              <ul>
                {pokemon.types.map((type, index) => (
                  <li key={index} className="capitalize">
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    pokemon.image = image;

    return {
      props: {
        pokemon,
      },
    };
  } catch (err) {
    console.error("Alert: " + err);
  }
}

// TODO: Create Cases for Type Badges

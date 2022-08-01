import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

import BugBadge from "../components/buttons/bugBadge";
import DragonBadge from "../components/buttons/dragonBadge";
import ElectricBadge from "../components/buttons/electricBadge";
import FairyBadge from "../components/buttons/fairyBadge";
import FightingBadge from "../components/buttons/fightingBadge";
import FireBadge from "../components/buttons/fireBadge";
import FlyingBadge from "../components/buttons/flyingBadge";
import GhostBadge from "../components/buttons/ghostBadge";
import GrassBadge from "../components/buttons/grassBadge";
import GroundBadge from "../components/buttons/groundBadge";
import Icebadge from "../components/buttons/icebadge";
import NormalBadge from "../components/buttons/normalBadge";
import PoisonBadge from "../components/buttons/poisonBadge";
import PsychicBadge from "../components/buttons/psychicBadge";
import RockBadge from "../components/buttons/rockBadge";
import SteelBadge from "../components/buttons/steelBadge";
import WaterBadge from "../components/buttons/waterBadge";

export default function pokemon({ pokemon }) {
  let typeNames = [];
  pokemon.types.map((type) => typeNames.push(type.type.name));
  let badgeNameOne = typeNames[0];
  let badgeNameTwo = typeNames[1];

  const setBadgeOne = (badgeOne) => {
    if (badgeOne == "bug") {
      return <BugBadge />;
    }
    if (badgeOne == "dragon") {
      return <DragonBadge />;
    }
    if (badgeOne == "electric") {
      return <ElectricBadge />;
    }
    if (badgeOne == "fairy") {
      return <FairyBadge />;
    }
    if (badgeOne == "fighting") {
      return <FightingBadge />;
    }
    if (badgeOne == "fire") {
      return <FireBadge />;
    }
    if (badgeOne == "flying") {
      return <FlyingBadge />;
    }
    if (badgeOne == "ghost") {
      return <GhostBadge />;
    }
    if (badgeOne == "grass") {
      return <GrassBadge />;
    }
    if (badgeOne == "ground") {
      return <GroundBadge />;
    }
    if (badgeOne == "ice") {
      return <Icebadge />;
    }
    if (badgeOne == "normal") {
      return <NormalBadge />;
    }
    if (badgeOne == "poison") {
      return <PoisonBadge />;
    }
    if (badgeOne == "psychic") {
      return <PsychicBadge />;
    }
    if (badgeOne == "rock") {
      return <RockBadge />;
    }
    if (badgeOne == "steel") {
      return <SteelBadge />;
    }
    if (badgeOne == "water") {
      return <WaterBadge />;
    }
  };

  const setBadgeTwo = (badgeTwo) => {
    if (badgeTwo == "bug") {
      return <BugBadge />;
    }
    if (badgeTwo == "dragon") {
      return <DragonBadge />;
    }
    if (badgeTwo == "electric") {
      return <ElectricBadge />;
    }
    if (badgeTwo == "fairy") {
      return <FairyBadge />;
    }
    if (badgeTwo == "fighting") {
      return <FightingBadge />;
    }
    if (badgeTwo == "fire") {
      return <FireBadge />;
    }
    if (badgeTwo == "flying") {
      return <FlyingBadge />;
    }
    if (badgeTwo == "ghost") {
      return <GhostBadge />;
    }
    if (badgeTwo == "grass") {
      return <GrassBadge />;
    }
    if (badgeTwo == "ground") {
      return <GroundBadge />;
    }
    if (badgeTwo == "ice") {
      return <Icebadge />;
    }
    if (badgeTwo == "normal") {
      return <NormalBadge />;
    }
    if (badgeTwo == "poison") {
      return <PoisonBadge />;
    }
    if (badgeTwo == "psychic") {
      return <PsychicBadge />;
    }
    if (badgeTwo == "rock") {
      return <RockBadge />;
    }
    if (badgeTwo == "steel") {
      return <SteelBadge />;
    }
    if (badgeTwo == "water") {
      return <WaterBadge />;
    }
  };

  let badgeOne = setBadgeOne(badgeNameOne);
  let badgeTwo = setBadgeTwo(badgeNameTwo);

  return (
    <div className="container mx-auto">
      <Layout title={pokemon.name} description={pokemon.name}>
        <main className="py-20">
          <div className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-lg">
            <div className="flex items-end justify-between mb-12 bg-white border-b-2 rounded-t-lg header">
              <div className="px-5 pt-10 title">
                <p className="text-4xl text-gray-600 capitalize primary-font">
                  {pokemon.name}
                </p>
                <p className="pt-5 mb-5 text-xl font-light text-gray-500">
                  {pokemon.name}
                </p>
              </div>
              <div className="px-20 py-5 text-end">
                <Link href="/kanto">
                  <a>
                    <button className="flex-shrink-0 invisible px-4 py-2 text-white rounded-lg shadow-xl font-inset bg-sky-500 hover:bg-sky-700 lg:visible primary-font">
                      Back
                    </button>
                  </a>
                </Link>
                <Link href="">
                  <a target="_blank">
                    <button className="flex-shrink-0 invisible px-4 py-2 mx-5 text-white rounded-lg shadow-xl font-inset bg-sky-500 hover:bg-sky-700 lg:visible primary-font">
                      Submit Issues
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            {/* Pokemon Data */}
            <section className="flex justify-center px-10">
              <div>
                <Image
                  src={pokemon.image}
                  width={300}
                  height={300}
                  alt={pokemon.name}
                />
              </div>
              <div className="px-10">
                <p className="text-xl text-gray-800 border-b-2 primary-font">
                  Types:
                </p>
                <ul>
                  <li>{badgeOne}</li>
                  <li>{badgeTwo}</li>
                </ul>
              </div>
            </section>
          </div>
        </main>
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

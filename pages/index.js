import Image from "next/image";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1>
          Poke<span>next</span>
        </h1>{" "}
        <Image
          src="/images/pokebola.png"
          height={50}
          width={50}
          alt="Pokenext"
        />
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const maxItems = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const response = await fetch(`${api}/?limit=${maxItems}`);
  const data = await response.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

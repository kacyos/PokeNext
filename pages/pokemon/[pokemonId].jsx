import Image from "next/image";

import styles from "../../styles/Pokemon.module.scss";
export default function PokemonId({ pokemon }) {
  return (
    <div className={styles.pokemon_container}>
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width={250}
        height={250}
        alt={pokemon.name}
      />

      <div>
        <h3>Número:</h3>
        <p># {pokemon.id}</p>
      </div>

      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.data_container}>
        <div>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>

        <div>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const maxItems = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const response = await fetch(`${api}/?limit=${maxItems}`);
  const data = await response.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

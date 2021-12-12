import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import IPokemonSpecie from '@types/IPokemonSpecie';

interface IPokemonPageProps {
  pokemonSpecie: IPokemonSpecie;
}

const PokemonPage: NextPage<IPokemonPageProps> = ({ pokemonSpecie }) => (
  <>
    <Image
      src={`/images/pokemon/full/${pokemonSpecie.name}.png`}
      alt={pokemonSpecie.name}
      width={475}
      height={475}
    />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon-species?limit=1000';
  const response: Response = await fetch(url);
  const { results: pokemonSpecies } = await response.json();

  return {
    paths: pokemonSpecies.map(
      ({ name }: IPokemonSpecie) => `/pokemon/${name}/`
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${params.name}`;
  const response = await fetch(url);

  const pokemonSpecie: IPokemonSpecie = await response.json();
  return { props: { pokemonSpecie } };
};

export default PokemonPage;

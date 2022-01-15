import Image from 'next/image';
import logoPokemon from '@img/static/pokemon_logo.png';

export default function Header() {
  return (
    <header>
      <Image src={logoPokemon} />
    </header>
  );
}

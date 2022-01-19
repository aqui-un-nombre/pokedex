import Image from 'next/image';
import logoPokemon from '@img/static/pokemon_logo.png';
import { Button } from '../style/components/ButtonCSS';

export default function Header() {
  return (
    <header>
      <Image src={logoPokemon} />
    </header>
  );
}

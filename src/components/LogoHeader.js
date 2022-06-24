import Image from 'next/image';
import logoPokemon from '@img/static/pokemon_logo.png';
import Link from 'next/link';
import styled from 'styled-components';

const LinkHeader = styled.a`
  width: 200px;
  display: block;
`;

export default function LogoHeader() {
  return (
    <Link href="/" passHref>
      <LinkHeader>
        <Image alt="Logo Pokedex" src={logoPokemon} layout="responsive" />
      </LinkHeader>
    </Link>
  );
}

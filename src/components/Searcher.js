import { DisplayBlock } from '../style/components/DisplayCSS';
import styled from 'styled-components';
import { Colors } from '../style/base/Colors';
import pokeball from '@img/static/pokeball.svg';
import Image from 'next/image';

const InputPokemon = styled.input`
  width: 100%;
  padding: 14px 12px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: ${Colors.gray};
  }
`;

const IconPokeBall = styled(Image)`
  filter: grayscale(1);
  opacity: 0.3;
`;

export default function Searcher() {
  return (
    <>
      <DisplayBlock className="mt-3">
        <form>
          <InputPokemon type="text" placeholder="Escribe el nombre del Pokémon"></InputPokemon>
          <IconPokeBall src={pokeball} alt="Pokeball" width="25" height="25"></IconPokeBall>
        </form>
      </DisplayBlock>
    </>
  );
}

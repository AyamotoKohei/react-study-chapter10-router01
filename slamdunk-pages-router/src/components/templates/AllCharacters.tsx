import { VFC } from 'react';
import { Helmet } from 'react-helmet';

import CharactersList from 'components/organisms/CharacterList';
import { Character } from 'data/characters';

type Props = {
  characters: Character[];
  isLoading?: boolean;
};

const AllCharacters: VFC<Props> = ({ characters, isLoading = false }) => (
  <>
    <Helmet>
      <title>登場人物</title>
    </Helmet>
    <CharactersList characters={characters} isLoading={isLoading} />
  </>
);

export default AllCharacters;

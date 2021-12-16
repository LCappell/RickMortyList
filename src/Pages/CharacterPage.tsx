import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterCard from '../components/CharacterPage/CharacterCard/CharacterCard';
import CharacterHeader from '../components/CharacterPage/CharacterHeader/CharacterHeader';
import { Character } from '../Types/Character';

const CharacterPage: FC = () => {
  const location = useLocation();
  const characterInfo: Character = location.state;
  return (
    <div>
      <CharacterHeader />
      <CharacterCard characterInfo={characterInfo} />
    </div>
  );
};

export default CharacterPage;

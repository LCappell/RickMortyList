import React from 'react';
import { useLocation } from 'react-router-dom';
import CharacterCard from '../components/CharacterPage/CharacterCard';

const CharacterPage = () => {
  const location = useLocation();
  const characterInfo = location.state;
  return (
    <div>
      <CharacterCard characterInfo={characterInfo} />
    </div>
  );
};

export default CharacterPage;

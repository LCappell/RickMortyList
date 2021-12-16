import React, { FC } from 'react';
import { Character } from '../../Types/Character';

type Props = {
  characterInfo: Character;
};

const CharacterCard: FC<Props> = ({ characterInfo }) => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1>{characterInfo.name}</h1>
          <img
            id='card-img'
            alt='character profile'
            src={characterInfo.image}
          />
        </div>
        <div className='character-info'>
          <p>Status: {characterInfo.status}</p>
          <p>Species: {characterInfo.species}</p>
          <p>Gender: {characterInfo.gender}</p>
          <p>Origin: {characterInfo.origin.name}</p>
          <p>Last Location : {characterInfo.location.name}</p>
          <p>Appearances: {characterInfo.episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

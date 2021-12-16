import React, { FC } from 'react';
import '../styles/CharacterItem.css';
import { Character } from '../Types/Character';

type Props = {
  item: Character;
};

const CharacterItem: FC<Props> = ({ item }) => {
  return (
    <div className='character-container'>
      <h1 className='character-name'>{item.name}</h1>

      <div className='img-area'>
        <img src={item.image} id='character-img' alt='character profile' />
      </div>
    </div>
  );
};

export default CharacterItem;

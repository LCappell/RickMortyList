import React, { FC, useEffect, useState } from 'react';
import './CharacterList.css';
import { fetchData } from '../../../Service/ApiService';
import CharacterItem from '../CharacterItem/CharacterItem';
import ButtonBar from '../ButtonBar/ButtonBar';
import { Character } from '../../../Types/Character';
import { useParams } from 'react-router-dom';

type paramTypes = {
  id: string;
};

const CharacterList: FC = () => {
  // Use url ID to navigate and remain on page after return
  let { id = 1 } = useParams<paramTypes>();

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchData(`character?page=${id}`).then((res) => {
      setCharacters(res.results);
    });
  }, [id]);

  return (
    <div className='container'>
      <div className='header-area'>
        <h1 id='character-list-header'>The Cast of Rick and Morty </h1>
      </div>
      <div className='character-list-area'>
        {characters.map((item: Character) => (
          <CharacterItem key={item.id} item={item} />
        ))}
      </div>

      <ButtonBar id={id} />
    </div>
  );
};

export default CharacterList;

import React, { FC, useEffect, useState } from 'react';
import '../../styles/ListPage/CharacterList.css';
import { fetchData } from '../../Service/ApiService';
import CharacterItem from './CharacterItem';
import ButtonBar from './ButtonBar';
import { Character } from '../../Types/Character';

const CharacterList: FC = () => {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    fetchData(`character?page=${pageCount}`).then((res) => {
      setCharacters(res.results);
    });
  }, [pageCount]);

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
      <ButtonBar setPageCount={setPageCount} pageCount={pageCount} />
    </div>
  );
};

export default CharacterList;

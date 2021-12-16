import React, { FC } from 'react';
import Header from '../components/ListPage/Header/Header';
import CharacterList from '../components/ListPage/CharacterList/CharacterList';

const ListPage: FC = () => {
  return (
    <div className='main-container'>
      <Header />
      <CharacterList />
    </div>
  );
};

export default ListPage;

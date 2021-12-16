import React, { FC } from 'react';
import Header from '../components/ListPage/Header';
import CharacterList from '../components/ListPage/CharacterList';

const ListPage: FC = () => {
  return (
    <div className='main-container'>
      <Header />
      <CharacterList />
    </div>
  );
};

export default ListPage;

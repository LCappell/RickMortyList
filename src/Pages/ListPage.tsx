import React from 'react';
import Header from '../components/Header';
import CharacterList from '../components/CharacterList';

const ListPage = () => {
  return (
    <div className='main-container'>
      <Header />
      <CharacterList />
    </div>
  );
};

export default ListPage;

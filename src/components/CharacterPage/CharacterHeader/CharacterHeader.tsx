import React, { FC } from 'react';
import './CharacterHeader.css';

import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CharacterHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <div className='character-header-area'>
      <BsArrowLeft
        id='return-arrow'
        size={'3em'}
        onClick={() => navigate(-1)}
      />

      <h1 className='header-title'>Character Information</h1>
    </div>
  );
};

export default CharacterHeader;

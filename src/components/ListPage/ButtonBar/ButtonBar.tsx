import React, { FC } from 'react';
import './ButtonBar.css';
import RickPicture from '../../../assets/rickmortybg.jpeg';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string | number;
};

const ButtonBar: FC<Props> = ({ id }) => {
  // Change url id from type string into number
  id = +id;
  const navigate = useNavigate();

  const increasePageCount = () => {
    if (id >= 0 && id < 42 && typeof id == 'number') {
      id++;
      navigate('/' + id);
    }
  };

  const decreasePageCount = () => {
    if (id > 1 && typeof id == 'number') {
      id--;
      navigate('/' + id);
    }
  };

  return (
    <div className='button-area'>
      <button className='btn' type='button' onClick={decreasePageCount}>
        Previous
      </button>

      <button className='btn' type='button' onClick={increasePageCount}>
        Next
      </button>

      <img src={RickPicture} id='rick-picture' alt='rick and morty portal' />
    </div>
  );
};

export default ButtonBar;

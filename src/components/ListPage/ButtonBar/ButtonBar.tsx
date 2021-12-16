import React, { FC } from 'react';
import './ButtonBar.css';
import RickPicture from '../../../assets/rickmortybg.jpeg';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
};

const ButtonBar: FC<Props> = ({ id }) => {
  const navigate = useNavigate();

  const increasePageCount = () => {
    if (id >= 0 && id < 42) {
      id++;
      navigate('/' + id);
    }
  };

  const decreasePageCount = () => {
    if (id > 1) {
      id--;
      navigate('/' + id);
    }
  };

  return (
    <div className='button-area'>
      <button className='btn' type='button' onClick={decreasePageCount}>
        Previous
      </button>

      <button
        className='btn'
        type='button'
        onClick={() => {
          increasePageCount();
        }}
      >
        Next
      </button>

      <img src={RickPicture} id='rick-picture' alt='rick and morty portal' />
    </div>
  );
};

export default ButtonBar;

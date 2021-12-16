import React, { FC } from 'react';
import '../../styles/ButtonBar.css';
import RickPicture from '../../assets/rickmortybg.jpeg';

type Props = {
  pageCount: number;
  setPageCount: (pageCount: number) => void;
};

const ButtonBar: FC<Props> = ({ pageCount, setPageCount }) => {
  const increasePageCount = () => {
    pageCount > 0 && setPageCount(pageCount + 1);
  };

  const decreasePageCount = () => {
    pageCount > 1 && setPageCount(pageCount - 1);
  };

  console.log(pageCount);
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

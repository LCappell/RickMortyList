import React, { FC } from 'react';
import './Header.css';
import Logo from '../../../assets/ricklogo.png';
import Rick from '../../../assets/rickface.png';
import Morty from '../../../assets/morty.png';

const Header: FC = () => {
  return (
    <div className='navBar'>
      <img className='character-img' src={Rick} alt='rick character' />
      <img id='logo-img' src={Logo} alt='rick and morty logo' />
      <img className='character-img' src={Morty} alt='morty character' />
    </div>
  );
};

export default Header;

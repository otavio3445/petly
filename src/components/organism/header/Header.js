import React from 'react';
import './Header.scss';
import { IoHomeSharp } from 'react-icons/io5';

function Header() {
  return (
    <div className='header'>
      Petly
    <IoHomeSharp size={'30px'} className="homeIcon"/>
    </div>
  )
}

export default Header
import React from 'react';
import './Header.scss';
import { IoHomeSharp } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

function Header() {
  const history = useNavigate();

  return (
    <div className='header'>
      Petly
      <IoHomeSharp size={'30px'} className="homeIcon" onClick={() => history("/")} />
    </div>
  )
}

export default Header
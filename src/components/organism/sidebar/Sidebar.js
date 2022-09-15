import React, { useState } from 'react';
import './Sidebar.scss';
import {
  GiContract,
  GiExpand
} from 'react-icons/gi';
import {
  FaRegUserCircle,
  FaDog,
  FaRegClock
} from 'react-icons/fa';
import {
  RiShoppingBag3Fill
} from 'react-icons/ri';
import {
  MdArrowForwardIos
} from 'react-icons/md';
import {
  IoExitOutline
} from 'react-icons/io5';

import { useNavigate } from "react-router-dom";


function Sidebar({ isLogged }) {
  const [toggleBar, settoggleBar] = useState(false);
  const history = useNavigate();

  return (
    <div className={`sidebar ${toggleBar ? 'opened' : 'closed'}`}>
      {isLogged === undefined ? <FaRegUserCircle className={`iconePerfil ${toggleBar ? 'bigPic' : 'smallPic'}`} onClick={() => history("/login")} /> :
        <div>
          <div>
            <img src={isLogged.ftperfil} alt="foto de perfil" className={toggleBar ? 'fotoPerfil' : 'fotoCompacta'} />
          </div>
          {toggleBar && isLogged.nome}
        </div>}
      {toggleBar && <GiContract className='floatIcon' size={'30px'} onClick={() => settoggleBar(!toggleBar)} />}
      {!toggleBar && <GiExpand className='floatIcon noFloat' size={'30px'} onClick={() => settoggleBar(!toggleBar)} />}
      <div className="icons-links">
        {!toggleBar && <FaDog className={'link-icon'} size={'30px'} onClick={() => history("/pets")} />}
        {toggleBar && <p className='text-link' onClick={() => history("/pets")} >Pets para adoção <MdArrowForwardIos /></p>}
        {!toggleBar && <RiShoppingBag3Fill className={'link-icon'} size={'30px'} onClick={() => history("/produtos")} />}
        {toggleBar && <p className='text-link' onClick={() => history("/produtos")} >Produtos para o seu pet <MdArrowForwardIos /></p>}
        {!toggleBar && <FaRegClock className={'link-icon'} size={'30px'} />}
        {toggleBar && <p className='text-link'>Minhas listas de espera <MdArrowForwardIos /></p>}
      </div>
    </div>
  )
}

export default Sidebar
import React, { useState } from 'react';
import './Sidebar.scss';
import {
    GiContract,
    GiExpand
} from 'react-icons/gi'
import {
    FaRegUserCircle,
    FaDog,
    FaRegClock
} from 'react-icons/fa'
import {
  RiShoppingBag3Fill
} from 'react-icons/ri'
import {
  MdArrowForwardIos
} from 'react-icons/md'


function Sidebar() {
    const [toggleBar, settoggleBar] = useState(false);
  return (
    <div className={`sidebar ${toggleBar ? 'opened' : 'closed'}`}>
        <FaRegUserCircle className={`iconePerfil ${toggleBar ? 'bigPic' : 'smallPic'}`}/>
        {toggleBar && <GiContract className='floatIcon' size={'30px'} onClick={() => settoggleBar(!toggleBar)}/>}
        {!toggleBar && <GiExpand className='floatIcon noFloat' size={'30px'} onClick={() => settoggleBar(!toggleBar)}/>}
        <div className="icons-links">
        {!toggleBar && <FaDog className={'link-icon'} size={'30px'}/>}
        {toggleBar && <p className='text-link'>Pets para adoção <MdArrowForwardIos/></p>}
        {!toggleBar && <RiShoppingBag3Fill className={'link-icon'} size={'30px'}/>}
        {toggleBar && <p className='text-link'>Produtos para o seu pet <MdArrowForwardIos/></p>}
        {!toggleBar && <FaRegClock className={'link-icon'} size={'30px'}/>}
        {toggleBar && <p className='text-link'>Minhas listas de espera <MdArrowForwardIos/></p>}
        </div>
    </div>
  )
}

export default Sidebar
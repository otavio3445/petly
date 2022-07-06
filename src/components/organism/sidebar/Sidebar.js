import React, { useState } from 'react';
import './Sidebar.scss';
import {
    GiContract,
    GiExpand
} from 'react-icons/gi'
import {
    FaRegUserCircle
} from 'react-icons/fa'

function Sidebar() {
    const [toggleBar, settoggleBar] = useState(false);
  return (
    <div className={`sidebar ${toggleBar ? 'opened' : 'closed'}`}>
        <FaRegUserCircle className={`iconePerfil ${toggleBar ? 'bigPic' : 'smallPic'}`}/>
        {toggleBar && <GiContract className='floatIcon' size={'30px'} onClick={() => settoggleBar(!toggleBar)}/>}
        {!toggleBar && <GiExpand className='floatIcon noFloat' size={'30px'} onClick={() => settoggleBar(!toggleBar)}/>}
    </div>
  )
}

export default Sidebar
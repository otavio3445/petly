import React from 'react';
import Header from '../components/organism/header/Header';
import PerfilBack from '../components/organism/PerfilBack/PerfilBack';
import Sidebar from '../components/organism/sidebar/Sidebar';
import './global.scss';

const Perfil = (props) => {
  
  return (
    <div className='Home'>
        <Sidebar isLogged={props.isLogged}/>
        <Header/>
        <PerfilBack changeLog={props.changeLog} isLogged={props.isLogged}/>
    </div>
  )
}

export default Perfil
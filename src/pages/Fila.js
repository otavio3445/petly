import React from 'react';
import Header from '../components/organism/header/Header';
import FilaBack from '../components/organism/FilaBack/FilaBack';
import Sidebar from '../components/organism/sidebar/Sidebar';
import './global.scss';

const Fila = (props) => {
  
  return (
    <div className='Home'>
        <Sidebar isLogged={props.isLogged}/>
        <Header/>
        <FilaBack changeLog={props.changeLog} isLogged={props.isLogged}/>
    </div>
  )
}

export default Fila
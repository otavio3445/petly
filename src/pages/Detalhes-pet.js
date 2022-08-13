import React from 'react';
import Detalhes from '../components/organism/DetalhesPet/Detalhes';
import Header from '../components/organism/header/Header';
import Sidebar from '../components/organism/sidebar/Sidebar';
import './global.scss';

const DetalhesPet = () => {
  
  return (
    <div className='Home'>
        <Sidebar/>
        <Header/>
        <Detalhes />
    </div>
  )
}

export default DetalhesPet
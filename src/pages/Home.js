import React from 'react';
import Header from '../components/organism/header/Header';
import HomeBack from '../components/organism/HomeBack/HomeBack';
import Sidebar from '../components/organism/sidebar/Sidebar';
import './global.scss';

const Home = () => {
  return (
    <div className='Home'>
        <Sidebar/>
        <Header/>
        <HomeBack/>
    </div>
  )
}

export default Home
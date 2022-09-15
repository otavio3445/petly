import React from 'react';
import Header from '../components/organism/header/Header';
import HomeBack from '../components/organism/HomeBack/HomeBack';
import Sidebar from '../components/organism/sidebar/Sidebar';
import './global.scss';

const Home = (props) => {
  
  return (
    <div className='Home'>
        <Sidebar isLogged={props.isLogged}/>
        <Header/>
        <HomeBack isLogged={props.isLogged}/>
    </div>
  )
}

export default Home
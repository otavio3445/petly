import React from 'react';
import Header from '../components/organism/header/Header';
import LoginBack from '../components/organism/LoginBack/LoginBack';
import Sidebar from '../components/organism/sidebar/Sidebar';
import './global.scss';

const Login = (props) => {
  
  return (
    <div className='Home'>
        <Sidebar/>
        <Header/>
        <LoginBack changeLog={props.changeLog}/>
    </div>
  )
}

export default Login
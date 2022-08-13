import React from 'react';
import './global.scss';
import Header from '../components/organism/header/Header';
import Sidebar from '../components/organism/sidebar/Sidebar';
import TodosPets from '../components/organism/TodosPets/TodosPets';

const Pets = (props) => {
    return (
        <div className='Home'>
            <Sidebar />
            <Header />
            <TodosPets/>
        </div>
    )
}

export default Pets
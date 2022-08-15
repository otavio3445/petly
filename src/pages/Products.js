import React from 'react';
import './global.scss';
import Header from '../components/organism/header/Header';
import Sidebar from '../components/organism/sidebar/Sidebar';
import TodosProdutos from '../components/organism/TodosProdutos/TodosProdutos';

const Produtos = (props) => {
    return (
        <div className='Home'>
            <Sidebar />
            <Header />
            <TodosProdutos/>
        </div>
    )
}

export default Produtos
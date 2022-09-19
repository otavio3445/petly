import React from 'react';
import './global.scss';
import Header from '../components/organism/header/Header';
import Sidebar from '../components/organism/sidebar/Sidebar';
import CadastroBack from '../components/organism/Cadastro/Cadastro';

const Cadastro = (props) => {
    return (
        <div className='Home'>
            <Sidebar changeLog={props.changeLog} isLogged={props.isLogged}/>
            <Header />
            <CadastroBack changeLog={props.changeLog}/>
        </div>
    )
}

export default Cadastro
import React from 'react';
import './Detalhes.scss';
import { useLocation } from 'react-router-dom';


function Detalhes() {
    const location = useLocation();
    console.log(location.state);
    return (
        <div className='detalhesPet'>
            <div className="detalhesPet-gray"></div>
            <div className="detalhesPet-white"></div>
        </div>
    )
}

export default Detalhes
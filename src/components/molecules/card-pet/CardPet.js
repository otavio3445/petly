import React from 'react';
import './CardPet.scss';
import { useNavigate } from "react-router-dom";

function CardPet({ data, fullData, isLogged }) {
  const history = useNavigate();
  return (
    <div className='cardPet'>
        <div className="cardPet-header">
            <p>{data.nome}</p>
            <p>{data.idade} anos</p>
        </div>
        <div className="cardPet-pic">
            <img src={data.img} width="110px" height="110px" alt="foto do pet" />
        </div>
        <div className="cardPet-fila">
            {data.fila} pessoa(s) na fila
        </div>
        {fullData && <div className="cardPet-button" onClick={() => {
          history("/detalhes-pet", {state:{data: fullData, isLogged: isLogged}});
        }}>Quero Adotar!</div>}
    </div>
  )
}

export default CardPet
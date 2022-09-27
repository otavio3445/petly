import React from 'react';
import './CardPet.scss';
import { useNavigate } from "react-router-dom";

function CardPet({ data, isLogged }) {
  const history = useNavigate();

  return (
    <div className='cardPet'>
        <div className="cardPet-header">
            <p>{data.data.nome}</p>
            <p>{data.data.idade} anos</p>
        </div>
        <div className="cardPet-pic">
            <img src={data.data.img} width="110px" height="110px" alt="foto do pet" />
        </div>
        <div className="cardPet-fila">
            {data.data.fila} pessoa(s) na fila
        </div>
        <div className="cardPet-button" onClick={() => {
          history("/detalhes-pet", {state:{data: data, isLogged: isLogged}});
        }}>Quero Adotar!</div>
    </div>
  )
}

export default CardPet
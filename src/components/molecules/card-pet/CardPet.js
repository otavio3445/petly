import React from 'react';
import './CardPet.scss';

function CardPet() {
  return (
    <div className='cardPet'>
        <div className="cardPet-header">
            <p>Nome</p>
            <p>Idade</p>
        </div>
        <div className="cardPet-pic">
            <img src={require('../../../assets/images/dog.jpg')} width="110px" height="110px" alt="foto do pet" />
        </div>
        <div className="cardPet-fila">
            15 pessoas na fila
        </div>
        <div className="cardPet-button">Quero Adotar!</div>
    </div>
  )
}

export default CardPet
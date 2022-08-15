import React from 'react';
import './CardProduct.scss';

function CardProduct({ data }) {
  return (
    <div className='cardProduct' onClick={() => window.location.href = data.url}>
        <img src={data.img} alt='Foto do produto' height={'100%'}/>
        <div className="priceSquare">
            <p>R${data.preco}</p>
        </div>
        <div className="nameProd">
          <p>{data.nome}</p>
          <p>{data.marca}</p>
          <p>R${data.preco}</p>
        </div>
    </div>
  )
}

export default CardProduct
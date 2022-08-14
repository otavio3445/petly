import React from 'react';
import './CardProduct.scss';

function CardProduct() {
  return (
    <div className='cardProduct'>
        <img src={'https://www.pedigree.com.br/asset/img/product/p1.png'} alt='Foto do produto' height={'100%'}/>
        <div className="priceSquare">
            <p>R$29,90</p>
        </div>
    </div>
  )
}

export default CardProduct
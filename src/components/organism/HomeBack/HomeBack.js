import React, { useState } from 'react';
import CardPet from '../../molecules/card-pet/CardPet';
import './HomeBack.scss';

function HomeBack() {

  const [maximize, setmaximize] = useState(false);
  const [maximizeProducts, setmaximizeProducts] = useState(false);
  const [hidePet, sethidePet] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <section id="spikes" class={`spikes ${maximize ? 'maximize' : maximizeProducts ? 'hidded' : 'minimize'}`}>
        <div className="cardPets-section">
          <div id="carouselPet">
            <CardPet />
          </div>
          <div className="viewMore">
            <p className="line"></p>
            <div className="viewMore-button" onClick={() => setmaximize(!maximize)}>Ver {maximize ? 'Menos' : 'Todos'}</div>
            <p className="line"></p>
          </div>
        </div>
      </section>
      <section className={`products`}>
        <div className="products-section">
          <div id="carouselProducts">
            <CardPet />
          </div>
          <div className={`viewMore reset-bottom ${maximize ? 'hide-bar' : ''}`}>
            <p className="line"></p>
            <div className="viewMore-button" onClick={() => {
              setmaximizeProducts(!maximizeProducts);
              sethidePet(!hidePet);
              setTimeout(() => {
                hidePet ?
                  document.querySelector('#carouselPet').style.display = 'block' :
                  document.querySelector('#carouselPet').style.display = 'none'
              }, (hidePet ? 700 : 100))
            }}>Ver {maximizeProducts ? 'Menos' : 'Todos'}</div>
            <p className="line"></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBack
import React, { useState } from 'react';
import CardPet from '../../molecules/card-pet/CardPet';
import './HomeBack.scss';
import Slider from "react-slick";
import CardProduct from '../../molecules/card-product/CardProduct';

function HomeBack() {

  const [maximize, setmaximize] = useState(false);
  const [maximizeProducts, setmaximizeProducts] = useState(false);
  const [hidePet, sethidePet] = useState(false);
  const [hidePetCarousel, sethidePetCarousel] = useState(false);
  const [hideProdCarousel, sethideProdCarousel] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true
  };

  const settingsPro = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };
  let fakeArr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ]

  return (
    <div style={{ width: '100%' }}>
      <section id="spikes" class={`spikes ${maximize ? 'maximize' : maximizeProducts ? 'hidded' : 'minimize'}`}>
        <div className="cardPets-section">
          {!hidePetCarousel && <div id="carouselPet">
            <Slider {...settings}>
              <CardPet />
              <CardPet />
              <CardPet />
              <CardPet />
              <CardPet />
              <CardPet />
              <CardPet />
              <CardPet />
            </Slider>
          </div>}
          {hidePetCarousel && <div>
            <h1 className="itemTitle">Pets para adoção</h1>
            <div className="filterProducts">
              <div>
                <label>Espécie</label>
                <select>
                  <option>Gato</option>
                  <option>Cachorro</option>
                  <option>Pássaro</option>
                </select>
              </div>
              <div>
                <label>Filtrar por:</label>
                <select>
                  <option>Raça</option>
                  <option>Tamanho</option>
                  <option>Pelagem</option>
                </select>
              </div>
            </div>
            <div className="allPets">
            {fakeArr.map((element, index) => {
              return (
                <div className='cardHolder'>
                  <CardPet />
                </div>
              )
            })}
            </div>
          </div>}
          <div className="viewMore">
            <p className="line"></p>
            <div className="viewMore-button" onClick={() => {
              setmaximize(!maximize);
              setTimeout(() => {
                hidePetCarousel ?
                  sethidePetCarousel(!hidePetCarousel) :
                  sethidePetCarousel(!hidePetCarousel)
              }, (hidePetCarousel ? 100 : 800));
            }}>Ver {maximize ? 'Menos' : 'Todos'}</div>
            <p className="line"></p>
          </div>
        </div>
      </section>
      <section className={`products ${maximizeProducts ? 'products-hei' : '-hei-not'}`}>
        <div className="products-section">
          {!hideProdCarousel && <div id="carouselProducts">
            <Slider {...settingsPro}>
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </Slider>
          </div>}
          {hideProdCarousel && <div>
            <h1 className='itemTitle'>Produtos para o seu pet</h1>
            <div className="filterProducts">
              <div>
                <label>Produto</label>
                <select>
                  <option>Ração</option>
                  <option>Shampoo</option>
                  <option>Coleira</option>
                </select>
              </div>
              <div>
                <label>Filtrar por:</label>
                <select>
                  <option>Marca</option>
                  <option>Preço (Maior - Menor)</option>
                  <option>Preço (Menor - Maior)</option>
                </select>
              </div>
            </div>
            <div className="allProducts">
              {fakeArr.map((element, index) => {
                return (
                  <div className="cardHolder">
                    <CardProduct />
                  </div>
                )
              })}
            </div>
          </div>}
          <div className={`viewMore reset-bottom ${maximize ? 'hide-bar' : ''}`}>
            <p className="line"></p>
            <div className="viewMore-button" onClick={() => {
              setmaximizeProducts(!maximizeProducts);
              sethidePet(!hidePet);
              setTimeout(() => {
                hidePet ?
                  document.querySelector('#carouselPet').style.display = 'block' :
                  document.querySelector('#carouselPet').style.display = 'none'
              }, (hidePet ? 700 : 100));
              setTimeout(() => {
                hideProdCarousel ?
                  sethideProdCarousel(!hideProdCarousel) :
                  sethideProdCarousel(!hideProdCarousel)
              }, (hideProdCarousel ? 100 : 800));
            }}>Ver {maximizeProducts ? 'Menos' : 'Todos'}</div>
            <p className="line"></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBack
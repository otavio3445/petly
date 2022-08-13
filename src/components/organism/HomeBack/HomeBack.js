import React, { useEffect, useState } from 'react';
import CardPet from '../../molecules/card-pet/CardPet';
import './HomeBack.scss';
import Slider from "react-slick";
import CardProduct from '../../molecules/card-product/CardProduct';
import { getDocsFB } from '../../../resources/db';
import { useNavigate } from "react-router-dom";
function HomeBack() {
  
  const [petsData, setpetsData] = useState([]);

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
  
  useEffect(() => {
    (async () => {
      const pets = await getDocsFB();
      const aux = []
      pets.forEach(pet => {
        let data = pet.data();
        aux.push(data);
      })
      setpetsData([...aux]);
    })();
  }, []);

  const history = useNavigate();

  return (
    <div style={{ width: '100%' }}>
      <section id="spikes" className={`spikes minimize`}>
        <div className="cardPets-section">
          <div id="carouselPet">
            <Slider {...settings}>
              {petsData.length > 0 && petsData.map((el, index) => (
                <CardPet data={el} key={index}/>
              ))}
            </Slider>
          </div>
          <div className="viewMore">
            <p className="line"></p>
            <div className="viewMore-button" onClick={() => {
              history("/pets", {state:{data: petsData}});
            }}>Ver todos</div>
            <p className="line"></p>
          </div>
        </div>
      </section>
      <section className={`products -hei-not`}>
        <div className="products-section">
          <div id="carouselProducts">
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
          </div>
          <div className={`viewMore reset-bottom`}>
            <p className="line"></p>
            <div className="viewMore-button" onClick={() => {
            }}>Ver todos</div>
            <p className="line"></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBack
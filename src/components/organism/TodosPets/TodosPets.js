
import React from 'react';
import './TodosPets.scss';
import { useLocation } from 'react-router-dom';
import CardPet from '../../molecules/card-pet/CardPet';

const TodosPets = () => {

    const location = useLocation();
    console.log(location.state);
    return (
        <div className='adjustPadding gray-bg'>
            <div className="cardsContainer">
                {location.state.data.map((el, index) => (
                    <div className="containerItem">
                        <CardPet data={el} key={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodosPets
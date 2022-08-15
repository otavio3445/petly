
import React, { useEffect, useState } from 'react';
import './TodosPets.scss';
import { useLocation } from 'react-router-dom';
import CardPet from '../../molecules/card-pet/CardPet';
import { getDocsFB } from '../../../resources/db';

const TodosPets = () => {

    const location = useLocation();
    console.log(location.state);

    const [petsData, setpetsData] = useState([]);
    useEffect(() => {
        (async () => {
            if (location.state !== null) {
                setpetsData(location.state.data)
            } else {
                const pets = await getDocsFB();
                const aux = [];
                pets.forEach(pet => {
                    let data = pet.data();
                    aux.push(data);
                });
                setpetsData([...aux]);
            }
        })();
        // eslint-disable-next-line
    }, []);
    return (
        <div className='adjustPadding gray-bg'>
            <div className="cardsContainer">
                {petsData.map((el, index) => (
                    <div className="containerItem">
                        <CardPet data={el} key={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodosPets
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getDocsProdsFB } from '../../../resources/db';
import CardProduct from '../../molecules/card-product/CardProduct';
import './TodosProdutos.scss';

function TodosProdutos() {
  
    const location = useLocation();
    console.log(location.state);

    const [prodsData, setprodsData] = useState([]);
    useEffect(() => {
        (async () => {
            if (location.state !== null) {
                setprodsData(location.state.data)
            } else {
                const prods = await getDocsProdsFB();
                const aux = [];
                prods.forEach(prod => {
                    let data = prod.data();
                    aux.push(data);
                });
                setprodsData([...aux]);
            }
        })();
        // eslint-disable-next-line
    }, []);
    return (
        <div className='adjustPadding'>
            <div className="cardsContainer">
                {prodsData.map((el, index) => (
                    <div className="containerItem">
                        <CardProduct data={el} key={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodosProdutos
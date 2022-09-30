import React from 'react';
import './Step.scss';
import { FaLongArrowAltRight, FaCheck } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Step({ data }) {
    let box1 = 'statusBox';
    let box2 = 'statusBox';
    let box3 = 'statusBox';
    let box4 = 'statusBox';
    let arrow1 = '#D9D9D9';
    let arrow2 = '#D9D9D9';
    let arrow3 = '#D9D9D9';

    if (data.length === 4) {
        data[3] === 'ok' ? box4 = 'statusBox greenBox' : box4 = 'statusBox redBox';
    } else if (data.length === 3) {
        data[2] === 'ok' ? box3 = 'statusBox greenBox' : box3 = 'statusBox redBox';
        data[0] === 'ok' ? arrow3 = '#00ff00' : arrow3 = '#ff0000';
    } else if (data.length === 2) {
        data[1] === 'ok' ? box2 = 'statusBox greenBox' : box2 = 'statusBox redBox';
        data[0] === 'ok' ? arrow2 = '#00ff00' : arrow2 = '#ff0000';
    } else if (data.length === 1) {
        data[0] === 'ok' ? box1 = 'statusBox greenBox' : box1 = 'statusBox redBox';
        data[0] === 'ok' ? arrow1 = '#00ff00' : arrow1 = '#ff0000';
    } 
    return (
        <div className='Step'>
            <div className='statusBox-Holder'>
                <div className={box1}>{data.length >= 1 ? data[0] === 'ok' ? <FaCheck size={40}/> : <AiOutlineClose size={40}/> : null}</div>
                <p>Demonstrar Interesse</p>
            </div>
            <FaLongArrowAltRight size={90} color={arrow1} />
            <div className='statusBox-Holder'>
                <div className={box2}>{data.length >= 2 ? data[1] === 'ok' ? <FaCheck size={40}/> : <AiOutlineClose size={40}/> : null}</div>
                <p>Revisão de Perfil</p>
            </div>
            <FaLongArrowAltRight size={90} color={arrow2} />
            <div className='statusBox-Holder'>
                <div className={box3}>{data.length >= 3 ? data[2] === 'ok' ? <FaCheck size={40}/> : <AiOutlineClose size={40}/> : null}</div>
                <p>Entrevista com a ONG</p>
            </div>
            <FaLongArrowAltRight size={90} color={arrow3} />
            <div className='statusBox-Holder'>
                <div className={box4}>{data.length >= 4 ? data[3] === 'ok' ? <FaCheck size={40}/> : <AiOutlineClose size={40}/> : null}</div>
                <p>Adotado(a)</p>
            </div>
        </div>
    )
}

export default Step
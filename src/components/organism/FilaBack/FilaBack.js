import React from 'react';
import './FilaBack.scss';

function FilaBack({ isLogged }) {
    const getFila = () => {
        if (isLogged !== undefined) {
            if (isLogged.data.fila.length > 0) {
                return (
                    <div>
                        <h3>Pet na sua lista!</h3>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h3>Nenhum Pet na sua lista!</h3>
                    </div>
                )
            }
        }
    }
    return (
        <div className='adjustPadding gray-bg'>
            {console.log(isLogged)}
            {getFila()}
        </div>
    )
}

export default FilaBack
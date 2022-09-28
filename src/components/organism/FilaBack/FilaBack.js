import React, {useState} from 'react';
import './FilaBack.scss';
import { useNavigate } from "react-router-dom";

function FilaBack({ isLogged }) {
    const [counter, setcounter] = useState(3);
    const history = useNavigate();
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
        } else {
            counter > 0 && setTimeout(() => setcounter(counter-1), 1000)
            setTimeout(() => {
                history("/login")
            }, 3000);
            return (
                <div>
                    <h3>Você será redirecionado para a página de login em {counter}s</h3>
                </div>
            )
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
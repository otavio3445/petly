import React, { useState } from 'react';
import './LoginBack.scss';
import { useNavigate } from 'react-router-dom';
import { getUsersFB } from '../../../resources/db';

const LoginBack = ({ changeLog }) => {

    const history = useNavigate();

    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");
    const [showMessage, setshowMessage] = useState(false);

    const validateLogin = async () => {
        const users = await getUsersFB();
        if (email !== "" && senha !== "") {
            users.forEach(user => {
                if (email === user.data().email) {
                    changeLog(user.data());
                    history("/");
                } else {
                    setshowMessage(true);
                }
            })
        }
    }


    return (
        <div className='adjustPadding gray-bg'>
            <div className="login-box">
                <h1>LOGIN</h1>
                <div>
                    <input autoComplete='off' type="text" name="email" id="loginEmail" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <input type="password" name="senha" id="loginSenha" placeholder='Senha' onChange={(e) => setsenha(e.target.value)} />
                </div>
                <div className="login-button" onClick={validateLogin}>Login</div>
                <a href='/cadastro'>Cadastrar-se</a>
                {showMessage && <h3>Email ou senha incorretos, por favor tente novamente!</h3>}
            </div>
        </div>
    )
}

export default LoginBack
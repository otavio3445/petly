import React from 'react';
import './Detalhes.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateDocFB } from '../../../resources/db';

function Detalhes() {
    const location = useLocation();
    const history = useNavigate();

    return (
        <div className='detalhesPet'>
            {location.state !== null ? <div>
                <div className="detalhesPet-gray">
                    <div className="dadosPet">
                        <img src={location.state.data.data.img} alt="foto do animal" />
                        <div className="infos">
                            <p>Nome: {location.state.data.data.nome}</p>
                            <p>Idade: {location.state.data.data.idade}</p>
                            <p>Raça: {location.state.data.data.raca}</p>
                            <p>Gênero: {location.state.data.data.genero}</p>
                            <p>Porte: {location.state.data.data.porte}</p>
                            <p>Castragem: {location.state.data.data.castragem}</p>
                            <p>Pelagem: {location.state.data.data.pelagem}</p>
                        </div>
                    </div>
                </div>
                <div className="detalhesPet-white">
                    <div className="dadosOng">
                        <h1>ONG Responsável:</h1>
                        <div className="ongHolder">
                            <img src={location.state.data.data.ong[4]} alt="foto da ong" onClick={() => window.open(location.state.data.data.ong[3], '_blank')} />
                            <h2>{location.state.data.data.ong[0]}</h2>
                        </div>
                        <div className="infos">
                            <p>Telefone para contato: {location.state.data.data.ong[2]}</p>
                            <p>Endereço: {location.state.data.data.ong[1]}</p>
                            <p>Fila: {location.state.data.data.fila} pessoa(s)</p>
                        </div>
                        <div className="btnAddFila" onClick={async() => {
                            if (location.state.isLogged === undefined) {
                                history("/login")
                            } else {
                                let document = location.state.data.data;
                                document.fila = (Number(document.fila)+1).toString();
                                let usuario = location.state.isLogged.data;
                                usuario.fila = [...usuario.fila, location.state.data]
                                await updateDocFB(location.state.data.id, document, "Pets").then((res) => {});
                                await updateDocFB(location.state.isLogged.id, usuario, "Users").then((res) => {
                                    history("/fila")
                                });
                                
                            }
                        }}>
                            Eu também quero entrar na fila!
                        </div>
                    </div>
                </div>
            </div> : <div>
                <h1>Erro ao encontrar o Pet, por favor selecione-o novamente</h1>
            </div>}
        </div>
    )
}

export default Detalhes
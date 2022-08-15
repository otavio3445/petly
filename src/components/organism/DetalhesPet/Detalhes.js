import React from 'react';
import './Detalhes.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function Detalhes() {
    const location = useLocation();
    const history = useNavigate();

    return (
        <div className='detalhesPet'>
            {location.state !== null ? <div>
                <div className="detalhesPet-gray">
                    <div className="dadosPet">
                        <img src={location.state.data.img} alt="foto do animal" />
                        <div className="infos">
                            <p>Nome: {location.state.data.nome}</p>
                            <p>Idade: {location.state.data.idade}</p>
                            <p>Raça: {location.state.data.raca}</p>
                            <p>Gênero: {location.state.data.genero}</p>
                            <p>Porte: {location.state.data.porte}</p>
                            <p>Castragem: {location.state.data.castragem}</p>
                            <p>Pelagem: {location.state.data.pelagem}</p>
                        </div>
                    </div>
                </div>
                <div className="detalhesPet-white">
                    <div className="dadosOng">
                        <h1>ONG Responsável:</h1>
                        <div className="ongHolder">
                            <img src={location.state.data.ong[4]} alt="foto da ong" onClick={() => window.open(location.state.data.ong[3], '_blank')} />
                            <h2>{location.state.data.ong[0]}</h2>
                        </div>
                        <div className="infos">
                            <p>Telefone para contato: {location.state.data.ong[2]}</p>
                            <p>Endereço: {location.state.data.ong[1]}</p>
                            <p>Fila: {location.state.data.fila} pessoa(s)</p>
                        </div>
                        <div className="btnAddFila" onClick={() => history("/login")}>
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
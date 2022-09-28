import React from 'react';
import './PerfilBack.scss'

function PerfilBack({ changeLog, isLogged }) {
  const hasUser = () => (
    <div className='adjustPadding gray-bg' style={{ 'display': 'flex' }}>
      <div className='basicsProfile'>
        <img src={isLogged.data.ftperfil} alt="foto de perfil" className={`bigProfile`} />
        <h3>Nome: {isLogged.data.nome} {isLogged.data.sobrenome}</h3>
        <h3>Idade: {isLogged.data.idade} anos</h3>
        <h3>Endereço: {isLogged.data.endereco}</h3>
      </div>
      <div className="address">
        <h2>Fotos de casa:</h2>
      </div>
    </div>
  )
  const noUser = () => (
    <div className='adjustPadding gray-bg'>
      <h2>Erro, usuário não Logado, por favor faça Login</h2>
    </div>
  )
  return isLogged !== undefined ? hasUser() : noUser()
}

export default PerfilBack
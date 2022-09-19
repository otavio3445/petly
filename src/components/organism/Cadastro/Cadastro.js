import React, { useState } from 'react';
import "./Cadastro.scss";
import { getUrlImg, getUsersFB, setUsersFB, uploadImage } from '../../../resources/db';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

function CadastroBack({ changeLog }) {

  const [loading, setloading] = useState(false);
  const [emailExist, setemailExist] = useState(false);

  const [nome, setnome] = useState('');
  const [sobrenome, setsobrenome] = useState('');
  const [idade, setidade] = useState('');
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const [cep, setcep] = useState('');
  const [cpf, setcpf] = useState('');
  const [endereco, setendereco] = useState('');
  const [numero, setnumero] = useState('');
  const [foto, setfoto] = useState('');

  const history = useNavigate();

  const uploadPhoto = async (cpf, file) => {
    if (file) {
      await uploadImage(cpf, file)
    }
  }

  const validateLogin = async (email, senha) => {
    const users = await getUsersFB();
    if (email !== "" && senha !== "") {
      users.forEach(user => {
        if (email === user.data().email) {
          changeLog(user.data());
          history("/");
        }
      })
    }
  }

  const validateEmail = async (email, cpf) => {
    const users = await getUsersFB();
    let result = false
    users.forEach(user => {
      if (email === user.data().email || cpf === user.data().cpf) {
        result = true;
      }
    });
    return result
  }


  const validateCadastro = async () => {
    let fakePhoto = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';
    let photoUrl = '';

    if (nome !== '' && sobrenome !== '' && idade !== '' && email !== '' && senha !== '' && cep !== '' && cpf !== '' && endereco !== '' && numero !== '') {

      let result = await validateEmail(email, cpf);

      if (result === false) {
        if (foto !== '') {
          await uploadPhoto(`${cpf}`, foto);
          await getUrlImg(`${cpf}`).then(url => {
            photoUrl = url;
          })
        }
        let document = {
          nome,
          sobrenome,
          idade,
          senha,
          email,
          cep,
          cpf,
          endereco: `${endereco}, ${numero}`,
          ftcasa: '',
          ftperfil: photoUrl !== '' ? photoUrl : fakePhoto
        };
        await setUsersFB(document).then(result => {
          validateLogin(email, senha)
          console.log(result);
        });
      } else {
        setemailExist(true);
        setloading(false);
      }
    }
  }

  const validateCep = async (cep) => {
    if (cep.length >= 7) {
      await Axios.get(`https://viacep.com.br/ws/${cep}/json`).then(resp => {
        setendereco(resp.data.logradouro);
      }).catch(err => {
        document.querySelector('#inputCep').value = '';
        alert('cep Inválido, tente novamente!');
        setcep('');
        setendereco('');
      })
    }
  }

  return (
    <div className='adjustPadding gray-bg'>
      {!loading && <div className="centerForm">
        <div className="formBorder">
          <form onSubmit={validateCadastro}>
            <h1>CADASTRO</h1>
            <div>
              <input className='formatInput' required autoComplete='off' type="text" placeholder='Nome' onChange={(e) => setnome(e.target.value)} />
              <input className='formatInput' required autoComplete='off' type="text" placeholder='Sobrenome' onChange={(e) => setsobrenome(e.target.value)} />
            </div>
            <div>
              <input className='formatInput' required autoComplete='off' type="number" placeholder='Idade' onChange={(e) => setidade(e.target.value)} />
              <input className='formatInput' required autoComplete='off' maxLength="11" type="number" placeholder='CPF' onChange={(e) => {
                if (cpf.length <= 10) {
                  setcpf(e.target.value)
                }
              }} />
            </div>
            <div>
              <input className='formatInput inputCEP' required autoComplete='off' type="number" placeholder='CEP' id='inputCep' onChange={(e) => setcep(e.target.value)} />
              <button className='cepBtn' onClick={(e) => {
                e.preventDefault();
                validateCep(cep)
              }
              }>Validar CEP</button>
            </div>
            <div className='enderecoDiv'>
              <p className='enderecoP'>Endereço: {endereco}</p>
              <input className='formatInput inputNum' required autoComplete='off' minLength={1} type="number" placeholder='Nº' onChange={(e) => setnumero(e.target.value)} />
            </div>
            <div>
              <label className='labelPhoto'>Foto de perfil:</label>
              <input type="file" onChange={(e) => {
                setfoto(e.target.files[0]);
              }} />
            </div>
            <div>
              <input className='formatInput' required type="text" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
            </div>
            <div>
              <input className='formatInput' required type="password" placeholder='Senha' onChange={(e) => setsenha(e.target.value)} />
            </div>
            <button className="login-button" onClick={(e) => {
              e.preventDefault();
              setloading(true);
              validateCadastro();
            }}>Cadastrar</button>
          </form>
          {emailExist && <h4>Email ou CPF Já cadastrado! Favor tente com um novo</h4>}
        </div>
      </div>}
      {loading && <div className='loading'>
        <img alt='gif de carregamento' width="400px" src='https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif' />
      </div>}
    </div>
  )
}

export default CadastroBack
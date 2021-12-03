import React, { useState } from 'react';
import axios from 'axios';

import Cep from './components/cep';

import './App.css'

function App () {
  const [cep, setCep] = useState();
  const [info, setInfo] = useState({
    cep: '',
    bairro: ''
  });

  const getResponse = () => {
    axios.get('http://viacep.com.br/ws/' + cep + '/json/').then(response => {
      setInfo(response.data);
    });
  }

  const search = (e) => {
    if(e.target.getAttribute('name') == 'cep') {
      setCep(e.target.value)
    }
  }

  return (
    <>
      <h2>Busca CEP</h2>
      <label>Digite o CEP: </label><br />
      <input type="text" name="cep" onChange={ (e) => { search(e) } } /><br />
      <button className="btn" onClick={ getResponse }>Search</button>
      { info['bairro'] != '' && info['cep'] != '' ? <Cep bairro = {info['bairro']} cep = {info['cep']} /> : <></>}
    </>
  )
}

export default App

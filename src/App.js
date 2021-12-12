import React, { useEffect, useState } from 'react'

import BemVindo from './components/BemVindo'
import BuscaEndereco from './components/BuscaEndereco'
import BuscaCep from './components/BuscaCep'


import './App.css'

function App() {

  const [busca, setBusca] = useState('bemVindo')

  useEffect(() => {
    let firstButton = document.getElementById('btn1')
    let secondButton = document.getElementById('btn2')

    if(busca === 'endereco') {
      firstButton.value = 'Voltar'
      firstButton.onclick = () => {setBusca('bemVindo')}
      secondButton.style.opacity = 0
      
    }else if (busca === 'bemVindo') {
      firstButton.value = 'Buscar Endereco'
      firstButton.onclick = () => {setBusca('endereco')}
      secondButton.style.opacity = 1
    }else if (busca === 'cep') {
      firstButton.value = 'Voltar'
      firstButton.onclick = () => {setBusca('bemVindo')}
      secondButton.style.opacity = 0
    }
  })

  return (
    <>
    <header>
        <p>
          <strong>BuscaCEP</strong>
        </p>
        <ul>
          <li>
            <a onClick={() => {setBusca('cep')}}>Buscar Cep</a>
          </li>
          <li>
            <a onClick={() => {setBusca('endereco')}}>Buscar Endereço</a>
          </li>
        </ul>
      </header>
      {busca === 'endereco' ? <BuscaEndereco /> : busca === 'cep' ? <BuscaCep /> : <BemVindo />}
      <input type="button" id="btn1" className="btn" />
      <input type="button" id="btn2" className="btn" value="Buscar CEP" onClick={() => {setBusca('cep')}}/>
    </>
  )
}

export default App

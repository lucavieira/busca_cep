import React, { useState } from 'react'
import Cep from './Cep'

import '../App.css'

const BuscaEndereco = () => {
  const [cep, setCep] = useState()
  const validateCep = new RegExp('(?=.[0-9]).{8,}')
  const [info, setInfo] = useState({
    cep: '',
    bairro: '',
    logradouro: '',
    localidade: '',
    uf: ''
  })

  const getResponse = async () => {
    if (!validateCep.test(cep)) {
      alert('Cep Inválido!')
    } else {
      const cepResponse = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
      const dadosCep = await cepResponse.json()
      setInfo(dadosCep)
    }
  }

  const search = e => {
    if (e.target.getAttribute('name') === 'cep') {
      setCep(e.target.value)
    }
  }

  return (
    <>
      <hr />
      <div>
        <h2>Busca Endereço</h2>
        <label>Digite o CEP: </label>
        <br />
        <input
          type="text"
          name="cep"
          maxLength={8}
          required
          onChange={e => {
            search(e)
          }}
        />
        <br />
      </div>
      {info['bairro'] !== '' &&
      info['cep'] !== '' &&
      info['logradouro'] !== '' &&
      info['localidade'] !== '' &&
      info['uf'] !== '' ? (
        <Cep
          bairro={info['bairro']}
          cep={info['cep']}
          logradouro={info['logradouro']}
          municipio={info['localidade']}
          uf={info['uf']}
        />
      ) : (
        <></>
      )}
      <button className="btn" onClick={getResponse}>
        Pesquisar
      </button>
    </>
  )
}

export default BuscaEndereco

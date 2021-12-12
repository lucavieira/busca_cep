import React, {useEffect, useState} from "react"

import '../App.css'

const BuscaCep = () => {

  const [estados, setEstados] = useState([])
  const [municipios, setMunicipios] = useState([])
  const [info, setInfo] = useState({
    uf: '',
    municipio: '',
    logradouro: ''
  })

  let listaEstados = []
  let listaMunicipios = []

  useEffect(async () => {
    const estadosResponse = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');

    const estadosData = await estadosResponse.json();

    setEstados(estadosData);
  }, []);

  for (let i in estados) {
    listaEstados.push(<option key={estados[i].id} value={estados[i].sigla}>{estados[i].sigla}</option>)
  }

  const setMunicipio = async (estado) => {
    setInfo({"uf": estado.target.value, "municipio": info.municipio, "logradouro": info.logradouro})
    const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.target.value}/municipios`)
    const municipiosData = await municipiosResponse.json()
    setMunicipios(municipiosData)
  }

  for (let i in municipios) {
    listaMunicipios.push(<option key={municipios[i].id} value={municipios[i].nome}>{municipios[i].nome}</option>)
  }

  const getLogradouros = async (elemento) => {
    if (elemento.target.getAttribute('name') == "fMunicipios"){
      setInfo({"uf": info.uf, "municipio": elemento.target.value, "logradouro": info.logradouro})
    }else {
      setInfo({"uf": info.uf, "municipio": info.municipio , "logradouro": elemento.target.value})
    }
  }

  const getCep = async () => {
    const dadosResponse = await fetch(`http://viacep.com.br/ws/${info.uf}/${info.municipio}/${info.logradouro}/json`)
    const dados = await dadosResponse.json()
    console.log(dados)
    for (let i in dados) {
      alert(`CEP: ${dados[i].cep} \nLogradouro: ${dados[i].logradouro} \nMunicipio: ${dados[i].localidade} \nCódigo: ${dados[i].ibge}`)
    }
  }
  
  return (
    <>
      <hr />
      <form className="formCep">
        <label htmlFor="fEstados">Estado</label>
        <select name="fEstados" id="fEstados" onChange={ estado => { setMunicipio(estado) } }>
          <option value="selecione">Selecione o Estado</option>
          {listaEstados}
        </select>
        <label htmlFor="fMunicipios">Municipio</label>
        <select name="fMunicipios" id="fMunicipios" onChange={ municipio => { getLogradouros(municipio) } }>
          <option value="selecione">Selecione o Municipio</option>
          {listaMunicipios}
        </select>
        <label htmlFor="fLogradouros">Logradouro</label>
        <input type="text" placeholder="Ex: Rua Emilio Conde" name="fLogradouro" id="fLogradouro" onChange={ logradouro => { getLogradouros(logradouro) } }/>
      </form>
      <button className="btn" onClick={ getCep }>
        Pesquisar
      </button>
    </>
  )
}

export default BuscaCep
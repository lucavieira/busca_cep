import React from 'react'

const Cep = props => {
  return (
    <>
      <form className='formCep'>
        <label htmlFor='fLogradouro'>Logradouro</label>
        <input name='fLogradouro' id='fLogradouro' type='text' disabled value={props.logradouro}/>
        <label htmlFor='fMunicipoUf'>Município / UF</label>
        <input name='fMunicipoUf' id='fMunicipoUf' type='text' disabled value={props.municipio + ' / ' + props.uf}/>
        <label htmlFor='fBairro'>Bairro</label>
        <input name='fBairro' id='fBairro' type='text' disabled value={props.bairro}/>
        <label htmlFor='fCep'>CEP</label>
        <input name='fCep' id='fCep' type='text' disabled value={props.cep}/>
      </form>
    </>
  )
}

export default Cep

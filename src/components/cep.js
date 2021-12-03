import React from 'react';

const Cep = (props) => {
  return (
    <>
      <div className="buscaCep">
        <h2>Resultado</h2>
        <p><strong>Bairro:</strong> {props.bairro}</p>
        <p><strong>CEP:</strong> {props.cep}</p>
      </div>
    </>
  );
}

export default Cep;
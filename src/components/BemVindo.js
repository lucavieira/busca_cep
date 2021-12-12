import React from 'react'

import '../App.css'

export default function BemVindo() {

  return (
    <>
      <hr />
      <div>
        <h1>Bem Vindo ao BuscaCEP</h1>
        <p>
          O sistema BuscaCEP permite que você encontre CEP's.<br />
          Caso já possua o CEP e deseje apenas o endereço, iremos lhe ajudar.<br />
          Aproveite :D
        </p>
      </div>
      <hr />
      <footer>
        <p>&copy; 2021 - BuscaCEP</p>
      </footer>
    </>
  )
}
import React from 'react'
import stylos from './Produto.module.css'
const Produto = () => {
  return (
    <div>
        <h1 className={stylos.titulo}>Notebook</h1>
        <p> R$ 500</p>
        <button>Compra</button>
    </div>
  )
}

export default Produto
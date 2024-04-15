import React from 'react'
import { GlobalContext } from './GlobalContext'
const Produto = () => {
    const {dados} = React.useContext(GlobalContext)
    if(dados === null) return null
  return (
    <>
        <ul>{dados.map(produto=>
                    <>
                        <li><strong>Nome: </strong>{produto.nome} | <strong>Preco:</strong> R${produto.preco}</li>
                    </>)}
        </ul>
    </>
  )
}

export default Produto
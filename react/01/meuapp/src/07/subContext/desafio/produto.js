import React from 'react'
import { GlobalContext } from './globalContext'
const Produto = () => {
    const dados = React.useContext(GlobalContext)
    return (
    <>
        <p><strong>Nome:</strong> {dados.dados.nome}</p>
        <p><strong>Dados:</strong> {dados.dados.preco}</p>
        <p><strong>Descriçao:</strong> {dados.dados.descricao}</p>
        <button onClick={()=>dados.limparDados()}>Limpar</button>
    </>
  )
}

export default Produto
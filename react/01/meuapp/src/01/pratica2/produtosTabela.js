import React from 'react'

const ProdutosTabela = ({nome,propriedade}) => {
  return (
    <div>
        <p>{nome}</p>
        <ul>{propriedade.map((propriedades)=>(<li>{propriedades}</li>))}</ul>
    </div>
  )
}

export default ProdutosTabela
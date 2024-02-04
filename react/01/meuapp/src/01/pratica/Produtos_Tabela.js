import React from 'react'

const Produtos_Tabela = ({nome,propriedade}) => {
  return (
    <section>
        <p>{nome}</p>
        <ul>{propriedade.map((propriedades)=>(<li>{propriedades}</li>))}</ul>
    </section>
  )
}

export default Produtos_Tabela
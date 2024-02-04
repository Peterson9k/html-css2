import React from 'react'
import Titulo from './Titulo'
import Produtos_Tabela from './Produtos_Tabela'
const produto = [
  {nome:'Notebook', propriedades:['16gb ram', '512gb']},
  {nome:'Smartphone', propriedades:['2gb ram', '128gb']}
]

const Produtos = () => {
  return (
      <section>
          <Titulo texto='Produtos'/>
          {produto.map((produto)=>(<Produtos_Tabela key={produto.nome} {...produto}/>))}
      </section>
  )
}

export default Produtos
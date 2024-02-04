import React from 'react'
import Titulo from './titulo'
import ProdutosTabela from './produtosTabela'
const produto = [
    {nome:'Notebook', propriedade:['8gb de Ram','240gb de Armazenamento']},
    {nome:'Smartphone', propriedade:['6gb de Ram','64gb de Armazenamento']},
    {nome:'Computador', propriedade:['16gb de Ram','1tb de Armazenamento']}
]

const Produtos = () => {
  return (
    <section>
        <Titulo txt='Produtos'/>
          {produto.map((produto)=>(
                <ProdutosTabela key={produto.nome} {...produto}/>
        ))}
    </section>
  )
}

export default Produtos
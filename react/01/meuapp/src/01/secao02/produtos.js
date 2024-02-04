import React from 'react'
import Titulo from '../titulo'
import ProdutoLay from './produtoLay'
const produtos = () => {
    const produtos = [
        {nome:'Notebook', propriedades:['16gb ram','512gb']},
        {nome:'Smartphone', propriedades:['2gb ram', '128gb']}
    ]


  return (
    <section>
        <Titulo txt='Produtos'/>   
        {produtos.map((produto)=>(
            <ProdutoLay key={produto.nome} {...produto}/>
        ))}
        
    </section>
  )
  
}

export default produtos
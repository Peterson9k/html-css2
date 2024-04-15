import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produto from './Produto'
import Limpar from './Limpar'
const UseContext = () => {
  return (
    <GlobalStorage key='Produtos'>
        <Produto/>
        <Limpar/>
    </GlobalStorage>
  )
}

export default UseContext
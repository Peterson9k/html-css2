import React from 'react'
import {GlobalLocalStorage} from "./globalContext"
import Produto from './produto'
const Context = () => {
  return (
    <GlobalLocalStorage puxar="notebook">
        <Produto/>
    </GlobalLocalStorage>
  )
}

export default Context
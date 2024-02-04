import React from 'react'
import Input from './input'
import Buttons from './buttons'

const form = () => {
  const arr = ['Item1','Item2' ]

  return (
    <form style={{display:'flex', flexDirection:'column', gap:'10px', width:'300px'}}>
        <Input id='email' label='Email: ' type='email' required  />
        <Input id='senha' label='Senha:' type='password'/>
        <Buttons itens={arr}/>
    </form>
  )
} 

export default form    
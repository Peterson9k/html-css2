/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import InputLogin from './sub_paginas/input_login'

const login2 = () => {
    const [form,setForm] = React.useState({
        name: "",
        email: "",
    })
    
    const [emptyValue, setEmptyValue]= React.useState(false);
    const [valideEmail,setValideEmail]= React.useState(false);    
    const handleClick = (event)=>{
        let newProp = form
        setValideEmail(true)
        newProp[event.target.name] = event.target.value
        setForm({...newProp})
        
        let validaçaoEmail = form["email"].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
        setValideEmail(validaçaoEmail)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        let valores = Object.values(form).some(obj => obj === "")
        setEmptyValue(valores)
        if(!valores && valideEmail){
            fetch('localhost:3000',{method:'POST', body:JSON.stringify(form)})
            event.currentTarget.submit()
        }
    }
   

  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
        <InputLogin l='Nome' n='name' id='name' place='Seu nome' onBlur={(e)=>handleClick(e)}/>
        {emptyValue && form["name"] === ""?<span className='inputErro'>nome in required</span>:''}
        
        <InputLogin l='Email' n='email' id='email' place='Seu e-mail' onBlur={(e)=>handleClick(e)}/>
        {emptyValue  && form["email"] === ""? <span className='inputErro'>E-mail in required</span>:''}
        {!valideEmail && form["email"] !== ""? <span className='spanAlert'>Email invalido</span>:''}


        <button>Enviar</button>
    </form>
  )
}

export default login2
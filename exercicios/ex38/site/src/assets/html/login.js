// usuario , senha , confirma senha , foto de perfil.
import React from 'react'
import InputLogin from './sub_paginas/input_login'
import '../css/style.scss'

const login = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [form,setForm]= React.useState({
        name: "",
        email: "",
        gender: ""
    })
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [emptyValue, setEmptyValue]= React.useState(false);
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [valideEmail,setValideEmail]= React.useState(false);
    

   
    const handleChange= (e)=>{
        let newProp = form;
        setValideEmail(true)
        newProp[e.target.name] = e.target.value;
        setForm({...newProp})
        
        let validEmail = form["email"].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
        setValideEmail(validEmail)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        let emptyValues = Object.values(form).some(algum => algum === "")
        setEmptyValue(emptyValues)
        if(!emptyValues && valideEmail){
            fetch('localhost:3000',{method:"POST", body: JSON.stringify(form)})
            e.currentTarget.submit()
        }
       
    }
   
    return (
        <>
            <h2>Formulario</h2>
            <form  onSubmit={(e)=>{handleSubmit(e)}} style={{display:'flex', flexDirection:'column'}} method='post'>
                <InputLogin label='Name: ' name='name' onBlur={(e)=>handleChange(e)}/>
                {emptyValue  && form["name"] === ""? <span className='spanAlert'>O campo nome precisa ser preenchido</span>:''}

                <InputLogin label='Email: ' name='email' onBlur={(e)=> handleChange(e)}/>
                {emptyValue  && form["email"] === ""? <span className='spanAlert'>O campo email precisa ser preenchido</span>:''}
                {!valideEmail && form["email"] !== ""? <span className='spanAlert'>Email invalido</span>:''}

                <label htmlFor="gender">Genero: </label>
                <select name="gender" onChange={(e)=>handleChange(e)} style={{width:'300px'}}>
                    <option>-</option>
                    <option>M</option>
                    <option>F</option>
                </select>
                {emptyValue  && form["gender"] === ""? <span className='spanAlert'>O campo genero precisa ser preenchido</span>:''}
                
                <button type='submit' style={{width:'200px', marginTop:'10px'}}>Envia</button>
            </form>
          
        </>
    )
}

export default login
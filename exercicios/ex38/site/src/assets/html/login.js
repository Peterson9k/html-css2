// usuario , senha , confirma senha , foto de perfil.
import React, {useState} from 'react'
import InputLogin from './sub_paginas/input_login'
import '../css/style.scss'

const login = () => {
    const estilo = {
        display:'flex',
        flexWrap:'wrap',
        width:'100px',
        padding:'10px',
        fontSize:'10px',
        backgroundColor: 'white',
        bordeRadius:'10px'
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formu,setFormu]= React.useState({
        name: "",
        email: "",
        gender: ""
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [emptyValue, setEmptyValue]= useState(false);

    const handleChange= (e)=>{
        let newProp = formu;
        newProp[e.target.name] = e.target.value;
        setFormu({...newProp})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        let emptyValues = Object.values(formu).some(algum => algum === "")
        setEmptyValue(emptyValues)
    }
   
    return (
        <>
            <h2>Formulario</h2>
            <form  onSubmit={(e)=>{handleSubmit(e)}} style={{display:'flex', flexDirection:'column'}}>
                <InputLogin label='Name: ' name='name' onBlur={(e)=>handleChange(e)}/>
                {emptyValue  && formu["name"] === ""? <span style={estilo}>O campo nome precisa ser preenchido</span>:''}

                <InputLogin label='Email: ' name='email' onBlur={(e)=> handleChange(e)}/>
                {emptyValue  && formu["email"] === ""? <span style={estilo}>O campo email precisa ser preenchido</span>:''}

                <label htmlFor="gender">Genero: </label>
                <select name="gender" onChange={(e)=>handleChange(e)} style={{width:'300px'}}>
                    <option>-</option>
                    <option>M</option>
                    <option>F</option>
                </select>
                {emptyValue  && formu["gender"] === ""? <span style={estilo}>O campo genero precisa ser preenchido</span>:''}
                
                <button type='submit' style={{width:'200px', marginTop:'10px'}}>Envia</button>
            </form>
        </>
    )
}

export default login
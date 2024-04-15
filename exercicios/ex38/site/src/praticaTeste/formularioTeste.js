import React from 'react'
import {Obj} from './objetosForm/obj'
// nome, email, senha, cep, rua, numero
const formFields = Obj


const Input_formulario2 = () => {
    const [form, setForm] = React.useState(formFields.reduce((acc,field)=>{
        return{
            ...acc,
            [field.id]: ''
        }

    }, {}))

    function handleChange ( {target} ) {
        const {id, value} = target
        setForm({...form, [id]: value})
    }
    function criaçaoInput(){
        return formFields.map(({id, label, type})=> <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} onChange={handleChange} value={form[id]} />
            </div>)
    }


  return (
    <div>
        {criaçaoInput()}
    
    </div>
  )
}

export default Input_formulario2

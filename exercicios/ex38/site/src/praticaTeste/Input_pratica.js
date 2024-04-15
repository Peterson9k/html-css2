import { fromPairs, set } from 'lodash'
import React from 'react'

const Input = ({
    Name,
    label,
    value,
    onChange,
    type,
    placeholder
}) => {
    return (
        <div>
            <label htmlFor={Name}>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} value={value} key={Name} id={Name} />
        </div>
    )
}




const Input_pratica = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',

    })

    function handleChange({target}){
        const [id, value] = target
        setForm({...form, [id]: value})
    } 
    console.log(form.nome)
  
    return (
    <div>
        <Input Name='nome' label='Nome:' placeholder='Digite seu Nome' onChange={handleChange} value={form.nome} type='text'/>

    </div>
  )
}

export default Input_pratica
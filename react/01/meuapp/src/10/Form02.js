import React from 'react'
import Input from '../Form-Comp/Input'
import useForm from './useForm'
const Form02 = () => {
    const cep = useForm('cep')
    function handleSubmit(event){
        event.preventDefault()
        if(cep.validate()){
          console.log('enviou')
        } else {
          console.log('Nao enviado')
        }
      }

  return (
    <form onSubmit={handleSubmit}>
        <Input 
          id='cep' 
          label='Cep' 
          type='text' 
          placeholder="0000-000"
          {...cep}
        />
        <button>Enviar</button>
    </form>
  )
}

export default Form02
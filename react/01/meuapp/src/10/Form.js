import React from 'react'
import Input from '../Form-Comp/Input'


const Form = () => {
    const [cep, setCep] = React.useState(undefined)
    const [error, setError] = React.useState(null)


    function validateCep(value){
      if(value.length === 0 ){
        setError('Preencha um Valor')
        return false
      } else if(!/^\d{5}-?\d{3}$/.test(value)){
        setError('Preencha um CEP valido')
        return false
      } else {
        setError(null)
        return true
      }
    }

    function handleBlur({target}){
        validateCep(target.value)
      }

      function handleChange({target}){
        setCep(target.value)
        if(error) validateCep(target.value)
      }

      function handleSubmit(event){
        event.preventDefault()
        if(validateCep(cep)){
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
          value={cep} 
          placeholder="0000-000" 
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
    </form>
  )
}

export default Form
import React from 'react'

const types = {
    cep: { regex: /^\d{5}-?\d{3}$/, message: 'Cep invalido'},
    email: { regex: /\S+@\S=\.\S+/, message: 'Preencha um email valido'},
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
        message:
            'A senha deve conter no minimo 8 caractere, um digito'
    }

}




const useForm = (type) => {
    const [value, setValue] = React.useState(undefined);
    const [error, setError] = React.useState(null)

    function validate(value){
        if(type === false) return true
        if(value.length === 0){
            setError('Preencha um valor')
            return false
        } else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    function onChange({target}){
        if(error) validate(target.value)
        setValue(target.value)
      }



  return {
    value, 
    setValue,
    error,
    onChange, 
    onBlur: () => validate(value),
    validate: () => validate(value)

  }
}

export default useForm
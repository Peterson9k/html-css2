import React from 'react'



const Input = ({id, label, type, value, onChange, onBlur, placeholder, error}) => {

  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            name={id}
            id={id}
            value={value}
//          onChange={({target}) => setValue(target.value)}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
        />
        {error && <p>{error}</p>}
    </>
  )
}

export default Input
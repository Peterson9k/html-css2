import React from 'react'

const input_login = ({label,name,...props}) => {
   

  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name}{...props} style={{width:'300px'}}/>
    </>
  )
}

export default input_login
import React from 'react'

const input = ({label, id, ...props}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input type='text' id={id} {...props}/>
    </>
  )
}

export default input
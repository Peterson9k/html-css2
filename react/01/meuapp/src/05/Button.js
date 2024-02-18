import React from 'react'

const Button = ({text, valor,...props}) => {
    const buttonEstilo={
        margin:'5px', 
        borderRadius:'5px',
        padding:'10px',
        cursor:'pointer'
  }
  return (
    <>
    
    <button onClick={valor} style={buttonEstilo}{...props}>{text}</button>
    </>
  )
}

export default Button
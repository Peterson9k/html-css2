import React from 'react'

const input_login = ({l,n,id,place,...props}) => {
   

  return (
    <>
        <label htmlFor={id}>{l}</label>
        <input type="text"id={id} name={n}{...props} placeholder={place}/>
    </>
  )
}

export default input_login
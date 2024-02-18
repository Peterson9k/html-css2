import React from 'react'

const ButtonModal = ({setModal}) => {
    function handleClick(){
        setModal((ativo)=>!ativo)
    }
    
     
  return (
    <div>
        <button onClick={handleClick}>Abrir</button>
        <p>outro Teste</p>
    </div>
  )
}

export default ButtonModal
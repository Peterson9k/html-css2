import React from 'react'

const Modal = ({modal,setModal}) => {
    console.log(modal)
  return (
    <div>
        <button onClick={()=>setModal(!modal)}>Fechar</button>
        <p>testeeee</p>
    </div>
  )
}

export default Modal
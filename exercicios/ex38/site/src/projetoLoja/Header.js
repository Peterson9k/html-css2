import React from 'react'
import { useLocalStorageAddItens } from './Funçoes/useLocalStorage'
const Header = () => {
    const [item,setItem] = useLocalStorageAddItens((item)=>{
      
    })
 

   

  return (
    <>
        <button>Adiciona</button><br />
        <input type="text" onChange={({target})=>setItem(target.value)}/>
        <p>{item}</p>
        <p>{item}</p>
    </>
    
  )
}

export default Header
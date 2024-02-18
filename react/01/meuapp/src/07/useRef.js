    //const [zerarNot,setZerarNot] = React.useState(0)
    //clearTimeout(zerarNot)
    //setZerarNot(setTimeout(()=>{setNotficacao(null)},2000));

    //let teste = React.useRef(0)
    //clearTimeout(teste)
    //teste = setTimeout(()=>{setNotficacao(null)},2000)
import React from 'react'

const useRef = () => {
    const [carrinho,setCarrinho] = React.useState(0)
    const [notificacao, setNotficacao] = React.useState(null)
    const referencia = React.useRef(0)
    

    function handleClick(){
        setCarrinho(carrinho+1)
        setNotficacao('Item adicionado ao Carrinho')
        clearTimeout(referencia)
        referencia.current = setTimeout(()=>{
            setNotficacao(null)
        },2000)        
    }

  return (
    <>
        <button onClick={handleClick}>Adicionar Carrinho</button>  
        <p>{carrinho}</p>
        <p>{notificacao}</p>
    </>
  )
}

export default useRef
import React from 'react'

const Formulario = () => {

    const [dados,setDados] = React.useState('')
    const [addItem,setAddItem] = React.useState('')
    const chave = 'Itens'
    React.useEffect(()=>{
        window.localStorage.setItem(chave, dados)
    },[dados])

    function handleClick(){
        const pegarDados = window.localStorage.getItem(chave)

        setAddItem(pegarDados)
    }
    console.log(addItem)

  return (
        <>
           <button onClick={handleClick}>{dados}</button>
           <input type="text" onChange={({target})=>setDados(target.value)}/>
            <p>{addItem?addItem.map((dados)=><li>{dados}</li>):''}</p>           

        </>
    )
}

export default Formulario
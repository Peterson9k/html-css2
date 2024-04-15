import React from 'react'
import {UserContext} from './useContent'


const Produto = () => {
    const dados = React.useContext(UserContext)
    

    console.log(dados)
    return (
        <div>
            <button onClick={()=>dados.contarDois()}>Contar</button>
            <p>Produto: {dados.contar}</p>

        </div> 
    )
}

export default Produto
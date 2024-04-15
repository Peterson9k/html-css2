import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalLocalStorage = ({children,puxar})=>{
    const [dados,setDados] = React.useState('')
    
   
    React.useEffect(()=>{
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${puxar}`)
        .then((response)=>response.json())
        .then((json)=>setDados(json))
    },[puxar])

    function limparDados(){
        setDados('')
    }
    return(
        <GlobalContext.Provider value={{dados, setDados,puxar,limparDados}}>
            {children}
        </GlobalContext.Provider>
    )
}


// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuario acessar o app
// coloque os dados da API no contexto Global, dando acesso aos dados da mesma 
// defina uma funçao chamada limpaDados que e responsavel por zerar os dados de produto
// e exponha essa funçao no contexto Global
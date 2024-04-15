import React from 'react'


export  const UserContext = React.createContext()


export  const UserStorage = ({children}) => {
    const [contar,setContar] = React.useState(0)
    function contarUm(){
        setContar(contar+1)
    }
    function contarDois(){
        setContar(contar+2)
    }
    return <UserContext.Provider value={{contarUm,contarDois, contar}}>
                {children}
            </UserContext.Provider>
}
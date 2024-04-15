import React from 'react'

export function useLocalStorageAddItens(key,inicial){
    const [state,setState] = React.useState(()=>{
        const local = window.localStorage.getItem(key)
        return local ? local : inicial
    })

    React.useEffect(()=>{
        window.localStorage.setItem(key,state)
    },[key,state])


  return [state,setState]
}

export const globalContext = React.createContext()
export const globalStorage = ({children}) => {

    
    return  <globalContext.Provider >
                {children}
            </globalContext.Provider>
}

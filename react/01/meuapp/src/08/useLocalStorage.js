import React from 'react'

 export const useLocalStorage = (key,inicial) => {
    const [state,setState] = React.useState(()=>{
        const local = window.localStorage.getItem(JSON.stringify(key))
        return local ? local : inicial
    })

    React.useEffect(()=>{
        window.localStorage.setItem(key, state)
    }, [key , state])
  return [state , setState]
}

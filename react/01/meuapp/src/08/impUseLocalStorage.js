import React from 'react'
import {useLocalStorage} from './useLocalStorage'
function App() {
      const [produto, setProduto] = useLocalStorage('produto', '')
      function handleClick(){
            setProduto(JSON.parse(produto+1))
      }
    
return (          
      <>    
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
            <p>{produto}</p>

      </>  
) 

}

export default App
import React from 'react'
import Button from './Button'
const Produtos = ({produto,setProduto}) => {
        const [dados,setDados]= React.useState(null)
        const [carregando,setCarregando]= React.useState(null)
        React.useEffect(()=>{
            if(produto !== null){
              setCarregando(true)
                fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
                .then((response)=>response.json())
                .then((json)=>setDados(json))
                .catch((erro)=>console.log(erro))
                .finally(()=>console.log('Aguarde...'))
                setCarregando(false)
              }
          },[produto])
        React.useEffect(()=>{
            if(produto !== null)window.localStorage.setItem('produtos', JSON.stringify(produto))
          },[produto])

        function handleZerar(){
            setDados(null)
            setProduto(null)
        }
    return(
      <>  
          <Button text='Zerar'valor={handleZerar}/>
          {carregando && 'carregando...'}
          {!carregando && dados && 
           <>      
             
                <h1>{dados.nome}</h1>
                <p>{dados.preco}</p>
                
            </>
          }
        
</>
    )
  }

export default Produtos
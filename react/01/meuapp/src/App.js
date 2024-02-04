import React from 'react'
import Protutos from './03/Protutos'
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 Botoes, um para cada produto
// Ao clicar no botao faça um fetch a api e mostre os dados do produto
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch e realizado


const App = () => {
   const estilo={
      margin:'.5rem',
      backgroundColor:'blue',
      padding:'10px',
      color:'white',
      border:'none',
      cursor:'pointer'
   }
   
   const [dados,setDados]=React.useState(null)
   const [carregando,setCarregando]= React.useState(null)
   
   async function handleClick(event){
      setCarregando(true)
      const response =  await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,);
      const json = await response.json()
      setCarregando(false)
      setDados(json)
   }

   return (
     <>
         <button style={estilo} onClick={handleClick}>Notebook</button>
         <button style={estilo} onClick={handleClick}>Smartphone</button>
         <button style={estilo} onClick={handleClick}>Tablet</button>
         {carregando&&<p>Carregando...</p>}
         {!carregando && dados &&<Protutos dados={dados}/>}
     </>
   )
}

export default App
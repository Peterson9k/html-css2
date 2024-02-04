/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import'./app.scss'
const Teste = [
    {nome:'Pedro', idade:'15',comportamentos:['Bagunceiro', 'Esperto','Encrequeiro']},
    {nome:'Peterson', idade:'16',comportamentos:['Quieto', 'Esperto','Introvertido']},
]

function App() {


  return (
    <>
     <section className='sec'> {Teste.map((teste)=>(<ul>
                  <li>{teste.nome}</li>
                  <li>{teste.idade}</li>
                  <li>{teste.comportamentos.map((comportamentos)=>( <li> {comportamentos} </li>))}</li></ul>                    
      ))}</section>
    </>
  )
} 

export default App

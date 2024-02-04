import React from 'react'

const Protutos = ({dados}) => {
    const estiloImg = {
        width:'300px',
        height:'300px'

    }
  return (
    <>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}  style={estiloImg}/>
    </>
  )
}

export default Protutos
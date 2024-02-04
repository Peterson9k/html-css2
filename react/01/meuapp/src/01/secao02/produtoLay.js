import React from 'react'

const produtoLay = ({nome , propriedades}) => {
  return (
    <div style={{border:'1px solid black', margin:'1rem 0', padding:'1rem'}}>
        <p>{nome}</p>
        <ul>
            {propriedades.map(propriedades=>(
                <li>{propriedades}</li>
            ))}
        </ul>
    </div>
  )
}

export default produtoLay
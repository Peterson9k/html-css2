import React from 'react'
import styled from 'styled-components'



const Button = styled.button`
  background: ${({ativo}) => ativo};
  color: ${({ ativo2 }) =>  ativo2};
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;


`
const ContainerGeral = styled.div` display: flex; `
const ContainerItens = styled.div` flex: 1;`
const Titulo = styled.h1` color: blue; `
const Paragrafo = styled.p` color: tomato; padding: 10px; background: blue;`



const Preco = styled.p`
    background: ${({cor}) => cor};
    &:hover{
      background: tomato;
    }

`


const NovoCss = () => {
  const [ativo, setAtivo] = React.useState(false)

  function handleClick(){
    setAtivo(!ativo)
    console.log('ok')
  }
  return (
    <>
                  <ContainerGeral>
                        <ContainerItens>
                              <Button onClick={handleClick} ativo={ativo?'black':'white'} ativo2={ativo?'white':'black'}>Compre Aqui</Button>
                              <Titulo>Portugueses</Titulo>
                              <Paragrafo>Chegada Ao Brasil</Paragrafo>
                                <Preco cor='blue'> Testee</Preco>
                        </ContainerItens>
                  </ContainerGeral>
    </>
  )
}

export default NovoCss
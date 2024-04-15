import React from 'react'
import Radio from './radio'


const perguntas = [
    {
        pergunta: 'Qual metodo e utiliado para criar componentes?',
        options: [
            'React.MakeComponent()',
            'React.createComponent()',
            'React.createElement()',
        ],
        resposta: 'React.createElement()',
        id: 1
    },
    {
        pergunta: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: 2
    },
    {
        pergunta: 'Qual hook nao e nativo?',
        options: [
            'useEffect()',
            'useFetch()',
            'useCallback()',
        ],
        resposta: 'useFetch()',
        id: 3
    },
    {
        pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: [
            'set',
            'get',
            'use',
        ],
        resposta: 'use',
        id: 4
    },
]

const cssButton = {
    padding:'15px', 
    background:'blue', 
    color:'white', 
    fontSize:'14px', 
    margin:'5px', 
    cursor:'pointer'
}

const Form = () => {
    const [id, setId] = React.useState(0)
    const [options, setOptions] = React.useState(0)
    const [acertos, setAcertos] = React.useState(0)
    
    function validarResposta(event){
        event.preventDefault()
        const resposta = perguntas.map(item => item.resposta)
        if(resposta[id] === options){
            setAcertos(acertos+1)
        }
        if(options.length > 0){
            setId(id+1)
            setOptions(0)
        } 
    }


  return ( perguntas[id]?
            <form>
                
                { perguntas[id].pergunta }
                <Radio 
                    options={ perguntas[id].options } 
                    setValue={ setOptions } value={ options }
                />

                <button onClick={ validarResposta } style={ cssButton }>Proximo</button>

            </form>
            : <p> Voçe acertou {acertos} de {perguntas.push()}</p>
  )
}

export default Form
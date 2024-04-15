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


const Form = () => {

    const [respostas, setRespostas] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: ''
    })
    const [slide, setSlide] = React.useState(0)
    const [resultado, setResultado] = React.useState(null)
    function handleChange({target}){
        setRespostas({...respostas, [target.id]: target.value})
    }

    function resultadoFinal(){
        const corretas = perguntas.filter(
            ({ id, resposta }) => respostas[id] === resposta)

        setResultado(`Voçe acertou ${corretas.length} de ${perguntas.length}`)
    }

    function handleClick(){
        if(slide < perguntas.length - 1){
            setSlide(slide +1)
        } else {
            resultadoFinal()
            setSlide(slide + 1)
        }
    }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
            <Radio 
                active={slide === index}
                key={pergunta.id}
                {...pergunta} 
                onChange={handleChange} 
                value={respostas[pergunta.id]}    
            />
        ))}
        
        {resultado ? <p>{resultado}</p> : 
            <button onClick={handleClick}>Proxima</button> 
        }
    </form>
  )
}

export default Form
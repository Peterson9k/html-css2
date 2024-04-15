import React from 'react'

// Otimize o codigo do slide anterior
// Utilizando a array abaixo para mostra
// cada Checkbox na tela
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

export  const Ex_Checkbox = () => {
    const [cores, setCores] = React.useState([])

    function handleChange({target}){
        if(target.checked){
            setCores([...cores, target.value])
        } else {
            setCores(cores.filter((cor) => cor !== target.value))
        }
    }

    function handleChecked(cor){
        return cores.includes(cor)
    }

    function coresInput(){
        return coresArray.map((item, index) => <form>
            <label key={index}>
                <input
                    type='checkbox'
                    value={item + index}
                    onChange={handleChange}
                    checked={handleChecked(item + index)}
                />
                {item[0].toUpperCase() + item.substring(1)}
            </label>
        </form>
                
        ) 
    }
  return coresInput()
}

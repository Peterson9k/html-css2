import React from 'react'

const Obj = ['azul','vermelho']

const Checkbox = () => {
    const [checkboxCores, setCheckboxCores] = React.useState([])
    function handleChange({target}){
        if(target.checked){
            setCheckboxCores([...checkboxCores, target.value])
        } else {
            setCheckboxCores(checkboxCores.filter((cor)=> cor !== target.value))
        }

    }
  
    function handleChecked(cor) {
        return checkboxCores.includes(cor)
    }

    return (
    <form>
        <label>
            <input 
                type="checkbox" 
                value={Obj[0]}
                checked={handleChecked(Obj[0])}
                onChange={handleChange}
                />
                {Obj[0]}
        </label>  
        <label>
            <input 
                type="checkbox" 
                value={Obj[1]}
                checked={handleChecked(Obj[1])}
                onChange={handleChange}
                />
                {Obj[1]}
        </label>

    </form>
  )
}

export default Checkbox
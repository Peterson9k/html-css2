import React from 'react'

const Select = () => {
    const [select, setSelect] = React.useState("")


  return (
    <form>
        <select name="select" id="select" value={select} onChange={({target}) => setSelect(target.value)}>
          <option value="" disabled>Selecione</option>
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
        
        </select>   
        <p>{select}</p>
    </form>
  )
}

export default Select
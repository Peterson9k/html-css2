import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {
    const cssRadio = {
        display:'flex', 
        flexDirection:'column', 
        padding:'15px', 
        gap:'5px'
    }

    if(active === false) return null

  return (
    <fieldset style={cssRadio}>
        <legend>{pergunta}</legend>

        { options.map( option =>    
            <label key={option}>
                <input 
                    type="radio" 
                    value={option} 
                    onChange={onChange}
                    checked={value === option}
                    id={id}
                    
                />
                {option}
            </label>)}
    </fieldset>
  )
}

export default Radio
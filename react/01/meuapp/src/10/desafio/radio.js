import React from 'react'

const Radio = ({options, value, setValue, ...props}) => {
 
    const cssRadio = {
        border:'1px solid black',
        display:'flex', 
        flexDirection:'column', 
        padding:'15px', 
        gap:'5px'
    }

  return (
    <div style={cssRadio}>
        { options.map((option) => <label key={option}>
            
            <input 
                type="radio" 
                value={option} 
                checked={value === option} 
                onChange={ ({target}) => setValue(target.value) } 
                {...props}
            />
            {option}
        </label>
    )}
    </div>

  )
    
  
  
}

export default Radio
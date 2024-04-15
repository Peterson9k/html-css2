import React from 'react'

const Obj = {
    ItemCheck: ['notebook','smartphone','azul','vermelho'],
    ItemLabel: ['Notebook', 'Smartphone', 'Azul','Vermelho']
}

const Radio = () => {
    const [radio, setRadio] = React.useState(undefined)
    const [cor, setCor] = React.useState(undefined)
    function  handleChange({target}) {
        setRadio(target.value)
    }
  return (
    <form style={{ backgroundColor:
                        cor === Obj.ItemCheck[2]?'blue':'' |
                        cor === Obj.ItemCheck[3]?'red':'' 
                }}>
        <h2>Cores</h2>
        <label>
            <input
                type="radio"
                value={Obj.ItemCheck[2]}
                onChange={({target})=>setCor(target.value)}
                name='Cores'
                checked={cor === Obj.ItemCheck[2]}
                
                />
            {Obj.ItemLabel[2]}
        </label>
        <label>
            <input
                type="radio"
                value={Obj.ItemCheck[3]}
                onChange={({target})=>setCor(target.value)}
                name='Cores'
                checked={cor === Obj.ItemCheck[3]}
                
                />
            {Obj.ItemLabel[3]}
        </label>
        <p>{cor}</p>


        <h2>Produtos</h2>
        <label>
            <input
                type="radio" 
                name='Item_Produto'
                value={Obj.ItemCheck[0]}
                checked={radio === Obj.ItemCheck[0]}
                onChange={handleChange}
            />
            {Obj.ItemLabel[0]}
        </label> 
        <label>
            <input
                type="radio" 
                name='Item_Produto'
                value={Obj.ItemCheck[1]}
                checked={radio === Obj.ItemCheck[1]}
                onChange={handleChange}
            />
            {Obj.ItemLabel[1]}
        </label>


        
        <p>{radio}</p>

    </form>
  )
}

export default Radio
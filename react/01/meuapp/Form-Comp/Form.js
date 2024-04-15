import React from 'react'
import Input from './Input'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
const Form = () => {
    const [nome, setNome] = React.useState(undefined)
    const [email, setEmail] = React.useState(undefined)
    const [select, setSelect] = React.useState(undefined)
    const [radio, setRadio] = React.useState(undefined)
    const [checkbox, setCheckbox] = React.useState([])
    const [termos, setTermos] = React.useState(['Li e Aceito os Termos'])

  return  <form>

                <Select options={['notebook', 'tablet']} value={select} setValue={setSelect}/> <br />

                <Input id='nome' label='Nome' key='nome' type='text' value={nome} setValue={setNome}/> <br />

                <Input id='email' label='Email' key='email' type='email' value={email} setValue={setEmail}/> <br />
                
                <Radio key={radio} options={['Azul', 'Vermelho']}  value={radio} setValue={setRadio}/> <br />

                <Checkbox options={['Item1', 'Item2']} value={checkbox} setValue={setCheckbox}/><br />
                <Checkbox options={['Li e Aceito os Termos']} value={termos} setValue={setTermos}/>
            </form>

    

  
}

export default Form
import React from 'react'
// Faça um fetch (POST) para a API abaixo
// Para a criaçao ser aceita e necessario enviar dados de:
// nome, email, senha, cep, rua, numero, bairro, cidade, estado

const formFields = [  
    {
        id: 'nome',
        label: 'Nome:',
        type: 'text'
    },
    {
        id: 'email',
        label: 'Email:',
        type: 'email'
    }, 
    {
        id: 'senha',
        label: 'Senha:',
        type: 'password'
    }, 
    {
        id: 'cep',
        label: 'Cep:',
        type: 'number'
    }, 
    {
        id: 'rua',
        label: 'Rua:',
        type: 'text'
    }, 
    {
        id: 'numero',
        label: 'Numero:',
        type: 'number'
    }, 
    {
        id: 'bairro',
        label: 'Bairro:',
        type: 'text'
    },
    {
        id: 'cidade',
        label: 'Cidade:',
        type: 'text'
    },
    {
        id: 'estado',
        label: 'Estado:',
        type: 'text'
    }
]

const Fetch = () => {


    const [form, setForm] = React.useState(formFields.reduce((acc,field)=>{
        return {
            ...acc,
            [field.id]:''
        }
    }, {}))
    
    const [response, setResponse] = React.useState(null)
    function handleChange( {target} ){
        const {id, value} = target
        setForm({ ...form, [id]: value})
  }
  
 

    function handleSubmit(event){
        event.preventDefault()
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
        }).then(response => {
            setResponse(response)    
        }) 
    }

  return (<form action="" onSubmit={handleSubmit}>
                {formFields.map(( {id, label, type} )=><div key={id}>
                    <label htmlFor={id}>{label}</label><br />
                    <input type={type} id={id} onChange={handleChange} value={form[id]}/><br />
                </div>
                    
                )}
            
            {response && response.ok? <p>Formulario Enviado</p>:''}
            <button>Enviar</button>
        </form>
   
)
}

export default Fetch
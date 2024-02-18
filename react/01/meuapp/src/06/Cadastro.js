import React from 'react'
const Cadastro = () => {
    const [cadastro,setcadastro] = React.useState('')
    const [senha,setSenha] = React.useState('')
    const [validCadastro,setValidCadastro] = React.useState('')
    const [validSenha,setValidSenha] = React.useState('')

    let chaves = ['cadastro','senha']
    let validaçaoEmail = cadastro.toLocaleLowerCase().trim().match(/[a-z]+@[a-z]+\.com(\.br)*/)
    let validacaoSenha = senha.trim()
    
 
    function handleClickCadastro(event){   
        event.preventDefault()
        setValidSenha(validacaoSenha)
        setValidCadastro(validaçaoEmail)
        if(cadastro !== '' && senha !== '' && validCadastro && validSenha.length >=5){
            window.localStorage.setItem(chaves[0], JSON.stringify(cadastro))
            window.localStorage.setItem(chaves[1], JSON.stringify(senha))
            setcadastro('')
            setSenha('')
            window.location.href = '/login'
        }
    }    
   
    function handleSubmit(event){
        if(event.target.value.length === 4){
            setValidCadastro(cadastro)
        }
    }

    React.useEffect(()=>{
        window.localStorage.getItem(chaves[0])
        window.localStorage.getItem(chaves[1])
    })
   
    return (
      <form>    
            <label htmlFor="login">Email</label>
            <input  
                id='login'
                type='email'
                value={cadastro}
                onChange={(e)=>{
                    return(
                        setcadastro(e.target.value),
                        handleSubmit(e))
                }}/>
            {validCadastro === ""?<span>O campo precisa ser preenchido</span>:null}
            <label htmlFor='senha'>Senha</label>
            <input  id='senha'  type="password" onChange={({target})=>setSenha(target.value)} value={senha}/>
            <a href={cadastro !== '' && senha !== '' && validCadastro?'/login':''} onClick={handleClickCadastro}>Cadastrar</a>
      </form>
    )
}

export default Cadastro
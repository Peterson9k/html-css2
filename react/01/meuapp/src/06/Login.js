import React from 'react'
const Login = () => {
  const [login,setLogin] = React.useState('')
  const [senhaLogin,setSenhaLogin] = React.useState('')
  let chavesLogin = ['cadastro', 'senha']
  const loginDados = window.localStorage.getItem(chavesLogin[0]).trim()
  const senhaDados = window.localStorage.getItem(chavesLogin[1]).trim()
  React.useEffect(()=>{
    setLogin(JSON.parse(loginDados.trim()))
    setSenhaLogin(JSON.parse(senhaDados.trim()))
  },[loginDados, senhaDados])
  
 
  return(
    <>
        <label htmlFor="login">Email</label>
        <input  id='login'  type='email' onChange={({target})=>setLogin(target.value)} value={login}/>
        <label htmlFor="senha">Senha</label>
        <input  id='senha' type="password" onChange={({target})=>setSenhaLogin(target.value)} value={senhaLogin}/>
     

      <a href={login === JSON.parse(loginDados) && senhaLogin === JSON.parse(senhaDados)?'login/main':'/login'}>Entrar</a>
    
    </>
  )
}

export default Login
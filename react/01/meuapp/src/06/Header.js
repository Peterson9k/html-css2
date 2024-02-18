import React from 'react'
import Login from './Login'
import Cadastro from './Cadastro'
import './assets/style.css'
import Main from './Main'
const Header = () => {
    const [paginaAtual,setPaginaAtual] = React.useState('')
    const {pathname} = window.location
    React.useEffect(()=>{
          setPaginaAtual(pathname)     
   },[paginaAtual, pathname])
  
  return (
    <>
          

           {
            paginaAtual === '/'?
            <>
            <header>
             <h1 className='timeAnimation'>Seja bem Vindo...</h1>
             <div className='txtAnimado'>
                <span></span>
             </div>
              <ul>
                <li><a href="/cadastro">Cadastro</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </header>
              
            </>
            
           :null|
            paginaAtual === '/login/main'?<Main/>:null |
            paginaAtual === '/'?'':'/cadastro' |
            paginaAtual === '/login'?<Login/>:null | 
            paginaAtual === '/cadastro'?<Cadastro/>:null
            }
    
    </>
  )
}

export default Header
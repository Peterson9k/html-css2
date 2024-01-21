import logoMaisSabor from './assents/img/logo.svg'
import bannerImageHome from './assents/img/home/banner-image.webp'
import fundo from './assents/css/geral.css'

const Header = ()=>{
    const nave = {
        id:1,
        home:'Home',
        sobre:'Sobre',
        galeria:'Galeria',
        contato:'Contato'
    }

    const estiloA = {
        textDecoration: 'none',
        color: '#4D4A4F',
        fontSize: '1rem',
    }


    return(
        <>
        <header style={{padding:'40px 4% 20px',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
            <img src={logoMaisSabor} alt="logo-MaisSabor" style={{width: '100px'}}/>
            <nav>
                <ul style={{display:'flex',justifyContent: 'space-around',gap: '20px',listStyle: 'none'}}>
                    <li><a href="#" style={{textDecoration:'none',color:'#ff784f',fontSize:'1rem',}}>{nave.home}</a></li>
                    <li><a href="#" style={estiloA}>{nave.sobre}</a></li>
                    <li><a href="#" style={estiloA}>{nave.galeria}</a></li>
                    <li><a href="#" style={estiloA}>{nave.contato}</a></li>
                </ul>
            </nav>
        </header>     
        
        <section>
            <div style={{padding:'0px 4% 40px',display:'flex',alignItems:'center',gap:'40px',justifyContent: 'space-between'}}>
                <div style={{ display:'flex',flexDirection:'column',gap:'40px',width:'100%',maxWidth:'550px'}}>

                    <h1 style={{fontSize: '2.25rem',fontWeight:'bold',color:'black',lineHeight:'1.6',cursor: 'default'}}>
                        Descubra o Universo dos Temperos com a Mais Sabor!
                    </h1>
                    <p style={{color:'#4D4A4F',fontSize:'1.125rem',lineHeight:'1.4',cursor:'default',marginBottom:'20px'}}>
                            Bem-vindo à MaisSabor! A sua pitada de qualidade e sabor direto de
                            Sapucaia do Sul, RS. Temperos feitos com amor, inovação e a
                            experiência de anos temperando a vida. Aqui, você é a estrela de
                            nosso prato! Junte-se a nós na jornada do sabor excepcional. Seu
                            paladar agradece!
                    </p>

            <div style={{display:'flex',gap:'20px'}}>
            <a href="#" target="_blank">
              <button style={{borderRadius:'12px',width: '180px',height: '60px',fontSize: '1.125rem',fontWeight: 'bold',border: '0',transition: '.4s',color: 'white',cursor: 'pointer',backgroundImage:'linear-gradient(110deg, #ff784f 0%, #ce4f51 100%)'}}>Fazer pedido</button>
            </a>
            <a href="sobre.html" target="_blank">
              <button style={{borderRadius:'12px',width: '180px',height: '60px',fontSize: '1.125rem',fontWeight: 'bold',border: '0',transition: '.4s',color: 'white',cursor: 'pointer',backgroundColor:'#4D4A4F'
}}>Sobre nós</button>
            </a>
            </div>
                </div>
        <img style={{maxHeight:'550px',maxWidth: '100%'}} src={bannerImageHome} alt="bannerImageHome" />
      </div>
    </section>
        </>
    )

}

export default Header
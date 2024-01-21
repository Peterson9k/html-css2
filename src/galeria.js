import img1 from './assents/img/galeria/img1.jpg'
import img2 from './assents/img/galeria/img2.jpg'
import img3 from './assents/img/galeria/img3.jpg'
import img4 from './assents/img/galeria/img4.jpg'
import img5 from './assents/img/galeria/img5.jpg'
import img6 from './assents/img/galeria/img6.jpg'
import bannerImageHome from './assents/img/galeria/img-baner-galeria.png'
const Galeria = ()=>{
    const cssImg= {
        width: '300px',
        height: '300px',
        display: 'flex',
        padding: '30px'
    }

    return(
        <>
            <section style={{width:'100%',height:'800px'}}>
                <h2 style={{color:'#ff784f',textAlign:'center',marginTop:'50px',fontSize:'30px',fontWeight:'700',lineHeight:'48px',letterSpacing:'0em'}}>Nossa Galeria</h2>
                <h1 style={{fontSize:'36px',fontWeight:'700',lineHeight:'58px',letterSpacing:'0em',textAlign:'center'}}>Vislumbre o Colorido Mundo dos Temperos <br/>com essas fotos incríveis!</h1>
                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',flexDirection:'row',width:'900px',margin:'auto'}}>
                    <img src={img1} alt="Temperos" style={cssImg}/>
                    <img src={img2} alt="Temperos" style={cssImg}/>
                    <img src={img3} alt="Temperos" style={cssImg}/>
                    <img src={img4} alt="Temperos" style={cssImg}/>
                    <img src={img5} alt="Temperos" style={cssImg}/>
                    <img src={img6} alt="Temperos" style={cssImg}/>
                </div>

                <a href="galeria.html" target="_blank" style={{textDecoration:'none'}}>
                    <div class="temperos-buttom"><button style={{
                    textAlign: 'center',
                    width: '186px',
                    height: '70px',
                    borderRadius: '12px',
                    margin: 'auto',
                    display: 'block',
                    backgroundImage: 'linear-gradient(110deg, #ff784f 0%, #ce4f51 100%)',
                    cursor: 'pointer',
                    border: 'none',
                    transition: '.4s'
                    }}
                    ><p style={{color:'white',fontSize:'1.125rem',fontWeight:'bold'}}>Ver todos</p></button></div>
                </a>   
            </section>

            <section>
            <div style={{padding:'0px 4% 40px',display:'flex',alignItems:'center',gap:'40px',justifyContent: 'space-between'}}>
                <div style={{ display:'flex',flexDirection:'column',gap:'40px',width:'100%',maxWidth:'550px'}}>
                    <h2 style={{top:'20px',position:'relative',color:'#F5BB00'}}>DELIVERY</h2>
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
            </div>
                </div>
        <img style={{maxHeight:'550px',maxWidth: '100%'}} src={bannerImageHome} alt="bannerImageHome" />
      </div>
    </section>
        </>
    )
}

export default Galeria
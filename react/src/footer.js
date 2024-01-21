import logo from './assents/img/logo.svg'
import insta from './assents/img/footer/instagram-logo.webp'
import watts from './assents/img/footer/whatsapp-logo.webp'

const Footer=()=>{

    const footerGeral = {display: 'flex',flexDirection: 'column',gap: '12px'}
    const footerGeralH3={fontSize:'1.25rem',color:  'black',lineHeight: '1.6'}
    const footerGeralUl = {display: 'flex',flexDirection: 'column',gap: '24px',listStyle:'none'}
    const footerGeralliA = {textDecoration:'none',color:'#4D4A4F',transition: '.3s',padding:'3px'}
    const finalP_A = {color: '#4D4A4F',cursor:'pointer',margin:'3px',transition:'.2s',textDecoration:'none'}
 
    
    return (
        <>
            <footer>
                <div style={{
display:'grid',
gridTemplateColumns:'1.5fr 1fr 1fr 1fr',
placeItems:'flex-start center',
gap:'20px',
padding: '40px 4%'}}>
                    <div style={{
maxWidth:'250px',
width:'100%',
placeSelf:'flex-start',
color:'#4D4A4F'}}>
                        <img src={logo} alt="logo-MaisSabor" />
                        <p>Delivery rápido, temperos deliciosos, qualidade e sabor garantidos!</p>
                    </div>
                    <div style={footerGeral}>
                        <h3 style={footerGeralH3}>Empresa</h3>
                        <ul style={footerGeralUl}>
                            <li><a href="#" target="_blank" style={footerGeralliA}>Sobre nós</a></li>
                            <li><a href="#" target="_blank" style={footerGeralliA}>Galeria</a></li>
                            <li><a href="#" target="_blank" style={footerGeralliA}>Contato</a></li>
                        </ul>
                    </div>
                    <div style={footerGeral}>
                        <h3 style={footerGeralH3}>Serviços</h3>
                        <ul style={footerGeralUl}>
                            <li><a href="#" target="_blank" style={footerGeralliA}>Embalagem personalizada</a></li>
                            <li><a href="#" target="_blank" style={footerGeralliA}>Consultoria de receitas</a></li>
                            <li><a href="#" target="_blank" style={footerGeralliA}>Venda online</a></li>
                        </ul>
                    </div>

                    <div style={footerGeral}>
                        <h3 style={footerGeralH3}>Entre em contato</h3>
                        <ul style={footerGeralUl}>
                            <li><a href="#" style={footerGeralliA}>Formulário</a></li>
                            <li>
                                <a href="tel:+55(13)99132-4870" style={footerGeralliA} >
                                    <img src={watts}alt="Whatsapp" style={{width: '20px',height:'20px'}}/>+55 (13)99132-4870
                                </a>
                            </li>
                            <li>
                                <a href="#" style={footerGeralliA}>
                                    <img src={insta} alt="Instagram" style={{width: '20px',height:'20px'}}/>@maissabor
                                </a>
                            </li>
            <li><a href="mailto:contato@maissabor.com" style={footerGeralliA}>contato@maissabor.com</a></li>
          </ul>
        </div>
                </div>
                <div style={{display: 'flex',justifyContent:'space-between',borderTop:'1px solid #4D4A4F',paddingTop:'30px',paddingBottom:'10px',position:'relative',top:'100px'}}>
                    <p style={finalP_A}>Todos os direitos reservados....</p>
    
                    <div style={{display:'flex',gap:'20px'}}>
                        <a href="#" style={finalP_A}>Termos e Condições</a>
                        <a href="#" style={finalP_A}>Políticas de Privacidade</a>
                    </div>
                </div>
    
            </footer>

        </>
    )
}


export default Footer
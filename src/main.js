import fundo from './assents/css/geral.css'
import img1 from './assents/img/main/img1.svg'
import img2 from './assents/img/main/img2.svg'
import img3 from './assents/img/main/img3.png'
const Main = () =>{
    const textH1={
        fontFamily: 'Roboto, sans-serif',
        color: '#2A2A2A',
        fontSize: '1.9rem',
        lineHeight: '1.6'
    }

   const blocos = {
        textAlign:'center',
        marginTop:'10px',
        paddingTop:'20px',   
        backgroundColor: 'white',
        width: '300px',
        height: '429px',
        borderRadius: '12px',
        boxSizing: 'border-box',
        padding: '20px 5px 5px 5px',
        margin: 'auto',
        transition: 'transform 0.1s'
   }

   const cssButton = {
        padding: '10px',
        margin: 'auto',
        border: 'none',
        backgroundImage: 'linear-gradient(110deg, #ff784f 0%, #ce4f51 100%)',
        width: '186px',
        height: '70px',
        borderRadius: '12px',
        marginTop: '35px',
        cursor: 'pointer'
   }
   const cssh3 = {
    paddingTop:'15px',fontSize: '1.4rem',fontWeight: '700',lineHeight: '38px',textAlign: 'center'
   }

   const cssButtonP ={
    color:'white',fontSize:'20px',textAlign:'center',margin:'auto'
   }

    return(
        <>
            <main style={{
                backgroundImage:'linear-gradient(110deg, #ff784f 0%, #ce4f51 100%)',width:'100%',height:'760px'}}>
                <div style={{display:'block',textAlign:'center',paddingTop:'43px'}}>
                    <h2 style={{paddingBottom:'5px',color:'white'}}>Nossos Serviços</h2>
                    <h1 style={textH1}>Navegue pelos nossos serviços: qualidade,</h1>
                    <h1 style={textH1}>Sabor e paixao em cada detalhe.</h1>
                </div>
                <section style={{marginTop:'60px',display:'flex',justifyContent:'center'}}>
                    <section style={blocos}>

                        <img src={img1} alt="imgEmbalagem"/>
                        <div>
                        <h3 style={cssh3}>Embalagem <br/> Personalizada</h3>
                            <p style={{color: '#4D4A4F',fontSize: '1.1rem',fontWeight: '400',lineHeight: '25px',paddingTop: '10px',margin: 'auto',width: '243px',height: '100px'}}>
                                Oferecemos embalagens personalizadas de temperos com alta qualidade e design exclusivo.</p>               
                        <div><button style={cssButton}><p style={cssButtonP}>Saiba mais</p></button> </div>                    
                        </div>    

                    </section>

                    <section style={blocos}>
                        <img src={img2} alt="logo-Consulteri"/>
                        <div class="text-bloco-2">
                            <h3 style={cssh3}>Consultoria <br/> de Receitas</h3>
                            <p style={{ width: '243px',height: '100px',color: '#4D4A4F',fontSize: '1.1rem',fontWeight: '400',lineHeight: '25px',paddingTop: '10px',margin: 'auto'}}>Com a nossa consultoria, sua cozinha se transformará no palco de deliciosas criações culinárias!</p>
                            <div><button style={cssButton}><p style={cssButtonP}>Saiba mais</p></button></div>                   
                 </div>
                    </section>

                    <section style={blocos}>
                        <img src={img3} alt="logo-shopping" />
                        <div>
                            <h3 style={cssh3}>Venda online <br/> e entrega rápida</h3>
                            <p style={{color: '#4D4A4F',fontSize: '1.1rem',fontWeight: '400',lineHeight: '25px',paddingTop: '10px',margin: 'auto',width: '240px',height: '100px'}}>Clique, peça, e voilà! Em um piscar de olhos, nossos temperos frescos e saborosos chegam até você!</p>

                            <div><button style={cssButton}><p style={cssButtonP}>Saiba mais</p></button></div>
                        </div>
                    </section>
                </section>
            </main>
        
        </>
    )
}

export default Main
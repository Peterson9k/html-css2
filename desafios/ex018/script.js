
function iniTabNav(){

    const tagMenu = document.querySelectorAll('.js-tagmenu li')
    const tagContent = document.querySelectorAll('.js-tagcontent section')

    if(tagMenu.length && tagContent.length){
        tagContent[0].classList.add('ativo')


        function ativadotag(index){
            tagContent.forEach((content) =>{
                content.classList.remove('ativo')
            })
            tagContent[index].classList.add('ativo')
        }

        tagMenu.forEach((menu , content) =>{
            menu.addEventListener('click' , () => {
                ativadotag(content)
            })
        })}
    }
iniTabNav()

function faqEfeito(){
    const accordionItem = document.querySelectorAll('.js-accordion dt');
    const classAtivo = 'ativo'
    if(accordionItem.length){
    accordionItem[0].classList.add(classAtivo)
    accordionItem[0].nextElementSibling.classList.add(classAtivo)

    function ativaAccordion(){
        this.classList.toggle(classAtivo)
        this.nextElementSibling.classList.toggle(classAtivo)
    }

    accordionItem.forEach( (item) =>{
        item.addEventListener('click', ativaAccordion)
    })}
}
faqEfeito()

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      console.log(section)
  
      // forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  initScrollSuave();
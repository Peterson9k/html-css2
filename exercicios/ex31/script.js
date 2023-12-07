const form = document.querySelector("#form")
const nomeName = document.querySelector("#namei")
const nomeEmail = document.querySelector("#emaili")
const nomeSenha = document.querySelector("#senhai")
const nomeJob = document.querySelector("#job")
const nomeMsgi = document.querySelector("#msgi")



form.addEventListener("submit",(event)=>{
    event.preventDefault()
    
    if(nomeName.value === ""){
        alert('Por favor, preencha o seu Nome');return ;
    }

    if(nomeEmail.value === "" || !emailvali(nomeEmail.value)){
        alert('Por favor, preencha o seu email') ;return;  
    }

    if(!senhavali(nomeSenha.value, 8)){
        alert("A senha precisa ser no minimo 8 digitos."); return
    }

    if(nomeJob.value ===""){
        alert('Por favor, selecione a sua situaçao') ;return;  
    }

    if(nomeMsgi.value === ""){
        alert('Por favor, escreva uma mensagem') ;return;  
    }
    form.submit()
})

function emailvali(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){return true}
    return false
}

function senhavali(pass, minDigi){
    if(pass.length >= minDigi){
        return true
    }

    return false
}
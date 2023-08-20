
function keyBoard(event){
    if(event.key === 'Q'){
       document.body.classList.add('aoCLicar')
    }
}

window.addEventListener('keydown', keyBoard)

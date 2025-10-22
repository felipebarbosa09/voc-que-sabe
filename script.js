const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach (button => {
    button.addEventlistener ('click', function(){
     const atual = document.querySelector ('.ativo')
    const proximo = 'passo-' + this.getAttribute ('data-proximo')
    
    atual.className.remove ('ativo')
    document.getElementById(proximoPasso).classList.add('ativo')
    })
        
})
  

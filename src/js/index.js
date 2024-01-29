
/*

ALGORITMO - LOGICA DE PROGRAMAÇÃO DO SITE 

NA EMPRESA NAO DEIXAR O COMENTARIO DO CODIGO 


objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa de seleção de plataforma
    
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele.   
        ok
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado 
        ok
    Passo 3 - Pegar o clique do usuario no js 
        ok
    Passo 4- Quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça.


objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar no botão de fachar, o conteudo deve ser escondido.

    PASSO 1 - VERIFICAR SE O BOTAO JA ESTA ABERTO, SE SIM , DEVEMOS REMOVER A CLASSE ATIVO PARA QUE ELE ESCONDA O CONTEUDO NOVAMENTE.



*/

/* 
objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa de seleção de plataforma
ok

*/


const botao = document.querySelector(".btn-plataforma")
//console.log(botao);
const elementoPlataformas = document.querySelector(" .compre-ja .btn-plataforma .plataformas1")
//console.log(elementoPlataformas)
botao.addEventListener("click",() => {
//console.log(elementoPlataformas.classList), 
//elementoPlataformas.classList.add('ativo')

if(elementoPlataformas.classList.contains("ativo")){
    elementoPlataformas.classList.remove('ativo')
}else{
    elementoPlataformas.classList.add('ativo')
}

})



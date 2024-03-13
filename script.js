let imagem = document.querySelector('.card-foto');
let nome = document.querySelector('.nome');
let profissao = document.querySelector('.profissao');
let descricao = document.querySelector('.descricao');
let botaoDireito = document.querySelector('.bota-direita');
let botaoEsquerdo = document.querySelector('.botao-esquerda');
const surpresa = document.querySelector('.botao-surpresa');

let ordem = 0;

nome.innerHTML = '';
profissao.innerHTML = '';
descricao.innerHTML = '';



function atualizaTela() {
    nome.innerHTML = `${pessoas[ordem].nome}`;
    profissao.innerHTML = `${pessoas[ordem].profissao}`;
    descricao.innerHTML = `${pessoas[ordem].descricao}`;
    imagem.style.backgroundImage = `url(${pessoas[ordem].foto})`;
}


botaoEsquerdo.addEventListener('click', () =>{
    if(ordem < 1){
        ordem = pessoas.length -1;
        atualizaTela();
    }else{
        ordem --;
        atualizaTela();
    }
})

botaoDireito.addEventListener('click', () =>{

    if(ordem >= pessoas.length -1){
       ordem = 0;
      atualizaTela()
    }else{
        ordem ++;
        atualizaTela()
    }
    
});


surpresa.addEventListener('click', () =>{
    
    let surprise = pessoas;

    let random = Math.floor(Math.random()* pessoas.length);
    let telaAtual = surprise[random];

    nome.innerHTML = `${telaAtual.nome}`;
    profissao.innerHTML = `${telaAtual.profissao}`;
    descricao.innerHTML = `${telaAtual.descricao}`;

    
    

    console.log(telaAtual)
})


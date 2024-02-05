let numero = numeroAleatorio();
let tentativas = 1;

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function exibirTexto(tag, descricao) {
    let campo = document.querySelector(tag);
    campo.innerHTML = descricao;
}

function exibirInicioJogo() {
    exibirTexto('h1', 'Adivinhe o Número:');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirInicioJogo();

function verificarNumeroEscolhido() {
    let numeroEscolhido = document.querySelector('input').value;
    
    if (numeroEscolhido == numero) {
        exibirTexto('h1', 'Você acertou!');
        let exibirFinalJogo = `Você acertou com ${tentativas} tentativa(s)!`;
        exibirTexto('p', exibirFinalJogo);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroEscolhido > numero) {
            exibirTexto('p', 'Você errou! O número é menor.');
        } else {
            exibirTexto('p', 'Você errou! O número é maior.');
        }
        tentativas++;
        limparJogo();
    }
}

function limparJogo() {
    numeroEscolhido = document.querySelector('input');
    numeroEscolhido.value = '';
}

function reiniciarJogo() {
    numero = numeroAleatorio();
    limparJogo();
    tentativas = 1;
    exibirInicioJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








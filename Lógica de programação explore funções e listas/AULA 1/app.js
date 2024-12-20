function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirTextoNaTela('h1', 'Hora do Desafio')

function verificarConsole(){
    console.log('O botão foi clicado');
}

function verificarAlert(){
    alert('Eu amo JS')
}

function verificarPrompt(){
    let cidade = prompt('Nome da sua cidade')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function verificarSoma(){
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))
    let soma = num1 + num2;
    alert(`A soma é ${soma}`)
}
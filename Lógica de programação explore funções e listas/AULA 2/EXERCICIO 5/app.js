function retornarMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let maior = retornarMaior(numero1, numero2);
alert("O maior número é:", maior);

function calcularIMC(){
    let altura = parseFloat(prompt('Digite sua altura'));
    let peso = parseFloat(prompt('Digite seu peso'));
    let imc = peso / (altura * altura);
    return alert(imc);
}
calcularIMC();
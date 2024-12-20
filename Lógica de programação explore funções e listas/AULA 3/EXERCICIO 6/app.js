function calcularTabuada() {
    let tabuada = parseInt(prompt("Qual tabuada você deseja calcular? (1-10)"));
    if (isNaN(tabuada) || tabuada < 1 || tabuada > 10) {
        alert("Por favor, insira um número válido entre 1 e 10.");
        return;
    }
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${tabuada} x ${i} = ${tabuada * i}\n`;
    }
    alert(resultado);
}
calcularTabuada();

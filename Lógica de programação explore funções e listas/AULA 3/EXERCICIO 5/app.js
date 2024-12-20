function calcularCirculo(){
    let raio = Number(prompt('Digite o valor do raio'))
    let area = 3.14 * (raio ** 2);
    let perimetro = 2 * 3.14 * raio;
    return alert(`A área é ${area} e o perímetro é ${perimetro}`)
}
calcularCirculo();
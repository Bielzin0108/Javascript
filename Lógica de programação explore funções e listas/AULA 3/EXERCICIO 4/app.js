function calcularSala(){
    let altura = Number(prompt('Digite a altura'));
    let largura = Number(prompt('Digite a largura'));
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return alert(`A área da sala é ${area} e o perímetro é ${perimetro}`);
}
calcularSala();

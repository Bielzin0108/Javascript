function valorFatorial(){
    let num = Number(prompt('Digite um número'))
    let resultado = 1
    for (let i = 1; i <= num; i++) {
        resultado *= i
    }
    return alert(resultado)
}
valorFatorial()
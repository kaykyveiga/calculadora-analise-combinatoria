let fatorial_1 = 1;
let fatorial_2 = 1;

//Verifica se os campos estão vazios, ou foram preenchidos com letras.
function verificaNumero(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert('Todos os campos precisam ser preenchidos com números!')
        return location.reload();
    }
}

//Transforma o número para o seu fatorial. Houve a necessidade de criar dois loops pois em algumas funções tem  a necessidade de usar dois núemros fatorias.
function transformaFatorial(numero1, numero2) {
    fatorial_1 = 1;
    for (let i = 1; i <= numero1; i++) {
        fatorial_1 *= i;
    }
    fatorial_2 = 1;
    for (let i = 1; i <= numero2; i++) {
        fatorial_2 *= i;
    }
}
function calcularFatorial() {
    let n1 = document.getElementById('n1').value;
    n1 = parseFloat(n1);

    transformaFatorial(n1, 0);
    verificaNumero(n1, n1)

    const resultado = document.getElementById('resultado').value = fatorial_1;

    const mensagemFatorial = document.getElementById('mensagemFatorial').textContent = `A conta realizada foi ${n1}!`;
}

function calcularDivisaoFatorial() {
    let numerador = document.getElementById('numerador').value;
    numerador = parseFloat(numerador);

    let denominador = document.getElementById('denominador').value;
    denominador = parseFloat(denominador);

    verificaNumero(numerador, denominador);
    transformaFatorial(numerador, denominador);

    let divisao = fatorial_1 / fatorial_2;

    const resultado = document.getElementById('resultadoDivisaoFatorial').value = divisao;
    const mensagemDivisaoFatorial = document.getElementById('mensagemDivisaoFatorial').textContent = `A conta realizada foi ${numerador}! / ${denominador}!`;
}

function calcularArranjo() {
    let n = document.getElementById('n!').value;
    n = parseFloat(n);

    let p = document.getElementById('p!').value;
    p = parseFloat(p);
    p = n - p;
    verificaNumero(n, p);
    transformaFatorial(n, p)

    let arranjo = fatorial_1 / fatorial_2;

    const resultado = document.getElementById('resultadoArranjo').value = arranjo;
    const mensagemArranjo = document.getElementById('mensagemArranjo').textContent = `A conta realizada foi ${n}! / (${n} - ${n - p})!`;
}

function calcularCombinacao() {
    let n = document.getElementById('N!').value;
    n = parseFloat(n);
    let k = document.getElementById('k!').value;
    k = parseFloat(k);

    verificaNumero(n, k);
    transformaFatorial(n, k);

    let kSubtracao = n - k;
    let kSubtracaoFatorial = 1;
    for (let i = 1; i <= kSubtracao; i++) {
        kSubtracaoFatorial *= i;
    }

    let combinacao = fatorial_1 / (fatorial_2 * kSubtracaoFatorial);

    const resultado = document.getElementById('resultadoCombinacao').value = combinacao;
    const mensagemCombinacao = document.getElementById('mensagemCombinacao').textContent = `A conta realizada foi ${n}! / ${k}!(${n} - ${k})!`;
}

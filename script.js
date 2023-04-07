function calcularFatorial() {
    let n1 = document.getElementById('n1').value;
    n1 = parseFloat(n1);
    let fatorial = 1;
    for (let i = 1; i <= n1; i++) {
        fatorial *= i;
    }

    if (isNaN(n1)) {
        alert('Desculpe-me, mas é permitido somente o uso de números')
        return
    }

    const resultado = document.getElementById('resultado');
    resultado.value = fatorial;

    const mensagemFatorial = document.getElementById('mensagemFatorial');
    mensagemFatorial.innerHTML = `A conta realizada foi ${n1}!`
}

function calcularDivisaoFatorial() {
    let numerador = document.getElementById('numerador').value;
    numerador = parseFloat(numerador);
    let fatorialNumerador = 1;
    for (let i = 1; i <= numerador; i++) {
        fatorialNumerador *= i;
    }

    let denominador = document.getElementById('denominador').value;
    denominador = parseFloat(denominador);
    let fatorialDenominador = 1;
    for (let i = 1; i <= denominador; i++) {
        fatorialDenominador *= i;
    }

    if (isNaN(numerador) || isNaN(denominador)) {
        alert('Desculpe-me, mas é permitido somente o uso de números')
        return
    }

    let divisaoFatorial = fatorialNumerador / fatorialDenominador;

    const mensagemDivisaoFatorial = document.getElementById('mensagemDivisaoFatorial');
    mensagemDivisaoFatorial.innerHTML = `A conta realizada foi ${numerador}! / ${denominador}!`

    const resultado = document.getElementById('resultadoDivisaoFatorial');
    resultado.value = divisaoFatorial;
}

function calcularArranjo() {
    let n = document.getElementById('n!').value;
    n = parseFloat(n);
    let nFatorial = 1;
    for (let i = 1; i <= n; i++) {
        nFatorial *= i;
    }

    let p = document.getElementById('p!').value;
    p = parseFloat(p);
    let pSubtracao = n - p;
    let pFatorial = 1;
    for (let i = 1; i <= pSubtracao; i++) {
        pFatorial *= i;
    }

    if (isNaN(n) || isNaN(p)) {
        alert('Desculpe-me, mas é permitido somente o uso de números')
        return
    }

    let arranjo = nFatorial / pFatorial;

    const mensagemArranjo = document.getElementById('mensagemArranjo');
    mensagemArranjo.innerHTML = `A conta realizada foi ${n}! / (${n} - ${p})!`
    const resultado = document.getElementById('resultadoArranjo');
    resultado.value = arranjo;
}

function calcularCombinacao() {
    let n = document.getElementById('N!').value;
    n = parseFloat(n);
    let nFatorial = 1;
    for (let i = 1; i <= n; i++) {
        nFatorial *= i;
    }

    let k = document.getElementById('k!').value;
    k = parseFloat(k);
    let kFatorial = 1;
    for (let i = 1; i <= k; i++) {
        kFatorial *= i;
    }
    
    let kSubtracao = n - k;
    let kSubtracaoFatorial = 1;
    for (let i = 1; i <= kSubtracao; i++) {
        kSubtracaoFatorial *= i;
    }

    if (isNaN(n) || isNaN(k)) {
        alert('Desculpe-me, mas é permitido somente o uso de números')
        return
    }

    const mensagemCombinacao = document.getElementById('mensagemCombinacao');
    mensagemCombinacao.innerText = `A conta realizada foi ${n}! / ${k}!(${n} - ${k})!`

    let combinacao = nFatorial / (kFatorial * kSubtracaoFatorial);
    const resultado = document.getElementById('resultadoCombinacao');
    resultado.value = combinacao;

}

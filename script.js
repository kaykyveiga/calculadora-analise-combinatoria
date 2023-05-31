function verificaNumero(n1, n2) {
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      alert('Todos os campos precisam ser preenchidos com números!');
      location.reload();
    }
  }
  
  function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
  function calcularFatorialElemento() {
    const numero = parseFloat(document.getElementById('n1').value);
    verificaNumero(numero, numero);
    const fatorial = calcularFatorial(numero);
    document.getElementById('resultado').value = fatorial;
    document.getElementById('mensagemFatorial').textContent = `A conta realizada foi ${numero}!`;
  }
  
  function calcularDivisaoFatorial() {
    const numerador = parseFloat(document.getElementById('numerador').value);
    const denominador = parseFloat(document.getElementById('denominador').value);
    verificaNumero(numerador, denominador);
    const fatorialNumerador = calcularFatorial(numerador);
    const fatorialDenominador = calcularFatorial(denominador);
    const divisao = fatorialNumerador / fatorialDenominador;
    document.getElementById('resultadoDivisaoFatorial').value = divisao;
    document.getElementById('mensagemDivisaoFatorial').textContent = `A conta realizada foi ${numerador}! / ${denominador}!`;
  }
  
  function calcularArranjo() {
    const n = parseFloat(document.getElementById('n!').value);
    const p = parseFloat(document.getElementById('p!').value);
    const subtracao = n - p;
    verificaNumero(n, subtracao);
    const fatorialN = calcularFatorial(n);
    const fatorialP = calcularFatorial(subtracao);
    const arranjo = fatorialN / fatorialP;
    document.getElementById('resultadoArranjo').value = arranjo;
    document.getElementById('mensagemArranjo').textContent = `A conta realizada foi ${n}! / (${n} - ${subtracao})!`;
  }
  
  function calcularCombinacao() {
    const n = parseFloat(document.getElementById('N!').value);
    const k = parseFloat(document.getElementById('k!').value);
    verificaNumero(n, k);
    const fatorialN = calcularFatorial(n);
    const fatorialK = calcularFatorial(k);
    const subtracao = n - k;
    const fatorialSubtracao = calcularFatorial(subtracao);
    const combinacao = fatorialN / (fatorialK * fatorialSubtracao);
    document.getElementById('resultadoCombinacao').value = combinacao;
    document.getElementById('mensagemCombinacao').textContent = `A conta realizada foi ${n}! / ${k}!`
  }
  
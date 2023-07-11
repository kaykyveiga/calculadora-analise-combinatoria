import { verificaNumero } from "./verifica.js";
import { calcularFatorial } from "./transformaFatorial.js";

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
    document.getElementById('mensagemCombinacao').textContent = `A conta realizada foi ${n}! / ${k}!(${n}! - ${k}!) `
}

export { calcularCombinacao }
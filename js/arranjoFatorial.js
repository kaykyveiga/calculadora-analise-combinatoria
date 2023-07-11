import { verificaNumero } from "./verifica.js";
import { calcularFatorial } from "./transformaFatorial.js";

function calcularArranjo() {
    const n = parseFloat(document.getElementById('n!').value);
    const p = parseFloat(document.getElementById('p!').value);
    const subtracao = n - p;
    verificaNumero(n, subtracao);
    const fatorialN = calcularFatorial(n);
    const fatorialP = calcularFatorial(subtracao);
    const arranjo = fatorialN / fatorialP;
    document.getElementById('resultadoArranjo').value = arranjo;
    document.getElementById('mensagemArranjo').textContent = `A conta realizada foi ${n}! / (${n} - ${p})!`;
}
export { calcularArranjo }
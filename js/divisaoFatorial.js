import { verificaNumero } from "./verifica.js";
import { calcularFatorial } from "./transformaFatorial.js";

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

export { calcularDivisaoFatorial }
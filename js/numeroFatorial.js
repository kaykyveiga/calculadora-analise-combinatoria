import { verificaNumero } from "./verifica.js";
import { calcularFatorial } from "./transformaFatorial.js";
function calcularFatorialElemento() {
    const numero = parseFloat(document.getElementById('n1').value);
    verificaNumero(numero, numero);
    const fatorial = calcularFatorial(numero);
    document.getElementById('resultado').value = fatorial;
    document.getElementById('mensagemFatorial').textContent = `A conta realizada foi ${numero}!`;
}
export { calcularFatorialElemento }
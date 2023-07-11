function verificaNumero(n1, n2) {
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        alert('Todos os campos precisam ser preenchidos com números!');
        location.reload();
    }
}

export { verificaNumero }
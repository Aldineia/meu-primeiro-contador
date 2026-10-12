// 1. Seleção correta dos elementos (Singular: getElementById)
const currentNumberWrapper = document.getElementById('currentNumber'); 
const btnSubtrair = document.getElementById('subtrair');
const btnAdicionar = document.getElementById('adicionar');

let currentNumber = 0;

// Função que atualiza a tela e gerencia os desafios
function atualizarTela() {
    currentNumberWrapper.textContent = currentNumber;

    // DESAFIO 3: Cor vermelha para números negativos
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = ''; // Cor padrão
    }

    // DESAFIO 2: Desabilitar botões nos limites (-5 e 10)
    // Desabilita o "-" se chegar a -5 (assim permite testar o negativo do desafio 3)
    btnSubtrair.disabled = (currentNumber <= -5);

    // Desabilita o "+" se chegar a 10
    btnAdicionar.disabled = (currentNumber >= 10);
}

// DESAFIO 1: Eventos usando addEventListener de forma independente
btnAdicionar.addEventListener('click', function() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1; // Soma 1
        atualizarTela();
    }
});

btnSubtrair.addEventListener('click', function() {
    if (currentNumber > -5) {
        currentNumber = currentNumber - 1; // Subtrai 1
        atualizarTela();
    }
});

// Inicializa o estado dos botões na primeira execução
atualizarTela();

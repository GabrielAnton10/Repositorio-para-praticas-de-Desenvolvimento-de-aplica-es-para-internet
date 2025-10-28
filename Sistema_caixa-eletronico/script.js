let Deposito = document.getElementsByClassName("Deposito")[0];
let Saque = document.getElementsByClassName("Saque")[0];
let Saldo = document.getElementsByClassName("Saldo")[0];
let Valor = document.getElementsByClassName("Valor")[0];
let Confirmar = document.getElementsByClassName("Confirmar")[0];

let saldoAtual = 0;
let operacao = "";

Deposito.onclick = function () {
    operacao = 'DEPÓSITO';
    alert("Operação DEPÓSITO selecionada. Digite o valor e clique em CONFIRMAR!");
}
Saque.onclick = function() {
    operacao = 'SAQUE';
    alert("Operação SAQUE selecionada. Digite o valor e clique em CONFIRMAR!")
}

Saldo.onclick = function() {
    alert("Seu saldo atual é de: R$" + saldoAtual.toFixed(2));
    operacao = '';
}

Confirmar.onclick = function() {
    let valorOperacao = parseFloat(Valor.value);
    
    if (isNaN(valorOperacao) || valorOperacao <= 0) {
        alert("Digite um valor válido!")
        return
    }

    if (operacao === 'DEPÓSITO') {
        saldoAtual += valorOperacao;
        alert("Depósito realizado com sucesso. Novo saldo: " + saldoAtual.toFixed(2));
    } else if (operacao === 'SAQUE') {
        if (valorOperacao > saldoAtual) {
            alert("SALDO INSUFICIENTE!")
        } else {
            saldoAtual -= valorOperacao;
            alert("Saque realizado com sucesso. Novo saldo: " + saldoAtual.toFixed(2));
        }
    } else {
        alert("Por favor, selecione uma opção válida!")
    }

}

function converte_input(a) {
    return parseFloat(a);
}

function soma(a,b) {
    return a+b;
}

function subtrai(a,b) {
    return a-b;
}

function multiplica(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let operacao = "";
let numero1;
let numero2;
let resultado;

alert("Bem vindo a Calculadora!");

operacao = prompt('Digite a operação que deseja fazer: "Soma", "Subtração", "Multiplicação" ou "Divisão". Se quiser sair digite "sair"');

while (operacao != 'sair') {

    while (operacao != "Soma" && operacao != "Subtração" && operacao != "Multiplicação" && operacao != "Divisão" && operacao != "sair") {
        alert("Operação não reconhecida");
        operacao = prompt('Digite a operação que deseja fazer: "Soma", "Subtração", "Multiplicação" ou "Divisão". Se quiser sair digite "sair"');
    }

    if (operacao == 'sair') {
        break;
    }
    
    numero1 = converte_input(prompt('Digite o primeiro número: '))
    while (isNaN(numero1)) {
        alert('Parâmetro não reconhecido, por favor digite um número');
        numero1 = converte_input(prompt('Digite o primeiro número: '));
    }
    numero2 = converte_input(prompt('Digite o segundo número: '))
    while (isNaN(numero2 )) {
        alert('Parâmetro não reconhecido, por favor digite um número');
        numero2 = converte_input(prompt('Digite o segundo número: '));
    }

    switch (operacao) {
        case 'Soma':
            resultado = soma(numero1, numero2);
            break;
        case 'Subtração':
            resultado = subtrai(numero1, numero2);
            break;
        case 'Multiplicação':
            resultado = multiplica(numero1, numero2);
            break;
        case 'Divisão':
            resultado = divide(numero1, numero2);
            break;
    }

    alert(`O resultado é: ${resultado}`)

    operacao = prompt('Digite a operação que deseja fazer: "Soma", "Subtração", "Multiplicação" ou "Divisão". Se quiser sair digite "sair"');
}

alert("Obrigado por usar a calculadora!");
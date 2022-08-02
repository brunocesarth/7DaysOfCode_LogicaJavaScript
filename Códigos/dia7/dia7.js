let operacao;
let v1;
let v2;
let resultado;

while (operacao != 'sair') {
    operacao = prompt("Você deseja somar, subtrair, multiplicar, dividir ou sair?");
    if (operacao == 'somar') {
        v1 = prompt("Digite o primeiro número:");
        v2 = prompt("Digite o segundo número: ");
        resultado = soma(v1, v2);
        alert(`O resultado de ${v1} + ${v2} é ${resultado}`);
    } else if (operacao == 'subtrair') {
        v1 = prompt("Digite o primeiro número:");
        v2 = prompt("Digite o segundo número: ");
        resultado = subtracao(v1, v2);
        alert(`O resultado de ${v1} - ${v2} é ${resultado}`);
    } else if (operacao == 'multiplicar') {
        v1 = prompt("Digite o primeiro número:");
        v2 = prompt("Digite o segundo número: ");
        resultado = multiplicacao(v1, v2);
        alert(`O resultado de ${v1} * ${v2} é ${resultado}`);
    } else if (operacao == 'dividir') {
        v1 = prompt("Digite o primeiro número:");
        v2 = prompt("Digite o segundo número: ");
        resultado = divisao(v1, v2);
        alert(`O resultado de ${v1} / ${v2} é ${resultado}`);
    } else if (operacao == 'sair') {
        alert("Até a próxima!");
        break;
    }
}

function soma(n1, n2) {
    let result = Number(n1) + Number(n2);
    return result
}

function subtracao(n1, n2) {
    let result;
    if (n2 > n1) {
        result = n1 - n2;
    } else if (n1 > n2) {
        result = n2 - n1;
    }
    return result;
}

function multiplicacao(n1, n2) {
    let result = n1 * n2;
    return result;

}

function divisao(n1, n2) {
    let result = n1 / n2;
    return result.toFixed(2);
}
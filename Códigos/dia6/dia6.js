let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let addItem = "Sim";
let item;
let categoria;
let removeItem;

while (addItem == "Sim" || addItem == "sim") {
    addItem = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? Responda: 'Sim' ou 'Não', para adicionar ou responda 'Remover' para remover");
    if (addItem == "Sim" || addItem == "sim") {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa? frutas, laticínios, congelados, doces");
        if (categoria == "Frutas" || categoria == "frutas") {
            frutas.push(comida)
        } else if (categoria == "Laticinios" || categoria == "laticinios") {
            laticinios.push(comida);
        } else if (categoria == "Congelados" || categoria == "congelados") {
            congelados.push(comida);
        } else if (categoria == "Doces" || categoria == "doces") {
            doces.push(comida);
        }
    } else if (addItem == "Não" || addItem == "não") {
        alert(
            ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
        )
    } else if (addItem == "Remover" || addItem == "remover") {
        removeItem = prompt(
            ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
        )
    } else if (varrerListas() == false) {
        alert("O item não existe na lista")
    }
}

function varrerListas(item) {
    if (frutas.includes(item)) {
        let posicao = frutas.indexOf(item);
        removeItem(frutas, posicao);
    } else if (laticinios.includes(item)) {
        posicao = laticinios.includes(item);
        removeItem(laticinios, posicao);
    } else if (congelados.includes(item)) {
        posicao = congelados.indexOf(item);
        removeItem(congelados, posicao);
    } else if (doces.includes(item)) {
        posicao = doces.indexOf(item);
        removeItem(doces, posicao);
    } else {
        return false;
    }
}

function removeItemDaLista(lista, item) {
    lista.shift(item);
}
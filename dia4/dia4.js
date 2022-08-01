const resposta = prompt("Você gostaria de seguir em qual área? Digite 1 para Front-end e 2 para Back-end");

if (resposta == 1) {
    const respFrontend = prompt('Legal, e você quer aprender React ou Vue? Digite 1 para React e 2 para Vue');
} else if (resposta == 2) {
    const respBackend = prompt('Legal e você quer aprender C# ou Java? Digite 1 para C# e 2 para Java');
} else {
    alert('Sua resposta está fora do solicitado, até logo!');
};

const escolha = prompt("E você quer seguir se especializando na área escolhida ou vai se devolver para se tornar Fullstack? Digite 1 para especialista e 2 para Fullstack");

if (escolha == 1) {
    alert("Legal, continue estudando que você vai ser um ótimo especialista");
} else if (escolha == 2) {
    alert("Legal, continue estudando que você vai ser um ótimo dev fullstack");
} else {
    alert('Sua resposta está fora do solicitado, até logo!');
}

let resp;

while (resp != '') {
    resp = prompt("Tem alguma tecnologia que você gostaria de aprender?");
    if (resp == '') {
        alert("Tchauzinho!")
    } else (alert("Que legal!"))
}

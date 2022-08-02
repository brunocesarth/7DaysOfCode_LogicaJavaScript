let max = 10;
let min = 1;
const rand = Math.floor(Math.random() * (max - min + 1) + min)
let chute;
const num = rand;

for (let tentativa = 1 || chute != num; tentativa <= 3; tentativa++) {
    chute = prompt("Chute um número?");
    if (chute != num) {
        alert("Você errou, tente novamente!");
        tentativa + 1;
    } else if (chute == num) {
        alert("Parabéns, você acertou!");
        tentativa = 3;
    } else {
        alert("Poxa, você perdeu! Pode tentar novamente se quiser.");
    }
} 

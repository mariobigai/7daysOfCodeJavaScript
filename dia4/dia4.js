alert('Iniciando o jogo da advinhação!')

while(true) {
    let numTentetativas = 3;
    let tentativa = 1;
    // Gerando número aleatório entre 0 e 1
    let numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    let ganhou = false;

    while(tentativa<=numTentetativas){
        chute = prompt(`Advinhe número entre 0 e 10: Tentativa ${tentativa} de ${numTentetativas}`);
        if(chute == numeroSecreto) {
            ganhou = true
            break
        } else {
            tentativa += 1;
        }
    }
        
    if (ganhou) {
        alert(`Muito bem você acertou o número secreto era: ${numeroSecreto}`);
    } else {
        alert(`Que pena ... você perdeu! O número secreto era: ${numeroSecreto}`);
    }

    resetar = prompt("(1) - Jogar Novamente\n(Qualquer Tecla) - Sair do Jogo");
    if (resetar != 1) {
        break;
    }
}


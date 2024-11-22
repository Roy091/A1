function play(playerChoice) {
    const choices = ['piedra', 'papel', 'tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = '¡Empate!';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        result = `¡Ganaste! Elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;
    } else {
        result = `Perdiste. Elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;
    }

    document.getElementById('result-text').innerText = result;
}

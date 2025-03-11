

function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}

/*
Ігра "Камінь, ножиці, папір"
*/

//START CODE


function getComputerChoice() {
    const choices = ["камінь", "ножиці", "папір"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Нічия!";
    }

    if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        return "Ви виграли!";
    } else {
        return "Комп'ютер виграв!";
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    document.getElementById('gameResult').innerHTML = `
        <strong>Ваш вибір:</strong> ${userChoice} <br>
        <strong>Вибір комп'ютера:</strong> ${computerChoice} <br>
        <strong>Результат:</strong> ${result}
    `;
}
function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}

//START CODE

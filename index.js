window.onload = () => {
    const startBtn = document.getElementById('start');
    startBtn.addEventListener('click', () => {
        startGame();
})
}

function startGame() {
    const snakeGame = new Game();
    snakeGame.start();
}
window.onload = () => {
    window.addEventListener('keydown', (event) => { 
        if (event.code === 'Space') { 
        startGame();
        }
    })
/*     window.addEventListener('keydown', (event) => { 
        if (event.code === 'Space') { 
        window.location.reload();
        }
    }) */
    
    const startBtn = document.getElementById('start');
    startBtn.addEventListener('click', () => {
        startGame();
    }) 
}

function startGame() {
    const snakeGame = new Game();
    snakeGame.start();
}
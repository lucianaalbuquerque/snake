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
    loadSound()
    document.getElementById('playSound').addEventListener('click', playSound())
}

function startGame() {
    const snakeGame = new Game();
    snakeGame.start();
}

var soundID = 'thunder' 
function loadSound () {
    createjs.Sound.registerSound("/docs/assets/Club Insomnia.mp3", soundID);
}

function playSound() {
    createjs.Sound.play(soundID);
}
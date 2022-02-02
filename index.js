window.onload = () => {
    const snakeGame = new Game();
    let pause = false;

    window.addEventListener('keydown', (event) => { 
        if (event.code === 'Space') { 
        if (!pause) {
            snakeGame.start();
            pause = true;
        } else if (pause) {
            snakeGame.stop();
            window.location.reload()
        }
        }
    })
    loadSound()
    document.getElementById('playSound').addEventListener('click', playSound())
}

var soundID = 'thunder' 
function loadSound () {
    createjs.Sound.registerSound("/docs/assets/Club Insomnia.mp3", soundID);
}

function playSound() {
    createjs.Sound.play(soundID);
}
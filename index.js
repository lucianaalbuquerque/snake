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
}

window.onload = () => {
    const snakeGame = new Game('pro');
    let pause = false;
    let showInstruction = true;
    document.getElementById('instructionTxt').style.display = 'none';

    document.getElementById('easy').addEventListener('click' , () => {
        snakeGame.level = 'easy'})
    document.getElementById('pro').addEventListener('click' , () => {
        snakeGame.level = 'pro'})

    window.addEventListener('keydown', (event) => { 
        if (event.code === 'Space') { 
        if (!pause) {
            snakeGame.checkLevel()
            snakeGame.start();
            document.getElementById('title').style.display = 'none';
            pause = true;
        } else if (pause) {
            snakeGame.stop();
            window.location.reload()
        }
        }
    })

    document.getElementById('instructionBtn').addEventListener('click' , () => {
        if (showInstruction) {
            document.getElementById('instructionTxt').style.display = 'flex';
            showInstruction = false;
        }
        else if (!showInstruction) {
            document.getElementById('instructionTxt').style.display = 'none';
            showInstruction = true; 
        }
    })
}

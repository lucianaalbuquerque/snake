class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d')
        this.x = 0;
        this.y = 0;
        this.width = 700;
        this.height = 600;
        this.frames = 0;
        this.player = null;
        this.obstacles = [];
        this.target = [];
        this.intervalId = null;
        this.gradient = ['gray', 'yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'cyan', 'green']; //player.gradient;
}

start() {
    const snake = new Player(this, 50, 50);
    this.player = snake; //substituir por uma linha só? substituir por um array.

    const controls = new Controls(this);
    controls.keyboardEvents();

    this.intervalId = setInterval(() => {
        this.update()       
    }, 1000 / 60) 
}

clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //uso?
  }

update() {
    // draw snake, draw enemies, draw goals[i], checkGoal, draw scores, checkGameOver;
    this.player.advance();
    this.clear()
    this.player.draw();
    this.createObstacle();
    this.frames++
    this.drawScore();

    //this.checkMistake(); erro no player
}

createObstacle() {
    for (let i = 0; i <= this.gradient.length * 3; i++) { //CRIAR CONDICAO PRA NAO SE SOBREPOR.
        this.obstacles.push(new ObstacleBlock(this));
        this.obstacles[i].draw(this.gradient[1]) //Nao funcionou this.gradient.forEach((color) => { return `'${color}'`})
    }
}

checkMistake() {
    //const snake = this.player;
    const crashed = this.obstacles.some(function (obstacle) {
      return snake.crashWith(obstacle); 
    });
    if (crashed) {
        clearInterval(this.intervalId); // substituir por um efeito e mennos uma vida.
    }
}

drawScore() {
    let score = Math.floor(this.frames/50);
    this.ctx.font = '16px monospace';
    this.ctx.fillStyle = 'paleturquoise';
    this.ctx.fillText(`Score: ${score}`, 600, 20);
}

checkGameOver() {
    //if it touched wrong square 3 times;
    //add an effect
     //or create a stop function with this.
}
}


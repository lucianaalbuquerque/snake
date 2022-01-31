class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d')
        this.x = 0;
        this.y = 0;
        this.width = 700;
        this.height = 600;
        this.frames = 0;
        this.speed = 5;
        this.player = null; // Posso criar o objeto aqui?
        this.obstacles = [];
        this.target = [];
        this.intervalId = null;
        this.score = 1;
        this.gradient = ['gray', 'yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'cyan', 'green']; //player.gradient; aqui ou no target ou no player?
}

start() {
    this.player = new Player(this, 340, 300);

    const controls = new Controls(this);
    controls.keyboardEvents();

    this.update();
}

update() {
    this.clear();
    this.player.draw();
    this.changeSnakePos();
    this.createObstacle();
    this.createTarget();
/*  this.checkMistake(); //erro no player
    this.checkTargetCollision() */
    this.frames++
    this.drawScore();

    this.intervalId = setTimeout(() => {
        this.update();
    }, 1000/this.speed );
}

clear() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

createObstacle() {
    for (let i = 0; i <= this.gradient.length * 3; i++) { //CRIAR CONDICAO PRA NAO SE SOBREPOR OU ESPAÇAMENTO?.
    /*     const randomColor = this.gradient.forEach((color) => {console.log (color.toString())}); */
        this.obstacles.push(new ObstacleBlock(this));
        this.obstacles[i].draw() //Nao funcionou 
    } 
}

changeSnakePos() {
    this.player.x = this.player.x + this.player.speedX;
    this.player.y = this.player.y + this.player.speedY;
}

createTarget() { // ESTA ERRADO !
    this.ctx.fillStyle = this.gradient[7];
    this.ctx.fillRect(200, 200, 10, 10);
    this.target.push(new ObstacleBlock(this));
    if (this.player.x === 200 && this.player.y === 200) {
        //draw a new target just changing x y  in a random way and next color.
        this.player.tailLength++
        this.score++
        this.player.body.push( new Player(this, this.player.x, this.player.y))
    }
}

/* checkTargetCollision() {
    const crashed = this.target.some(function (target) {
      return this.player.crashWith(target); 
    });
    if (crashed) {

    }
}

checkMistake() {
    const crashed = this.obstacles.some(function (obstacle) {
      return this.player.crashWith(obstacle); 
    });
    if (crashed) {
        clearTimeout(this.intervalId); // substituir por um efeito e mennos uma vida.
    }
} */

drawScore() {
    let score = Math.floor(this.frames/10);
    this.ctx.font = '16px monospace';
    this.ctx.fillStyle = 'paleturquoise';
    this.ctx.fillText(`Score: ${score}`, 600, 20);
}

checkGameOver() {
    let gameOver = false;
    if (this.player.x < 0 || this.player.y < 0) {
        gameOver = true;
        console.log("Game Over")
    }
    //if it touched wrong square 3 times;
    //add an effect
     //or create a stop function with this.
}
}


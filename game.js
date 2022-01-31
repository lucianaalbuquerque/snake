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
        this.player = null; 
        this.obstaclesArr = [];
        this.target = [];
        this.intervalId = null;
        this.score = 1;
        this.lifes = 3;
        this.gradient = ['gray', 'yellow', 'orange', 'rgb(255,105,105)', 'pink', 'purple', 'blue', 'cyan', 'green']; //player.gradient; aqui ou no target ou no player?
}

start() {
    this.player = new Player(this, 340, 300);
    this.createObstacle();

    const controls = new Controls(this);
    controls.keyboardEvents();

    this.update();
}

update() {
    this.clear();
    this.createTarget();
    this.changeSnakePos();
    //this.drawObstacles();
    this.player.draw();
    this.checkMistake(); 
 /*   this.checkTargetCollision() */
    this.frames++
    this.drawScore();

    this.intervalId = setTimeout(() => {
        this.update();
    }, 1000/this.speed );
}

clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

createObstacle() {
    for (let i = 0; i <= this.gradient.length/3; i++) { 
    //  CRIAR CONDICAO PRA NAO SE SOBREPOR, NAO SOBREPOR SNAKEBODY OU ESPAÇAMENTO?.
    //  const randomColor = this.gradient.forEach((color) => {console.log (color.toString())}); 
        this.obstaclesArr.push(new ObstacleBlock(this));
        this.obstaclesArr[i].draw(this.gradient[3])
    } 
}

    drawObstacles() {
    for (let i=0; i<=this.obstaclesArr.length; i++) {
        let oneObstacle = this.obstaclesArr[i];
        oneObstacle.draw(this.gradient[3]);
        console.log(this.obstaclesArr)
    }
} 

changeSnakePos() {
    this.player.x = this.player.x + this.player.speedX;
    this.player.y = this.player.y + this.player.speedY;
    // c a n v a s  b o r d e r s :
    if (this.player.left() > this.canvas.width) {
        this.player.x = 0;
    } else if (this.player.right() <= 0) {
        this.player.x = this.canvas.width - this.player.width;
    } else if (this.player.top() <= 0) {
        this.player.y = this.canvas.height - this.player.height;
    } else if (this.player.bottom() > this.canvas.height) {
        this.player.y = 0; 
    }
}

createTarget() { // ESTA NO LUGAR ERRADO, SO TESTES!
    this.ctx.fillStyle = this.gradient[7];
    this.ctx.fillRect(200, 200, 10, 10);
//    this.target.push(new ObstacleBlock(this));
    if (this.player.x === 200 && this.player.y === 200) {
        //draw a new target just changing x y  in a random way and next color.
        this.player.bodyLength++
        this.score++;
    }
}

/* checkTargetCollision() {
    const crashed = this.target.some(function (target) {
      return this.player.crashWith(target); 
    });
    if (crashed) {

    }
}*/

checkMistake() {
    const snake = this.player;
    const crashed = this.obstaclesArr.some(function (obstacle) {
      return snake.crashWith(obstacle); 
    });
    if (crashed) {
        console.log(this.obstaclesArr)
        clearTimeout(this.intervalId);
        this.lifes-- // adicionar efeito.
    }
} 

drawScore() {
    let score = Math.floor(this.frames/10);
    this.ctx.font = '16px monospace';
    this.ctx.fillStyle = 'rgb(255,150,0)';
    this.ctx.fillText(`Score: ${this.score} / Lifes: ${this.lifes}`, 500, 20);
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


class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d')
        this.x = 0;
        this.y = 0;
        this.width = 700;
        this.height = 600;
        this.gridSize = 10;
        this.frames = 0;
        this.speed = 5; //Speed talvez sejam desnecessários
        this.player = null; 
        this.obstaclesArr = [];
        this.targetArr = []; // is it necessary? YES!!!
        this.intervalId = null;
        this.score = 1;
        this.lifes = 5;
        this.gradient = ['yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'cyan', 'green', 'black']; //last [black] - wont show. and it starts on [1] - orange
}

start() {
    this.player = new Player(this, 340, 300);
    this.createObstacle();
    this.createTarget();

    const controls = new Controls(this);
    controls.keyboardEvents();

    this.update();
}

update() {
    this.clear();
    this.changeSnakePos();
    this.drawObstacles();
    this.drawTarget();
    this.player.draw();
    this.checkObstacleCollison(); 
    this.checkTargetCollision();
    this.checkSnakeCollision();
    this.frames++;
    this.drawScore();
    this.checkGameOver();

    this.intervalId = setTimeout(() => {
        this.update();
    }, 1000/this.speed );
}

clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

changeSnakePos() {
    this.player.x = this.player.x + this.player.speedX;
    this.player.y = this.player.y + this.player.speedY;
    // c a n v a s  b o r d e r s :
    if (this.player.left() > this.canvas.width - this.player.width) {
        this.player.x = 0;
    } else if (this.player.right() < 0) {
        this.player.x = this.canvas.width - this.player.width;
    } else if (this.player.top() < 0) {
        this.player.y = this.canvas.height - this.player.height;
    } else if (this.player.bottom() > this.canvas.height) {
        this.player.y = 0; 
    }
}

createObstacle() {
    for (let i = 0; i < 15; i++) { 
    //  CRIAR CONDICAO PRA NAO SE SOBREPOR, NAO SOBREPOR SNAKEBODY OU ESPAÇAMENTO?.
    //  const randomColor = this.gradient.forEach((color) => {console.log (color.toString())}); 
        this.obstaclesArr.push(new ObstacleBlock(this));
    } 
}

drawObstacles() {
    for (let i=0; i < this.obstaclesArr.length; i++) {
        let oneObstacle = this.obstaclesArr[i];
        oneObstacle.draw('rgb(150,150,150)'); //this.gradient[this.score+1] this.gradient[(this.score - i) % 8]
    }
} 

createTarget() { 
    const nextTarget = new Target(this);
    const checkPlace = this.obstaclesArr.some((el) => el.x !== nextTarget.x && el.y !== nextTarget.y);
      if (checkPlace) {
        console.log('next target X, Y:', nextTarget.x, nextTarget.y); 
        this.targetArr.push(nextTarget);
      }
}

drawTarget() {
    for (let i=0; i < this.targetArr.length; i++) {
        let nextTarget = this.targetArr[i];
        nextTarget.draw(this.gradient[this.score]); 
    }
}

 checkTargetCollision() {
    const snake = this.player;
    const crashed = this.targetArr.some(function (target) {
      return snake.crashWith(target); 
    });
    if (crashed) {
        this.createTarget();
        this.drawTarget();
        this.targetArr.shift();
        this.createObstacle();
        this.drawObstacles();
        this.score++;
    }
}

checkObstacleCollison() {
    const snake = this.player;
    const crashed = this.obstaclesArr.some(function (obstacle) {
      return snake.crashWith(obstacle); 
    });
    if (crashed) {
        clearTimeout(this.intervalId);
        this.lifes-- // adicionar efeito.
    }
} 
    
checkSnakeCollision() {
    const snake = this.player;
    const snakeTail = [];
    for (let i =1; i < this.score; i++) {
        snakeTail.push(this.player.allCoordinates[i])};
    const crashed = snakeTail.some((el) => el.positionX === this.player.x && el.positionY === this.player.y) 
        if (crashed) {
            this.lifes = 0;
            this.checkGameOver()
    };
} 


drawScore() {
    let score = Math.floor(this.frames/10);
    this.ctx.font = '16px monospace';
    this.ctx.fillStyle = 'rgb(255,150,0)';
    this.ctx.fillText(`Score: ${this.score} / Lifes: ${this.lifes}`, 350, 20);
}

checkGameOver() {
    let gameOver = false;
    if (this.lifes === 0) {
        clearTimeout(this.intervalId);
        this.clear();
        this.ctx.font = '16px monospace';
        this.ctx.fillStyle = 'rgb(255,50,50)';
        this.ctx.fillText(`GAME OVER!!! Score: ${this.score} / Lifes: ${this.lifes}`, 120, 300);
        const setTimout = setTimeout(() => {document.location.reload(); console.log('gameover')}, 4000)
        
    }
}
}


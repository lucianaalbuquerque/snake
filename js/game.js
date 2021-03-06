class Game {
    constructor(level) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d')
        this.x = 0;
        this.y = 0;
        this.width = 700;
        this.height = 600;
        this.gridSize = 10;
        this.level = level;
        this.frames = 0;
        this.speed = 5; 
        this.player = null; 
        this.obstaclesArr = [];
        this.obstaclesQty = 15;
        this.targetArr = []; 
        this.targetColor = null;
        this.intervalId = null;
        this.score = 1;
        this.lifes = 5;
        this.gradient = ['#840764', '#BC2C61', '#FF1B4A', '#FF6D34', '#FFC242', '#94DA5E', '#00C582', '#00744F', '#212649'];  
    }

start() {
    const audio = new Audio('./docs/assets/sounds/mixkit-target.wav');
    this.player = new Player(this, 340, 300);
    this.createObstacle();
    this.createTarget();
    audio.play();

    const controls = new Controls(this);
    controls.keyboardEvents();

    this.update();
}

update() {
    this.clear();
    this.drawBackground()
    this.changeSnakePos();
    this.drawObstacles();
    this.drawTarget();
    this.player.draw();
    this.checkObstacleCollison(); 
    this.checkTargetCollision();
    this.checkSnakeCollision();
    this.frames++;
    this.speedDecrease();
    this.drawScore();
    this.checkGameOver();

    this.intervalId = setTimeout(() => {
        this.update();
    }, 1000/this.speed );
}

clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

stop() {
    clearTimeout(this.intervalId);
}

drawBackground() {
    this.ctx.fillStyle = 'rgb(23, 20, 48)';
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

changeSnakePos() {
    this.player.x = this.player.x + this.player.speedX;
    this.player.y = this.player.y + this.player.speedY;
    // c a n v a s  b o r d e r s :
    if (this.player.left() > this.canvas.width - this.player.width) {
        this.player.x = 0;
    } else if (this.player.right() <= 0) {
        this.player.x = this.canvas.width - this.player.width;
    } else if (this.player.top() < 0) {
        this.player.y = this.canvas.height - this.player.height;
    } else if (this.player.bottom() > this.canvas.height) {
        this.player.y = 0; 
    }
}

createObstacle() {
    for (let i = 0; i < this.obstaclesQty; i++) { 
        this.obstaclesArr.push(new ObstacleBlock(this));
    } 
}
   
drawObstacles() {;
    const obstacleColors = (i) => {
        if (!(this.targetColor === this.gradient[(this.obstaclesArr.length - i) % 9])) {
            return this.gradient[(this.obstaclesArr.length - i) % 9]
        }
    }

    for (let i=0; i < this.obstaclesArr.length; i++) {
        let oneObstacle = this.obstaclesArr[i];
        oneObstacle.draw(obstacleColors(i)); 
    }
} 

createTarget() { 
    const nextTarget = new Target(this);
    const checkPlace = this.obstaclesArr.some((el) => el.x !== nextTarget.x && el.y !== nextTarget.y);
      if (checkPlace) {
        this.targetArr.push(nextTarget);
      }
}

drawTarget() {
    for (let i=0; i < this.targetArr.length; i++) {
        let nextTarget = this.targetArr[i];
        nextTarget.draw(this.gradient[this.score % 9]); 
        this.targetColor = this.gradient[this.score % 9]
    }
}

 checkTargetCollision() {
    const audio = new Audio('./docs/assets/sounds/final-increase.wav');
    const snake = this.player;
    const crashed = this.targetArr.some(function (target) {
      return snake.crashWith(target); 
    });
    if (crashed) {
        this.createTarget();
        this.drawTarget();
        this.targetArr.shift();
        this.createObstacle();
        this.score++;
        audio.play();
    }
} 

checkObstacleCollison() {
    const snake = this.player;
    const audio = new Audio('./docs/assets/sounds/final-collision.wav');
    const crashed = this.obstaclesArr.some(function (obstacle) {
      return snake.crashWith(obstacle); 
    });
    if (crashed) {
        this.stop();;
        this.lifes--
        audio.play();
         // adicionar efeito.
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

speedDecrease() {
    if (this.score < 9) {
        this.speed = 7;
    } else if (this.score < 18) {
        this.speed = 6;
    } else if (this.score < 27) {
        this.speed = 5;
    }
}

checkLevel() {
    if (this.level === 'pro') {
        this.gridSize = 10;
        this.obstaclesQty = 15;
    } else if (this.level === 'easy') {
        this.gridSize = 20;
        this.obstaclesQty = 10;
        this.speed = 4;
    }
}


drawScore() {    
    let score = document.getElementById('score')
    score.innerHTML = `Score: ${this.score} / Lifes: ${this.lifes}`;
}

checkGameOver() {
    const audio = new Audio('./docs/assets/sounds/final-gameover.wav');
    if (this.lifes === 0) {
        this.stop();
        audio.play();
        this.clear();
        
        let gameoverTxt = document.getElementById('gameoverTxt');
        document.getElementById('gameover').style.display = 'flex';
        if (this.score == 1 ) {
            gameoverTxt.innerHTML = `G A M E O V E R<br> You haven't found any color!`
        } else if (this.score > 1) {
            gameoverTxt.innerHTML = `G A M E O V E R<br><br> You got ${this.score} colors!`;
        }

        const setTimout = setTimeout(() => {document.location.reload();}, 1500)
    }
}

}


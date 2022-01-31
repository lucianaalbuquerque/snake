class Player {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speedX = 10;
        this.speedY = 0;
        this.width = 10;
        this.height = 10;
        this.allCoordinates = [];
        this.gradient = ['gray', 'yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'cyan', 'green'];
    }

    // F O R   C R E A T I N G   C R A S H E S  -  B O R D E R S 
    left() {
        return this.x;
      }
  
      right() {
        return this.x + this.width;
      }
  
      top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.height;
      }
  
      crashWith(obstacle) {
        return (
          this.bottom() == obstacle.bottom() &&
          this.top() == obstacle.top() &&
          this.right() == obstacle.right() &&
          this.left() == obstacle.left()
        );
      }

    draw() {
      /* this.snakeBody.push(new Player(this.x, this.y)); */
      this.game.ctx.fillStyle = this.gradient[5];
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);

      this.allCoordinates.unshift({positionX: this.x, positionY: this.y})

      for (let i=0; i < this.game.score; i++) {
        this.game.ctx.fillStyle = this.gradient[i+1];
        console.log(this.allCoordinates[i])
        this.game.ctx.fillRect(this.allCoordinates[i].positionX, this.allCoordinates[i].positionY, this.width, this.height);
      }
    }

      
/*      var itemToRemove = this.snakeBody.shift();
        this.game.ctx.clearRect(itemToRemove[0], itemToRemove[1], 10, 10) */
        

/*         this.game.ctx.fillStyle = this.gradient[6];
        for (let i=0; i < this.snakeBody.length; i++) {
            let part = this.snakeBody[i];
            this.game.ctx.fillRect(part.x +10, part.y+10, this.width, this.height) //
        }

        this.snakeBody.push(new Player(this.x, this.y));
        if (this.snakeBody.length > this.tailLength) {
            this.snakeBody.shift();
        }

        this.game.ctx.fillStyle = this.gradient[5];
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height) */


}
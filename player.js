class Player {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speedX = this.game.gridSize;
        this.speedY = 0;
        this.width = this.game.gridSize;
        this.height = this.game.gridSize;
        this.allCoordinates = [];
        this.gradient = this.game.gradient;
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
      this.game.ctx.fillStyle = this.gradient[5];
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);

      this.allCoordinates.unshift({positionX: this.x, positionY: this.y})

/*       console.log('game score', this.game.score);
      console.log('allcordinates length', this.allCoordinates.length) */

      for (let i=0; i < this.game.score; i++) {
        this.game.ctx.fillStyle = this.gradient[(this.game.score - i) % 8];
        this.game.ctx.fillRect(this.allCoordinates[i].positionX, this.allCoordinates[i].positionY, this.width, this.height);
      }
    }
}

// ['yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'cyan', 'green', 'black']; - last [black] - wont show. and it starts on [1] - orange
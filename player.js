class Player {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.color = '';
        this.width = 10;
        this.height = 10;
        this.body = []; 
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
        return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right()
        );
      }

    draw() {
        this.game.ctx.fillStyle = this.gradient[5];
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    advance() {
        this.player.x += // last movement1;
        this.player.y += // last movement2;
    }
}
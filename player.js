class Player {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.color = '';
        this.width = 10;
        this.height = 10;
        this.body = [];
        this.tailLength = 1 
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
        
        //for loop here with all gradient colors.

        this.game.ctx.fillStyle = this.gradient[6];
        for (let i=0; i < this.body.length; i++) {
            let part = this.body[i];
            this.game.ctx.fillRect(part.x +10, part.y+10, this.width, this.height) //
        }

        this.body.push(new Player(this.x, this.y));
        console.log('body length:', this.body.length);
        console.log('taillength:', this.tailLength);
        if (this.body.length > this.tailLength) {
            this.body.shift();

        }

        this.game.ctx.fillStyle = this.gradient[5];
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)
    }


}
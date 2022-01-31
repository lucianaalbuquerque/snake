class ObstacleBlock {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * (this.game.width/10) +1) * 10;
        this.y = Math.floor(Math.random() * (this.game.height/10) +1) * 10; 
        this.width = 10;
        this.height = 10;
      //this.color = color;
    }

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
      
    draw(color) {
        this.game.ctx.fillStyle = color;
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
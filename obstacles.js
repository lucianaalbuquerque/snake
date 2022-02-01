class ObstacleBlock {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * (this.game.width/this.game.gridSize) +1) * this.game.gridSize;
        this.y = Math.floor(Math.random() * (this.game.height/this.game.gridSize) +1) * this.game.gridSize; 
        this.allCoordinates = [];
        this.width = this.game.gridSize;
        this.height = this.game.gridSize;
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
      const checkPlace = this.allCoordinates.some((el) => el.x === this.x && el.y === this.y);
      if (!checkPlace) {
        this.allCoordinates.push({positionX: this.x, positionY: this.y});
        this.game.ctx.fillStyle = color;
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)}
    }
}
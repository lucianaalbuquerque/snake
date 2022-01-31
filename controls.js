class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowRight':
                    if (this.player.x + this.player.width < 700 && this.player.speedX !== -10 ) { //conditional for the borders
                        this.player.speedY = 0;
                        this.player.speedX = 10;
                    }
                    break;
                case 'ArrowLeft':
                    if (this.player.x > 1 && this.player.speedX !== 10) { //conditional for the borders
                        this.player.speedY = 0;
                        this.player.speedX = -10;
                    }
                    break;
                    case 'ArrowUp':
                    if (this.player.y > 1 && this.player.speedY !== 10) { //conditional for the borders
                        this.player.speedY = -10;
                        this.player.speedX = 0;
                    }
                    break;
                case 'ArrowDown':
                    if (this.player.y + this.player.height < 600 && this.player.speedX !== -10) { //conditional for the borders
                        this.player.speedY = 10;
                        this.player.speedX = 0;
                    }
                    break;
                    default:
                        this.player.speedY = 0;
                        this.player.speedX = 0;
                    break;
            }
        });
    }
} 
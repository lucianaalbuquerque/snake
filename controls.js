class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    if (this.player.speedY !== -10) { //conditional for the borders
                        this.player.speedY = 10;
                        this.player.speedX = 0;
                    }
                    break;
                case 'ArrowRight':
                    if (this.player.speedX !== -10 ) { //conditional for the borders
                        this.player.speedY = 0;
                        this.player.speedX = 10;
                    }
                    break;
                case 'ArrowLeft':
                    if (this.player.speedX !== 10) { //conditional for the borders
                        this.player.speedY = 0;
                        this.player.speedX = -10;
                    }
                    break;
                case 'ArrowUp':
                    if (this.player.speedY !== 10) { //conditional for the borders
                        this.player.speedY = -10;
                        this.player.speedX = 0;
                    }
                    break;
                }
        });
    }
} 
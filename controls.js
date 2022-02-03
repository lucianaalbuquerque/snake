class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyboardEvents() {
        const audio = new Audio('./docs/assets/sounds/mixkit-move.wav');
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    if (this.player.speedY !== -this.game.gridSize) { 
                        this.player.speedY = this.game.gridSize;
                        this.player.speedX = 0;
                        audio.play()
                    }
                    break;
                case 'ArrowRight':
                    if (this.player.speedX !== -this.game.gridSize ) { 
                        this.player.speedY = 0;
                        this.player.speedX = this.game.gridSize;
                        audio.play()
                    }
                    break;
                case 'ArrowLeft':
                    if (this.player.speedX !== this.game.gridSize) { 
                        this.player.speedY = 0;
                        this.player.speedX = -this.game.gridSize;
                        audio.play()
                    }
                    break;
                case 'ArrowUp':
                    if (this.player.speedY !== this.game.gridSize) { 
                        this.player.speedY = -this.game.gridSize;
                        this.player.speedX = 0;
                        audio.play();
                    }
                    break;
                }
        });
    }
} 
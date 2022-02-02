class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyboardEvents() {
        const audio = new Audio('/docs/assets/mixkit-move.wav');
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    if (this.player.speedY !== -10) { 
                        this.player.speedY = 10;
                        this.player.speedX = 0;
                        audio.play()
                    }
                    break;
                case 'ArrowRight':
                    if (this.player.speedX !== -10 ) { 
                        this.player.speedY = 0;
                        this.player.speedX = 10;
                        audio.play()
                    }
                    break;
                case 'ArrowLeft':
                    if (this.player.speedX !== 10) { 
                        this.player.speedY = 0;
                        this.player.speedX = -10;
                        audio.play()
                    }
                    break;
                case 'ArrowUp':
                    if (this.player.speedY !== 10) { 
                        this.player.speedY = -10;
                        this.player.speedX = 0;
                        audio.play();
                    }
                    break;
                }
        });
    }
} 
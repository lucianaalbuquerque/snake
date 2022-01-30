class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowRight':
                    if (this.player.x + this.player.width < 700) { //conditional for the borders
                        this.player.x += 10;
                    }
                    break;
                case 'ArrowLeft':
                    if (this.player.x > 1) { //conditional for the borders
                        this.player.x -= 10;
                    }
                    break;
                    case 'ArrowUp':
                    if (this.player.y > 1) { //conditional for the borders
                        this.player.y -= 10;
                    }
                    break;
                case 'ArrowDown':
                    if (this.player.y + this.player.height < 600) { //conditional for the borders
                        this.player.y += 10;
                    }
                    break;
            }
        });
    }


} // class last curlybrakets
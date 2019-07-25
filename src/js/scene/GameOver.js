export default class GameOver {
    
    create() {
			let w = this.sys.game.config.width;
			let h = this.sys.game.config.height;
			let style = { font:"30px Arial", fill:"#000", align:"center" };
			let t = this.add.text(w/2, h/2, "You win!", style);
    }
    
    update() {
        
    }
    
}

export default class Title {
  
	create() {
		let w = this.sys.game.config.width;
		let h = this.sys.game.config.height;
		let style30 = { font:"30px Arial", fill:"#000" };
		let style50 = { font:"50px Arial", fill:"#000" };
		let titleText = this.add.text(w / 4, h / 4, "Phaser 3 Sample Game", style50);
		let helpText = this.add.text(w / 4, h / 4 + 150, "Press enter to play.", style30);
		
		this.input.keyboard.on('keydown_ENTER', function(key) {
			this.scene.start('MainGame');
		}, this);
	}

	update() {
		// do something on update
	}
}
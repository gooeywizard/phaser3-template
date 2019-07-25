export default class MainGame {

    preload() {
        // load... level... characters... etc
    }
    
    create() {
        console.debug('entering MainGame scene');

				const logo = this.add.image(400, 400, 'logo');
				
				this.input.keyboard.on('keydown_ENTER', function(key) {
					this.scene.start('GameOver');
				}, this);
    }
}
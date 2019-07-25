import logoAsset from '../../assets/gw_logo.png'

export default class Boot {

    preload() {
        // load graphics
				this.load.image('logo', logoAsset);
    }
    
    create() {
        console.debug('entering Boot scene');

        this.scene.start('Title');
    }
}
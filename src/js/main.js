import Phaser from 'phaser'

import Boot from './scene/Boot'
import Title from './scene/Title'
import MainGame from './scene/MainGame'
import GameOver from './scene/GameOver'

let game = new Phaser.Game({
    type: Phaser.CANVAS,
    width: 1000,
    height: 1000,
    // width: window.innerWidth * window.devicePixelRatio,
    // height: window.innerHeight * window.devicePixelRatio,
    backgroundColor: '#FFF',
    physics: {
        default: 'matter',
        matter: {
            debug: false
        }
    }
});

game.scene.add('Boot', Boot);
game.scene.add('Title', Title);
game.scene.add('MainGame', MainGame);
game.scene.add('GameOver', GameOver);

console.debug('created game');

//Start the boot process
game.scene.start('Boot');
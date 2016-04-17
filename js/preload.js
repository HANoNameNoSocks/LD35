var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);

        //Spritesheet
        this.game.load.spritesheet('sprFire', 'assets/img/enemyFire.png', 110,115,10);
 	 	this.game.load.spritesheet('sprWater', 'assets/img/enemyWater.png', 110,115,10);
 	 	this.game.load.spritesheet('sprPlant', 'assets/img/enemyPlant.png', 110,115,10);
		this.game.load.spritesheet('hero_idle', 'assets/img/hero_idle.png', 150,150,2); 
        this.game.load.spritesheet('hero_death', 'assets/img/hero_death.png', 400,290,25);

		//Image
		this.game.load.image("gametitle","assets/img/gametitle.png");
		this.game.load.image("play","assets/img/play.png");
		this.game.load.image("gameover","assets/img/gameover.png");
		this.game.load.image("victory","assets/img/victory.png");
		this.game.load.image("playRules","assets/img/playRules.png");
		this.game.load.image('fire','assets/img/fire.png');
		this.game.load.image('plant','assets/img/plant.png');
		this.game.load.image('water','assets/img/water.png');
		this.game.load.image('firedead','assets/img/firedead.png');
		this.game.load.image('plantdead','assets/img/plantdead.png');
		this.game.load.image('waterdead','assets/img/waterdead.png');
		this.game.load.image('fillAsset','assets/img/fillAsset.png');
		this.game.load.image('emptyAsset','assets/img/emptyAsset.png');
		this.game.load.image('item','assets/img/item.png');

		//Sound
    	game.load.audio('gameSound', 'assets/sound/gameSound.mp3');
    	game.load.audio('hit', 'assets/sound/hit.mp3');
    	game.load.audio('ennemyDeath', 'assets/sound/ennemyDeath.wav');
    	game.load.audio('playerDeath', 'assets/sound/playerDeath.wav');
    	game.load.audio('screenShake', 'assets/sound/screenShake.wav');
    	game.load.audio('spawnEnnemy', 'assets/sound/spawnEnnemy.wav');    	

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
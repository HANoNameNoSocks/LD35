var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
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
 	 	this.game.load.spritesheet('sprFire', 'assets/img/enemyFire.png', 110,115,10);
 	 	this.game.load.spritesheet('sprWater', 'assets/img/enemyWater.png', 110,115,10);
 	 	this.game.load.spritesheet('sprPlant', 'assets/img/enemyPlant.png', 110,115,10);

		this.game.load.image("hero", "assets/img/hero.png");

		this.game.load.image('fillAsset','assets/img/fillAsset.png');
		this.game.load.image('emptyAsset','assets/img/emptyAsset.png');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
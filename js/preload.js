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

		this.game.load.spritesheet('sprfire', 'assets/img/fire34x33x2.png', 34,33,2);
		this.game.load.spritesheet('sprplant', 'assets/img/plant34x33x2.png', 34,33,2);
		this.game.load.spritesheet('sprwater', 'assets/img/water34x33x2.png', 34,33,2);

		this.game.load.image("hero", "assets/hero.png");
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
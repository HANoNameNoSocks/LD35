var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("gameover","assets/gameover.png");
		this.game.load.image("victory","assets/victory.png");
		this.game.load.image("playRules","assets/playRules.png");

		this.game.load.image("hero", "assets/hero.png");
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
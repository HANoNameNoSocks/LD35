var victory = function(game){}

victory.prototype = {
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(160,160,"victory");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}
var victory = function(game){}

victory.prototype = {
  	create: function(){

  		winSound = game.add.audio('winSound');
  		if (winSound.isPlaying == false)
  		{
    	    winSound.play();
    	}else{
    		winSound.resume();
    	}	

  		var gameOverTitle = this.game.add.sprite(160,160,"victory");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		winSound.pause();
		this.game.state.start("TheGame");
	}
}
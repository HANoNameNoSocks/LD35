var gameOver = function(game){}

gameOver.prototype = {
	
  	create: function(){

  		loseSound = game.add.audio('loseSound');
  		if (loseSound.isPlaying == false)
  		{
    	    loseSound.play();
    	}else{
    		loseSound.resume();
    	}	

  		var gameOverTitle = this.game.add.sprite(160,160,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		loseSound.pause();
		this.game.state.start("TheGame");
	}
}
var gameOver = function(game){}

gameOver.prototype = {
	
  	create: function(){

  		loseSound = game.add.audio('loseSound');
<<<<<<< HEAD
=======

>>>>>>> dev
  		if (loseSound.isPlaying == false)
  		{
    	    loseSound.play();
    	}else{
    		loseSound.resume();
    	}	

<<<<<<< HEAD
  		var gameOverTitle = this.game.add.sprite(160,160,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
=======
  		var gameOverTitle = this.game.add.sprite(0,0,"gameover");
		

		this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.restartButton.onDown.add(this.playTheGame, this);
>>>>>>> dev
	},
	playTheGame: function(){
		loseSound.pause();
		this.game.state.start("TheGame");
	}
}
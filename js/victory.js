var victory = function(game){}

victory.prototype = {
  	create: function(){

  		winSound = game.add.audio('winSound',1,true);
  		if (winSound.isPlaying == false)
  		{
  			winSound.loop = true;
    	    winSound.play();
    	}else{
    		winSound.resume();
    	}	

<<<<<<< HEAD
<<<<<<< HEAD
  		var gameOverTitle = this.game.add.sprite(160,160,"victory");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
=======
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
  		var victoryTitle = this.game.add.sprite(0,0,"victory");
      
      this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.restartButton.onDown.add(this.playTheGame, this);
<<<<<<< HEAD
>>>>>>> dev
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
	},
	playTheGame: function(){
		winSound.pause();
		this.game.state.start("TheGame");
	}
}
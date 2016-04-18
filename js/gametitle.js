var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){

  		introSound = game.add.audio('introSound');

<<<<<<< HEAD
=======
  		this.game.add.sprite(0,0,"gametitle");

  		this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.startButton.onDown.add(this.playTheGame, this);

>>>>>>> dev
  		if (introSound.isPlaying == false)
  		{
  			introSound.loop = true;
    	    introSound.play();
    	}else{
    		introSound.resume();
    	}	
<<<<<<< HEAD

		var gameTitle = this.game.add.sprite(160,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
=======
>>>>>>> dev
	},
	playTheGame: function(){
		introSound.pause();
		this.game.state.start("TheGame");
	}
} 
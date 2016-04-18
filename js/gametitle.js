var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){

  		introSound = game.add.audio('introSound');

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
  		this.game.add.sprite(0,0,"gametitle");

  		this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.startButton.onDown.add(this.playTheGame, this);

<<<<<<< HEAD
>>>>>>> dev
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
  		if (introSound.isPlaying == false)
  		{
  			introSound.loop = true;
    	    introSound.play();
    	}else{
    		introSound.resume();
    	}	
<<<<<<< HEAD
<<<<<<< HEAD

		var gameTitle = this.game.add.sprite(160,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
=======
>>>>>>> dev
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
	},
	playTheGame: function(){
		introSound.pause();
		this.game.state.start("TheGame");
	}
} 
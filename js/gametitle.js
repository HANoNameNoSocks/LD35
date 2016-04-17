var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){

  		introSound = game.add.audio('introSound');

  		if (introSound.isPlaying == false)
  		{
  			introSound.loop = true;
    	    introSound.play();
    	}else{
    		introSound.resume();
    	}	

		var gameTitle = this.game.add.sprite(160,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		introSound.pause();
		this.game.state.start("TheGame");
	}
} 
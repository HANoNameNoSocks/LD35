var theGame = function(game) {
	this.cursors = null;
}

theGame.prototype = {
  	create: function() {
  		var playRules = this.game.add.sprite(160,160,"playRules");
  		this.cursors = this.game.input.keyboard.createCursorKeys();
	},

	update: function(){
		if (this.cursors.left.isDown) {
			this.win();
		} else if (this.cursors.right.isDown) {
			this.lose();
		}

	},

	lose: function() {
		this.game.state.start("GameOver");	
	},

	win: function() {
		this.game.state.start("Victory");
	}
}
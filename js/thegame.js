var theGame = function(game) {
	this.game = game;

	this.hero = null;
	this.ennemy = null;

	this.ennemyManager = null;
	this.fightManager = null;
	this.referee = null;
	this.music = null;

}

theGame.prototype = {
  	create: function() {

  		music = game.add.audio('gameSound');

  		if (music.isPlaying == false)
  		{
    	    music.play();
    	}else{
    		music.resume();
    	}	

  		this.hero = new Hero(this.game);
  		this.hero.create();

  		this.referee = new RefereeManager(this.game);
  		this.referee.create();

  		this.fightManager = new FightManager();
  		this.fightManager.create();

  		this.ennemyManager = new EnnemyManager();
  		this.ennemyManager.create();

  		this.ennemy = this.ennemyManager.getEnnemy();
  		console.log('ennemy type : ' + this.ennemy.getType());
		console.log('player type : ' + this.hero.getType());
	},

	update: function() {
		this.ennemy = this.ennemyManager.getEnnemy();

		if (this.referee.hasLost) {
			console.log('you lose');
			music.pause();
			game.time.events.add(Phaser.Timer.SECOND * 1, this.lose, this);
		} else if (this.referee.hasWon) {
			console.log('you win');
			music.pause();
			this.win();
		} else {
			if (!this.ennemy.isDead) {
				console.log('FIGHT');
				var fightResult = this.fightManager.fight(this.hero, this.ennemy);

				this.referee.judge(fightResult, this.ennemy);
			}
		}

		this.hero.update();	
		this.ennemyManager.update();
		this.referee.update();
	},

	lose: function() {
		this.game.state.start("GameOver");	
	},

	win: function() {
		this.game.state.start("Victory");
	}
}
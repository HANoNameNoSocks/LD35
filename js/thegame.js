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
	},

	update: function() {
		this.ennemy = this.ennemyManager.getEnnemy();

		if (this.referee.hasLost) {
			music.pause();
			game.time.events.add(Phaser.Timer.SECOND * 2, this.lose, this);
		} else if (this.referee.hasWon) {
			music.pause();
			this.win();
		} else {
			if (!this.ennemy.isDead) {
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
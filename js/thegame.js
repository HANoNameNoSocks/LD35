var theGame = function(game) {
	this.game = game;

	this.hero = null;
	this.ennemy = null;

	this.ennemyManager = null;
	this.fightManager = null;
	this.referee = null;

}

theGame.prototype = {
  	create: function() {
  		this.hero = new Hero(this.game);
  		this.hero.create();

  		this.referee = new ReferyManager(this.game);
  		this.referee.create();

  		this.fightManager = new FightManager();
  		this.fightManager.create();

  		this.ennemyManager = new EnnemyManager();
  		this.ennemyManager.create();

  		this.ennemy = ennemyManager.getEnnemy();
	},

	update: function() {
		this.ennemy = this.ennemyManager.getEnnemy();

		if (this.referee.hasLost()) {
			this.lose();
		} else if (this.referee.hasWon()) {
			this.win();
		} else {
			if (this.hero.isFighting && !this.ennemy.isDead) {
				var fightResult = this.fightManager.fight(this.hero, this.ennemy);

				this.referee.judge(fightResult);
			}
		}

		this.hero.update();	
		this.ennemyManager.update();
		this.fightManager.update();
		this.referee.update();
	},

	lose: function() {
		this.game.state.start("GameOver");	
	},

	win: function() {
		this.game.state.start("Victory");
	}
}
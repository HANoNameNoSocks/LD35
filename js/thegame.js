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
			this.lose();
		} else if (this.referee.hasWon) {
			console.log('you win');
			music.pause();
			this.win();
		} else {
			if (!this.ennemy.isDead) {
				var fightResult = this.fightManager.fight(this.hero, this.ennemy);

				if (this.ennemy.isDraw) {
					if (this.timeCheck == null) {
						this.timeCheck = this.game.time.now;
					}
					this.hero.mustBash = true;

					var tempEnnemyVelocity = this.ennemy.ennemySprite.body.velocity.x;
					this.ennemy.ennemySprite.body.velocity.x = 0;

					var time = this.game.time.now - this.timeCheck;

					if (this.game.time.now - this.timeCheck < 1500) {
						this.hero.update();
					} else {
						var bashCounter = this.hero.getBashCount();
						this.hero.mustBash = false;
						this.ennemy.setisDead(true);
							this.timeCheck = null;

						if (bashCounter >= 5) {
							fightResult = 1;
						} else {
							fightResult = -1;
							this.ennemy.ennemySprite.body.velocity.x = tempEnnemyVelocity;
						}
					}
				}

				this.referee.judge(fightResult, this.ennemy);
			}
		}

		this.hero.update();
		this.ennemyManager.update();
		this.referee.update();
	},

	lose: function() {
		music.pause();
		this.game.state.start("GameOver");	
	},

	win: function() {
		music.pause();
		this.game.state.start("Victory");
	}
}
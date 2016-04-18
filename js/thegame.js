var theGame = function(game) {
	this.game = game;

	this.hero = null;
	this.ennemy = null;

	this.ennemyManager = null;
	this.fightManager = null;
	this.referee = null;
	this.music = null;
	this.timeCheck = null;

}

theGame.prototype = {
  	create: function() {

  		music = game.add.audio('gameSound');

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
  		game.stage.backgroundColor = "#d2e1c3";
  		game.add.tileSprite(0 , 0, 800, 600, 'background');

<<<<<<< HEAD
>>>>>>> dev
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
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
				if (this.ennemy.isDraw) {
				if (this.timeCheck == null) {
					this.timeCheck = this.game.time.now;
				}
				this.hero.mustBash = true;

				var tempEnnemyVelocity = this.ennemy.ennemySprite.body.velocity.x;
<<<<<<< HEAD
=======
				this.ennemy.setisDraw(true);
>>>>>>> dev
				this.ennemy.ennemySprite.body.velocity.x = 0;

				if (this.game.time.now - this.timeCheck < 1500) {
					this.hero.update();
				} else {
					var bashCounter = this.hero.getBashCount();
					this.hero.mustBash = false;
					this.timeCheck = null;

					if (bashCounter >= 5) {
						
						this.ennemy.setisDead(true);
						fightResult = 0;
					} else {
						fightResult = -1;
						this.ennemy.ennemySprite.body.velocity.x = tempEnnemyVelocity;
<<<<<<< HEAD
=======
						this.ennemy.setisDraw(false);
						this.hero.setIsDead(true);
>>>>>>> dev
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
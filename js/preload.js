var preload = function(game){}

preload.prototype = {
	preload: function(){ 
<<<<<<< HEAD
<<<<<<< HEAD
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
=======
        var loadingBar = this.add.sprite(200,240,"loading");
>>>>>>> dev
=======
        var loadingBar = this.add.sprite(200,240,"loading");
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
        this.load.setPreloadSprite(loadingBar);

        //Spritesheet
        this.game.load.spritesheet('sprFire', 'assets/img/enemyFire.png', 110,115,10);
 	 	this.game.load.spritesheet('sprWater', 'assets/img/enemyWater.png', 110,115,10);
 	 	this.game.load.spritesheet('sprPlant', 'assets/img/enemyPlant.png', 110,115,10);
        this.game.load.spritesheet('sprFireDeath', 'assets/img/enemyFireDeath.png', 215,160,15);
 	 	this.game.load.spritesheet('sprWaterDeath', 'assets/img/enemywaterDeath.png', 215,160,15);
 	 	this.game.load.spritesheet('sprPlantDeath', 'assets/img/enemyPlantDeath.png', 215,160,15);

		this.game.load.spritesheet('hero_idle', 'assets/img/hero_idle.png', 150,150,2); 
        this.game.load.spritesheet('hero_death', 'assets/img/hero_death.png', 400,290,25);
		this.game.load.spritesheet('hero_fire', 'assets/img/hero_fire.png', 150,265,10); 
		this.game.load.spritesheet('hero_plant', 'assets/img/hero_plant.png', 150,265,10); 
		this.game.load.spritesheet('hero_water', 'assets/img/hero_water.png', 150,265,10); 

		//Image
<<<<<<< HEAD
<<<<<<< HEAD
		this.game.load.image("gametitle","assets/img/gametitle.png");
		this.game.load.image("play","assets/img/play.png");
		this.game.load.image("gameover","assets/img/gameover.png");
		this.game.load.image("victory","assets/img/victory.png");
=======
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
		this.game.load.image("gametitle","assets/img/gametitle.jpg");
		this.game.load.image("play","assets/img/play.png");
		this.game.load.image("gameover","assets/img/gameover.jpg");
		this.game.load.image("victory","assets/img/victory.jpg");
<<<<<<< HEAD
>>>>>>> dev
=======
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150
		this.game.load.image("playRules","assets/img/playRules.png");
		this.game.load.image('fire','assets/img/fire.png');
		this.game.load.image('plant','assets/img/plant.png');
		this.game.load.image('water','assets/img/water.png');
		this.game.load.image('firedead','assets/img/firedead.png');
		this.game.load.image('plantdead','assets/img/plantdead.png');
		this.game.load.image('waterdead','assets/img/waterdead.png');
		this.game.load.image('fillAsset','assets/img/fillAsset.png');
		this.game.load.image('emptyAsset','assets/img/emptyAsset.png');
		this.game.load.image('item','assets/img/item.png');
<<<<<<< HEAD
<<<<<<< HEAD
=======
		this.game.load.image("background", "assets/img/game_bg.jpg");  
>>>>>>> dev
=======
		this.game.load.image("background", "assets/img/game_bg.jpg");  
>>>>>>> 7dad0c5fd0a4d6df3d875239e9bd8fc31baef150

		//Sound
    	game.load.audio('gameSound', 'assets/sound/gameSound.mp3');
    	game.load.audio('introSound', 'assets/sound/introSound.mp3');    	
<<<<<<< HEAD
    	game.load.audio('winSound', 'assets/sound/winSound.ogg'); 
    	game.load.audio('loseSound', 'assets/sound/loseSound.wav'); 
=======
    	game.load.audio('winSound', 'assets/sound/winSound.mp3'); 
    	game.load.audio('loseSound', 'assets/sound/loseSound.mp3'); 
>>>>>>> dev
    	game.load.audio('hit', 'assets/sound/hit.mp3');
    	game.load.audio('hitWater', 'assets/sound/hitWater.mp3');
    	game.load.audio('hitFire', 'assets/sound/hitFire.mp3');
    	game.load.audio('hitPlant', 'assets/sound/hitPlant.mp3');
    	game.load.audio('ennemyDeath', 'assets/sound/ennemyDeath.mp3');
    	game.load.audio('playerDeath', 'assets/sound/playerDeath.mp3');
<<<<<<< HEAD
    	game.load.audio('screenShake', 'assets/sound/screenShake.wav');
    	game.load.audio('spawnEnnemy', 'assets/sound/spawnEnnemy.wav');    	
=======
    	game.load.audio('screenShake', 'assets/sound/screenShake.mp3');
    	game.load.audio('spawnEnnemy', 'assets/sound/spawnEnnemy.mp3');    	
>>>>>>> dev
    	game.load.audio('draw', 'assets/sound/draw.mp3'); 

	},
  	create: function(){
<<<<<<< HEAD
=======
  		this.game.time.events.add(Phaser.Timer.SECOND * 5, this._startGame, this);	
	},
	_startGame: function(){
>>>>>>> dev
		this.game.state.start("GameTitle");
	}
}
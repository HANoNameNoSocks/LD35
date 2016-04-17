function Ennemy(game, velocity, type) {
	this.game = game;
	this.ennemySprite = null;
	this.isDead = null;
	this.velocity = velocity;
	this.type = type;
	this.cursors = null;
	this.posX = 800;
	this.posY = 485;
	this.isDead = false;
	this.isDraw = false;
	this.counterDeath = 0;
};

var arr = ["fire", "water","plant"];
var arrDead = ["firedead","waterdead","plantdead"];
var arrMonkey = ["sprFire","sprWater","sprPlant"];
var animation = 15;


Ennemy.prototype.create = function create() {

	// PHYSICS PROPERTIES
 	ennemyDeathsound = game.add.audio('ennemyDeath');
 	spawnEnnemysound = game.add.audio('spawnEnnemy');
 	spawnEnnemysound.play();

    this.ennemySprite = game.add.sprite(this.posX, this.posY, arrMonkey[this.type]);

    this.ennemySprite.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    this.ennemySprite.animations.play('walk', animation, true);
    animation++;
    console.log("animation = " + animation);


	// PHYSICS PROPERTIES
	this.game.physics.arcade.enable(this.ennemySprite);
	this.ennemySprite.enableBody = true;

	this.ennemySprite.body.velocity.x = this.velocity;


};


Ennemy.prototype.update = function update() {
};


Ennemy.prototype.setisDead = function setisDead(isDead) {

	this.isDead = isDead;
};

Ennemy.prototype.setisDraw = function setisDraw(isDraw) {

	this.isDraw = isDraw;
};

Ennemy.prototype.getisDraw = function getisDraw() {

	return this.isDraw;
};

Ennemy.prototype.getPosX = function getPosX(){

	return this.ennemySprite.x;
};

Ennemy.prototype.getType = function getType() {

	return arr[this.type];
};

Ennemy.prototype.destroy = function destroy () {

    this.ennemySprite.destroy();
};

Ennemy.prototype.kill = function kill () {
  	var start = new Date().getTime();
 	var oldX = this.ennemySprite.x;



	this.counterDeath++;

  	if (ennemyDeathsound.isPlaying == false && this.counterDeath==1)
  	{
  		console.log("coucou");
        ennemyDeathsound.play();
    }

  	this.ennemySprite.destroy();
  	this.ennemySprite = game.add.sprite(oldX, 566, arrMonkey[this.type]);
  	this.ennemySprite.animations.add('walk', [1,2]);
  	this.game.physics.arcade.enable(this.ennemySprite);

	this.ennemySprite.enableBody = true;
	this.ennemySprite.body.velocity.x = 0;
	this.ennemySprite.animations.play('walk', 3000, true);
    game.time.events.add(2000, this.destroy, this);


  	};



















function Ennemy(game, velocity, type) {
	this.game = game;
	this.ennemySprite = null;
	this.isDead = null;
	this.velocity = velocity;
	this.type = type;
	this.cursors = null;
	this.posX = 800;
	this.posY = 435;
	this.isDead = false;
	this.isDraw = false;
	this.isSpriteDestroy = false;
};

var arr = ["fire", "water","plant"];
var arrDead = ["sprFireDeath","sprWaterDeath","sprPlantDeath"];
var arrEnemy = ["sprFire","sprWater","sprPlant"];
var animation = 15;


Ennemy.prototype.create = function create() {
	ennemyDeathsound = game.add.audio('ennemyDeath');

	// PHYSICS PROPERTIES
 	spawnEnnemysound = game.add.audio('spawnEnnemy');
 	spawnEnnemysound.play();

    this.ennemySprite = game.add.sprite(this.posX, this.posY, arrEnemy[this.type]);

    this.ennemySprite.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    this.ennemySprite.animations.play('walk', animation, true);


	// PHYSICS PROPERTIES
	this.game.physics.arcade.enable(this.ennemySprite);
	this.ennemySprite.enableBody = true;

	this.ennemySprite.body.velocity.x = this.velocity;


};


Ennemy.prototype.update = function update() {
	if(!this.isDraw && !this.isDead){
		this.ennemySprite.body.velocity.x = this.velocity;
	}
};


Ennemy.prototype.setisDead = function setisDead(isDead) {

	this.isDead = isDead;
};

Ennemy.prototype.setIsSpriteDestroy = function setIsSpriteDestroy(isSpriteDestroy) {

	this.isSpriteDestroy = isSpriteDestroy;
};

Ennemy.prototype.getIsSpriteDestroy = function getIsSpriteDestroy() {

	return this.isSpriteDestroy;
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

  	this.ennemySprite.destroy();
  	this.setIsSpriteDestroy(true);
  	ennemyDeathsound.play();
  	this.ennemySprite = game.add.sprite(oldX, this.posY, arrDead[this.type]);
  	this.ennemySprite.animations.add('dead', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
 	this.ennemySprite.animations.play('dead', 15, false, false,false);
  	this.game.physics.arcade.enable(this.ennemySprite);

	this.ennemySprite.enableBody = true;
	this.ennemySprite.body.velocity.x = 0;
    game.time.events.add(2000, this.destroy, this);


  	};



















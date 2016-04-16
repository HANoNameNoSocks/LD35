function Ennemy(game, velocity, type) {
	this.game = game;
	this.ennemySprite = null;
	this.isDead = null;
	this.velocity = velocity;
	this.type = type;
	this.cursors = null;
	this.posX = 800;
	this.posY = 566;
	this.isDead = false;
};

var key1;
var arr = ["fire", "water","plant"];
var arrDead = ["firedead","waterdead","plantdead"];
var arrMonkey = ["sprFire","sprWater","sprPlant"];
Ennemy.prototype.create = function create() {
    game.stage.backgroundColor = '#736357';


    key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);

	// PHYSICS PROPERTIES

    this.ennemySprite = game.add.sprite(700, 566, arrMonkey[this.type]);

    this.ennemySprite.animations.add('walk', [0, 1, 2, 3, 4]);

    this.ennemySprite.animations.play('walk', 3000, true);



	// PHYSICS PROPERTIES
	this.game.physics.arcade.enable(this.ennemySprite);
	this.ennemySprite.enableBody = true;

	this.ennemySprite.body.velocity.x = this.velocity;


};


Ennemy.prototype.update = function update() {
};


Ennemy.prototype.setisDead = function setisDead(isdead) {

	this.isDead = isdead;
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
  	this.ennemySprite = game.add.sprite(oldX, 566, arrMonkey[this.type]);
  	this.ennemySprite.animations.add('walk', [12, 13, 14, 15]);
  	this.game.physics.arcade.enable(this.ennemySprite);

	this.ennemySprite.enableBody = true;
	this.ennemySprite.body.velocity.x = 0;
	this.ennemySprite.animations.play('walk', 3000, true);
    game.time.events.add(2000, this.destroy, this);


  	};



















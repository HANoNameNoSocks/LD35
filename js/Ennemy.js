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

Ennemy.prototype.create = function create() {
    game.stage.backgroundColor = '#736357';


    key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);

	// PHYSICS PROPERTIES

	this.ennemySprite = this.game.add.sprite(this.posX,this.posY, arr[this.type]);

	// PHYSICS PROPERTIES
	this.ennemySprite.anchor.setTo(0.5, 0);
	this.game.physics.arcade.enable(this.ennemySprite);
	this.ennemySprite.enableBody = true;

	this.ennemySprite.body.gravity.x = this.velocity;


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

	this.ennemySprite.destroy();
};



















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


function setisDead(isdead) {

	this.isDead = isDead;
}

function getPosX(){
	return this.ennemySprite.x;
}

function getType() {

	return arr[this.type];
}

function destroy () {

	if(this.isDead) {

    	sprite.destroy();
	}
}
/*function ennemyOut(square) {

    //  Move the alien to the top of the screen again
    square.reset(square.x, -32);

    //  And give it a new random velocity
    square.body.velocity.y = 50 + Math.random() * 200;

}*/

















function Hero(game) {
	this.game = game ;
	this.sprite = null ;
	this.posX = 0 ;
	this.posY = 0 ;

	this.isDead = false;
	
};

Hero.prototype.create = function create() {
	this.sprite = this.game.add.sprite(150,480, 'hero');

	this.game.physics.arcade.enable(this.sprite);
/*	this.sprite.enableBody = true;
	this.sprite.body.collideWorldBounds = true;*/
};

Hero.prototype.update = function update() {
	
};

Hero.prototype.isDead = function isDead() {
	return this.isDead;
};

Hero.prototype.setIsDead = function isDead(isDead) {
	this.isDead = isDead;
};

Hero.prototype.destroy = function destroy() {

};


















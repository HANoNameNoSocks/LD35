function Hero(game) {
	this.game = game ;
	this.sprite = null ;
	this.posX = 0 ;
	this.posY = 0 ;
	
};

Hero.prototype.create = function create() {
	this.sprite = this.game.add.sprite(150,480, 'hero');

	this.game.physics.arcade.enable(this.sprite);
	this.sprite.enableBody = true;

	this.sprite.body.bounce.y = 0.2;
	// this.sprite.body.gravity.y = 500;
	this.sprite.body.collideWorldBounds = true;

	
};

Hero.prototype.update = function update() {
	
};


















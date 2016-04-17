function Hero(game) {
	this.game = game;
	this.sprite = null;
	this.posX = 210;
	this.posY = 566;

	this.isDead = false;
	this.isFighting = false;

	this.cursors = null;
	this.firebutton = null;
	this.plantbutton = null;
	this.waterbutton = null;

	this.attackType = null;
	
};

Hero.prototype.create = function create() {
	this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero');
	this.game.physics.arcade.enable(this.sprite);

	this.firebutton = this.game.input.keyboard.addKey(Phaser.Keyboard.W)
	this.plantbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.C)
	this.waterbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.X)

	var self = this;

	this.firebutton.onDown.add(this.fire, this);
	this.plantbutton.onDown.add(this.plant, this);
	this.waterbutton.onDown.add(this.water, this);
};

Hero.prototype.update = function update() {
	this.attackType = null;
	this.isFighting = false;
	/*this.fight();*/
};

Hero.prototype.fire = function fire() {
	this.isFighting = true;
	this.attackType = "fire";
	console.log("attack fire");
};

Hero.prototype.plant = function plant() {
	this.isFighting = true;
	this.attackType = "plant";
	console.log("attack plant");
};

Hero.prototype.water = function water() {
	this.isFighting = true;
	this.attackType = "water";
	console.log("attack water");
};

Hero.prototype.isDead = function isDead() {
	return this.isDead;
};

Hero.prototype.getType = function getType() {
	return this.attackType;
};

Hero.prototype.setIsDead = function setIsDead(isDead) {
	this.isDead = isDead;
};

Hero.prototype.destroy = function destroy() {
	this.sprite.destroy();
};
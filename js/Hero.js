function Hero(game) {
	this.game = game;
	this.sprite = null;
	this.posX = 200;
	this.posY = 566;

	this.isDead = false;
	this.isFighting = false;

	this.cursors = null;
	this.firebutton = null;
	this.plant = null;
	this.water = null;

	this.attackType = null;
	
};

Hero.prototype.create = function create() {
	this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero');

	this.sprite.animations.add('hero', [0, 1, 2, 3]);
    this.sprite.animations.play('hero', 3, false);

    console.log("Hero animations");
	this.game.physics.arcade.enable(this.sprite);

	this.cursors = this.game.input.keyboard.createCursorKeys();

	this.firebutton = this.game.input.keyboard.addKey(Phaser.Keyboard.W)
	this.plantbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.C)
	this.waterbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.X)
};

Hero.prototype.update = function update() {
	this.attackType = null;
	this.isFighting = false;
	this.fight();
};

Hero.prototype.fight = function fight() {
	if (this.firebutton.isDown) {
		this.isFighting = true;
		this.attackType = "fire";
		this.sprite.loadTexture('sprAttaqueFire', 5, false);

	} else if (this.plantbutton.isDown) {
		this.isFighting = true;
		this.attackType = "plant";
		console.log("attack plant");
	} else if (this.waterbutton.isDown) {
		this.isFighting = true;
		this.attackType = "water";
		console.log("attack water");
	}
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
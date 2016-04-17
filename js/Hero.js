function Hero(game) {
	this.game = game;
	this.sprite = null;
	this.posX = 210;
	this.posY = 566;

	this.isDead = false;
	this.isFighting = false;

	this.cursors = null;
	this.firebutton = null;
	this.plant = null;
	this.water = null;

	this.attackType = null;
	
};

var shakeWorld = 0;

Hero.prototype.create = function create() {
	this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero');
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

    if (shakeWorld > 0) 
    {
      var rand1 = game.rnd.integerInRange(-10,10);
      var rand2 = game.rnd.integerInRange(-10,10);
      game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
      shakeWorld--;
    }

    if (shakeWorld == 0) {
      game.world.setBounds(0, 0, game.width,game.height);
    }
};

Hero.prototype.fight = function fight() {
	if (this.firebutton.isDown) {
		this.isFighting = true;
		this.attackType = "fire";
		shakeWorld = 5;
		console.log("attack fire");
	} else if (this.plantbutton.isDown) {
		this.isFighting = true;
		this.attackType = "plant";
		shakeWorld = 5;
		console.log("attack plant");
	} else if (this.waterbutton.isDown) {
		this.isFighting = true;
		this.attackType = "water";
		shakeWorld = 5;
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
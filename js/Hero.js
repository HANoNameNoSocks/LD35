function Hero(game) {
	this.game = game;
	this.sprite = null;
	this.spriteDeath = null;
	this.posX = 130;
	this.posY = 450;

	this.isDead = false;
	this.isFighting = false;

	this.cursors = null;
	this.firebutton = null;
	this.plantbutton = null;
	this.waterbutton = null;

	this.attackType = null;

	this.hitsound = null;
	
};

var shakeWorld = 0;

Hero.prototype.create = function create() {
	hitsound = game.add.audio('hit')

	this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero_idle');
	this.sprite.animations.add('idle', [0,1]);
	this.game.physics.arcade.enable(this.sprite);
	this.sprite.enableBody = true;
	this.sprite.animations.play('idle', 5, true);
	
	this.spriteDeath = this.game.add.sprite(-80,315, 'hero_death');
	this.spriteDeath.animations.add('death',[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);
	this.game.physics.arcade.enable(this.spriteDeath);
	this.spriteDeath.enableBody = true;
	this.spriteDeath.visible = false;

	this.firebutton = this.game.input.keyboard.addKey(Phaser.Keyboard.W)
	this.plantbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.C)
	this.waterbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.X)

	this.firebutton.onDown.add(this.fire, this);
	this.plantbutton.onDown.add(this.plant, this);
	this.waterbutton.onDown.add(this.water, this);
};

Hero.prototype.update = function update() {
	if(this.isDead == false){
		
			this.attackType = null;
			this.isFighting = false;

		if (shakeWorld > 0) 
		{
			var rand1 = game.rnd.integerInRange(-5,5);
			var rand2 = game.rnd.integerInRange(-5,5);
			game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
			shakeWorld--;
		}

		if (shakeWorld == 0) {
			game.world.setBounds(0, 0, game.width,game.height);
		}
	}else{
			this._heroDeathAnimation();
	}
};

Hero.prototype.fire = function fire() {
	this.isFighting = true;
	this.attackType = "fire";
	shakeWorld = 5;
	hitsound.play();
	console.log("attack fire");
};

Hero.prototype.plant = function plant() {
	this.isFighting = true;
	this.attackType = "plant";
	shakeWorld = 5;
	hitsound.play();
	console.log("attack plant");
};

Hero.prototype.water = function water() {
	this.isFighting = true;
	this.attackType = "water";
	shakeWorld = 5;
	hitsound.play();
	console.log("attack water");
};

Hero.prototype._heroDeathAnimation = function _heroDeathAnimation() {
	this.sprite.destroy();
	this.spriteDeath.visible = true;
	this.spriteDeath.animations.play('death',20,true);
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
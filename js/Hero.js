function Hero(game) {
	this.game = game;
	this.sprite = null;
	this.spriteDeath = null;
	this.spriteFire = null;
	this.spritePlant = null;
	this.spriteWater = null;
	this.posX = 130;
	this.posY = 450;

	this.isDead = false;
	this.isFighting = false;
	this.alreadyDead = false;

	this.mustBash = false;


	this.bashbutton = null;
	this.cursors = null;

	this.firebutton = null;
	this.plantbutton = null;
	this.waterbutton = null;
	this.bashCount = 0;


	this.attackType = null;

	this.hitsound = null;
	this.shakeWorld = 0;
};

Hero.prototype.create = function create() {
	hitsound = game.add.audio('hit');
	hitWatersound = game.add.audio('hitWater');
	hitFiresound = game.add.audio('hitFire');
	hitPlantsound = game.add.audio('hitPlant');
	screenShakesound = game.add.audio('screenShake');

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
	
	this.spriteFire = this.game.add.sprite(130,340, 'hero_fire');
	this.spriteFire.animations.add('fire',[0,1,2,3,5,6,7,8,9]);
	this.game.physics.enable(this.spriteFire);
	this.spriteFire.enableBody = true;
	this.spriteFire.visible = false;
	this.spriteFire.animations.currentAnim.onComplete.add(this._fireCallback, this);
	
	this.spritePlant = this.game.add.sprite(130,340, 'hero_plant');
	this.spritePlant.animations.add('plant',[0,1,2,3,5,6,7,8,9]);
	this.game.physics.arcade.enable(this.spritePlant);
	this.spritePlant.enableBody = true;
	this.spritePlant.visible = false;
	this.spritePlant.animations.currentAnim.onComplete.add(this._plantCallback, this);
	
	this.spriteWater = this.game.add.sprite(130,340, 'hero_water');
	this.spriteWater.animations.add('water',[0,1,2,3,5,6,7,8,9]);
	this.game.physics.arcade.enable(this.spriteWater);
	this.spriteWater.enableBody = true;
	this.spriteWater.visible = false;
	this.spriteWater.animations.currentAnim.onComplete.add(this._waterCallback, this);
	

	this.firebutton = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
	this.plantbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
	this.waterbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
	this.bashbutton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


	this.firebutton.onDown.add(this.fire, this);
	this.plantbutton.onDown.add(this.plant, this);
	this.waterbutton.onDown.add(this.water, this);
	this.bashbutton.onDown.add(this.bash, this);

};

Hero.prototype.update = function update() {

	if(this.isDead == false){
		
			this.attackType = null;
			this.isFighting = false;

		if (this.shakeWorld > 0) 
		{
			var rand1 = game.rnd.integerInRange(-5,5);
			var rand2 = game.rnd.integerInRange(-5,5);
			game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
			this.shakeWorld--;
		}

		if (this.shakeWorld == 0) {
			game.world.setBounds(0, 0, game.width,game.height);
		}
	} else {
		if(!this.spriteFire.animations.isPlaying && !this.spritePlant.animations.isPlaying && !this.spriteWater.animations.isPlaying){ 
			if(this.alreadyDead == false){
				this._heroDeathAnimation();
			}
		}
	}
};

Hero.prototype._fireCallback = function _fireCallback() {
	this.spriteFire.visible = false;
	this.sprite.visible = true;
	this.spriteFire.animations.isPlaying = false;
};

Hero.prototype.fire = function fire() {

	if(this.isDead == false){
		if(!this.spriteFire.animations.isPlaying && !this.spritePlant.animations.isPlaying && !this.spriteWater.animations.isPlaying){ 
			this.isFighting = true;
			this.attackType = "fire";
			this.sprite.visible = false;
			this.spriteFire.visible = true;
			this.spriteFire.animations.play('fire', 10, false, false, false);
			this.spriteFire.animations.isPlaying = true;
			this.spriteWater.animations.isPlaying = false;
			this.spritePlant.animations.isPlaying = false;
			this.shakeWorld = 5;
			hitFiresound.play();
		}
	}
};

Hero.prototype._plantCallback = function _plantCallback() {
	this.spritePlant.visible = false;
	this.sprite.visible = true;
	this.spritePlant.animations.isPlaying = false;
};

Hero.prototype.plant = function plant() {

	if(this.isDead == false){
		if(!this.spriteFire.animations.isPlaying && !this.spritePlant.animations.isPlaying && !this.spriteWater.animations.isPlaying){
			this.isFighting = true;
			this.attackType = "plant";
			this.sprite.visible = false;
			this.spritePlant.visible = true;
			this.spritePlant.animations.play('plant', 10, false, false, false);
			this.spriteWater.animations.isPlaying = false;
			this.spritePlant.animations.isPlaying = true;
			this.spriteFire.animations.isPlaying = false;
			this.shakeWorld = 5;
			hitPlantsound.play();
		}
	}

};

Hero.prototype._waterCallback = function _waterCallback() {
	this.spriteWater.visible = false;
	this.sprite.visible = true;
	this.spriteWater.animations.isPlaying = false;
};

Hero.prototype.water = function water() {

	if(this.isDead == false){
		if(!this.spriteFire.animations.isPlaying && !this.spritePlant.animations.isPlaying && !this.spriteWater.animations.isPlaying){
			this.isFighting = true;
			this.attackType = "water";
			this.sprite.visible = false;
			this.spriteWater.visible = true;
			this.spriteWater.animations.play('water', 10, false, false, false);
			this.spriteWater.animations.isPlaying = true;
			this.spritePlant.animations.isPlaying = false;
			this.spriteFire.animations.isPlaying = false;
			this.shakeWorld = 25;
			hitWatersound.play();
		}
	}
};

Hero.prototype._heroDeathAnimation = function _heroDeathAnimation() {
	this.sprite.destroy();
	this.spriteDeath.visible = true;
	this.spriteDeath.animations.play('death', 20, false, false, false);
	this.alreadyDead = true;
};

Hero.prototype.bash = function bash() {
	if (this.mustBash) {
		this.bashCount++;
	} else {
		this.bashCount = 0;
	}
	this.spriteDeath.animations.play('death',20,true);
};

Hero.prototype.isDead = function isDead() {
	return this.isDead;
};

Hero.prototype.getType = function getType() {
	return this.attackType;
};

Hero.prototype.getBashCount = function getBashCount() {
    return this.bashCount;
};

 
Hero.prototype.setIsDead = function setIsDead(isDead) {
	this.isDead = isDead;
};

Hero.prototype.destroy = function destroy() {
	this.sprite.destroy();
};
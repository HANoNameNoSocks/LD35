function AssetCounter(game) {
	this.game = game;
	this.sprite = null;
	this.initialY;
};

AssetCounter.prototype.create = function create(x,y, assetType) {
	this.initialY = y;
	this.sprite = this.game.add.sprite(x, y, assetType);
};

AssetCounter.prototype.update = function update() {
	if (this.sprite.y <= this.initialY - 20) {
		this.sprite.body.gravity.y = 0;
		this.sprite.body.velocity.y = 0;
		this.sprite.y = this.initialY;
	}
};

AssetCounter.prototype.getSprite = function getSprite() {
	return this.sprite;
};
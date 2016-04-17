function AssetCounter(game) {
	this.game = game;
	this.sprite = null;
};

AssetCounter.prototype.create = function create(x,y, assetType) {
	this.sprite = this.game.add.sprite(x, y, assetType);
};

AssetCounter.prototype.update = function update() {
};

AssetCounter.prototype.getSprite = function getSprite() {
	return this.sprite;
};
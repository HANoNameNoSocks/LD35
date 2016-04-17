function AssetCounter(game) {
	this.game = game;
};

AssetCounter.prototype.create = function create(x,y, assetType) {
	this.game.add.sprite(x, y, assetType);
};

AssetCounter.prototype.update = function update() {
};
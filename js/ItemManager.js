function ItemManager(game) {
	this.game = game;
	this.currentItem = null;
};

ItemManager.prototype.create = function create() {
};

ItemManager.prototype.update = function update() {
};

function createItem(data) {
	this.currentItem = new Item(this.game, data);
};
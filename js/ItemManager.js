function ItemManager(game) {
	this.game = game;
	this.currentItem = null;
};

ItemManager.prototype.create = function create() {
};

ItemManager.prototype.update = function update() {
};

ItemManager.prototype.createItem = function createItem(data) {
	console.log("start of createItem");
	this.currentItem = new Item(this.game, data);
};
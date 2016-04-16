function Item(game) {
	this.game = game;
	// definition of an item
	// name : name of the item
	// counter : number of enemies to beat to get the item
	// type : type of enemies to beat to get the item
	this.items = [{name:"maracas",counter:5,type:"any"}, {name:"ukulele",counter:8,type:"fire"}, {name:"poncho",counter:10,type:"water"}, {name:"sombrero",counter:12,type:"plant"}];
	this.retrievedItems = [];
	this.currentItem = null;
	this.currentCounter = null;
	this.idx = 0;
};

Item.prototype.create = function create() {
	this.currentItem = items[this.idx];
	this.currentCounter = 0;
};

Item.prototype.update = function update() {
	// check if draw : then set currentCounter to 0
	if (var draw = true) {
		this.currentCounter = 0;
		return;
	}
	// check if success : (currentItem.type == "any" || currentItem.type == enemy.type) && currentCounter++ == currentItem.counter ? idx++ : ;
	// if idx > items.length -> WIN else currentItem = items[this.idx]; currentCounter = 0;
	if (var success = true && (this.currentItem.type == "any" || this.currentItem.type == this.enemy.type) && ++this.currentCounter == this.currentItem.counter) {
		this.retrievedItems.push(this.currentItem.name);
		if (++this.idx >= items.length) {
			// set game WIN ? TODO
			this.game;
		} else {
			this.currentItem = items[this.idx];
			this.currentCounter = 0;
		}
	}
};
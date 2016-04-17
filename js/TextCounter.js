function TextCounter(game) {
	this.game = game;
};

TextCounter.prototype.create = function create(x, y, count, total) {
	this.game.add.text(x, y, count + "/" + total, { font: "30px Arial", fill: "#404040"});
};

TextCounter.prototype.update = function update() {
};
function TextCounter(game) {
	this.game = game;
	this.text = null;
};

TextCounter.prototype.create = function create(x, y, count, total) {
	this.text = this.game.add.text(x, y, count + "/" + total, { font: "30px Arial", fill: "#404040"});
};

TextCounter.prototype.update = function update() {
};

TextCounter.prototype.changeText = function changeText(count, total) {
	this.text.setText(count + "/" + total);
};
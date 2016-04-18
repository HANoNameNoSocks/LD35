function TextCounter(game) {
	this.game = game;
	this.textDecompte = null;
	this.textBarre = null;
	this.textTotal = null;
	this.green = "#006847";
	this.white = "#FFFFFF";
	this.red = "#CE1126";
	this.item = null;
};

TextCounter.prototype.create = function create(x, y, count, total) {
	this.item = this.game.add.sprite(x, y, 'item');
	var textDecompteX = x + this.item.width + 5;
	this.textDecompte = this.game.add.text(textDecompteX, y, "" + count, { font: "30px Arial", fill: this.green});
	this.textDecompte.fontWeight = "bold";
	var textBarreX = textDecompteX + this.textDecompte.width + 1;
	this.textBarre = this.game.add.text(textBarreX, y, "/", { font: "30px Arial bold", fill: this.white});
	this.textBarre.fontWeight = "bold";
	var textTotalX = textBarreX + this.textBarre.width + 1;
	this.textTotal = this.game.add.text(textTotalX, y, total, { font: "30px Arial bold", fill: this.red});
	this.textTotal.fontWeight = "bold";
};

TextCounter.prototype.update = function update() {
};

TextCounter.prototype.changeText = function changeText(count) {
	this.textDecompte.setText(count);
};
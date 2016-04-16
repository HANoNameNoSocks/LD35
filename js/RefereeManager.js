function RefereeManager(game) {
	this.game = game;
	this.itemManager = null;
	this.currentCounter = null;
	this.names = ["Maracas", "Ukulele", "Poncho", "Sombrero", "Drapeau mexicain", "Tequila", "Moustache", "Bottes", "Veste", "Harmonica", "Trompettes", "Âne", "Selle"];
	this.tempNames = null;
	this.limit = 5;
	this.retrievedItems = [];
	this.hasWon = false;
	this.hasLost = false;
}

RefereeManager.prototype.create = function create() {
	this.itemManager = new ItemManager(this.game);
	this.itemManager.createItem(getData());
	this.currentCounter = 0;
	this.tempNames = this.names;
}

RefereeManager.prototype.update = function update() {
};

function judge(data) {
	if (data == 1) {
		playerWonAFight()
	} else if (data == 0) {
		playerDrawAFight();
	} else if (data == -1) {
		playerLoseAFight();
	}
}

function playerWonAFight() {
	if ((this.itemManager.currentItem.type == "any" || this.itemManager.currentItem.type == this.enemy.type) && ++this.currentCounter == this.itemManager.currentItem.counter) {
		this.retrievedItems.push(this.currentItem);
		if (++this.limit >= this.items.length) {
			this.hasWon = true;
		} else {
			this.itemManager.createItem(getData());
			this.currentCounter = 0;
		}
	}
};

function playerDrawAFight() {
	this.currentCounter = 0;
};

function playerLoseAFight() {
	this.hasLost = true;
};

function getData() {
	return {name : getName(), counter : Math.floor((Math.random() * 10) + 1), type : getType()};
};

function getName() {
	var name = this.tempNames[Math.floor((Math.random() * tempNames.length))];
	var idx = tempNames.indexOf(name);
	this.tempNames.splice(idx, 1);
	if (tempNames.length == 0) {
		this.tempNames = this.names;
	}
	return name;
};

function getType() {
	var rd = Math.floor((Math.random() * 4) + 1);
	if (rd == 1) {
		return "any";
	}
	if (rd == 2) {
		return "plant";
	}
	if (rd == 3) {
		return "fire";
	}
	if (rd == 4) {
		return "water";
	}
};
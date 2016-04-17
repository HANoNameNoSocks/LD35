function RefereeManager(game) {
	this.game = game;
	this.itemManager = null;
	this.currentCounter = null;
	this.names = ["Maracas", "Ukulele", "Poncho", "Sombrero", "Drapeau mexicain", "Tequila", "Moustache", "Bottes", "Veste", "Harmonica", "Trompettes", "Âne", "Selle"];
	this.tempNames = null;
	this.limitOfItem = 2; // 5;
	this.retrievedItems = [];
	this.hasWon = false;
	this.hasLost = false;
	this.counterManager = null;
	this.limitOfEnemy = 3;
}

RefereeManager.prototype.create = function create() {
	var me = this;
	console.log("start of prototype.create");
	console.log("call of new ItemManager");
	this.itemManager = new ItemManager(this.game);
	this.tempNames = this.names;
	console.log("call of createItem");
	var data = getData(me);
	this.itemManager.createItem(data);
	this.currentCounter = 0;

	this.counterManager = new CounterManager(this.game, {maxItem : this.limitOfItem, maxEnemy : data.counter, x : 10});
	this.counterManager.create();
}

RefereeManager.prototype.update = function update() {
	this.counterManager.update();
};

RefereeManager.prototype.judge = function judge(data, enemy) {
	if (data == 1) {
		this.playerWonAFight(enemy);
	} else if (data == 0) {
		this.playerDrawAFight();
	} else if (data == -1) {
		this.playerLoseAFight();
	}
}

RefereeManager.prototype.playerWonAFight =  function playerWonAFight(enemy) {
	var me = this;
	if ((this.itemManager.currentItem.type == "any" || this.itemManager.currentItem.type == enemy.getType())) {
		this.counterManager.incrementEnemy();
		if (++this.currentCounter == this.itemManager.currentItem.counter) {
			this.retrievedItems.push(this.currentItem);
			if (this.limitOfItem == this.retrievedItems.length) {
				this.hasWon = true;
			} else {
				this.counterManager.incrementItem();
				var data = getData(me);
				this.itemManager.createItem(data);
				this.currentCounter = 0;
				this.counterManager.changeMaxEnemy(data.counter);
				this.game.time.events.add(Phaser.Timer.SECOND * 2, this.reinitEnemy, this);
			}
		}
	}
};

RefereeManager.prototype.reinitEnemy = function reinitEnemy() {
	this.counterManager.reinitEnemy();
};

RefereeManager.prototype.playerDrawAFight = function playerDrawAFight() {
	this.currentCounter = 0;
	this.counterManager.reinitEnemy();
};

RefereeManager.prototype.playerLoseAFight =  function playerLoseAFight() {
	this.hasLost = true;
};

function getData(me) {
	return {name : getName(me), counter : getCounterOfEnemy(me), type : /* getType() */ "any"};
};

function getName(me) {
	var name = me.tempNames[Math.floor((Math.random() * me.tempNames.length))];
	var idx = me.tempNames.indexOf(name);
	me.tempNames.splice(idx, 1);
	if (me.tempNames.length == 0) {
		me.tempNames = me.names;
	}
	return name;
};

function getCounterOfEnemy(me) {
	return /*Math.floor((Math.random() * */ me.limitOfEnemy /*) + 1)*/;
}

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
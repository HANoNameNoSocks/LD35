function CounterManager(game, data) {
	this.game = game;
	this.itemCounter = null;
	this.enemyCounter = [];
	this.enemyCount = null;
	this.itemCount = null;
	this.maxItem = data.maxItem;
	this.maxEnemy = data.maxEnemy;
	this.x = data.x;
	this.limitEnemyEver = 10;
	this.enemyToDo = [];
	this.enemyDone = [];
}

CounterManager.prototype = {

	create : function() {
		this.itemCount = 0;
		this.itemCounter = new TextCounter(this.game);
		this.itemCounter.create(10, 10, 0, this.maxItem);

		this.enemyCount = 0;
		for (var j = 0; j < this.limitEnemyEver; j++) {
			var tempEnemyTodo = new AssetCounter(this.game);
			tempEnemyTodo.create(this.x + j * 25, 50, 'emptyAsset');
			if (j + 1 > this.maxEnemy) {
				tempEnemyTodo.getSprite().visible = false;
			}
			this.enemyToDo.push(tempEnemyTodo);
			var tempEnemyDone = new AssetCounter(this.game);
			tempEnemyDone.create(this.x + j * 25, 50, 'fillAsset');
			tempEnemyDone.getSprite().visible = false;
			this.enemyDone.push(tempEnemyDone);
		}
	},

	update : function() {
	},

	incrementEnemy : function() {
		this.enemyCount++;
		this.enemyToDo[this.enemyCount - 1].getSprite().visible = false;
		this.enemyDone[this.enemyCount - 1].getSprite().visible = true;
	},

	reinitEnemy : function() {
		this.enemyCount = 0;
		for (var j = 0; j < this.limitEnemyEver; j++) {
			if (j + 1 > this.maxEnemy) {
				this.enemyToDo[j].getSprite().visible = false;
			} else {
				this.enemyToDo[j].getSprite().visible = true;;
			}
			this.enemyDone[j].getSprite().visible = false;
		}
	},

	incrementItem : function() {
		this.itemCounter.kill();
		this.itemCount++;
		this.itemCounter = new TextCounter(this.game);
		this.itemCounter.create(10, 10, itemCount, this.maxItem);
	},

	changeMaxEnemy : function(newMax) {
		this.maxEnemy = newMax;
	}
}
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
		var gap = 0;
		for (var j = 0; j < this.limitEnemyEver; j++) {
			// add empty asset
			var tempEnemyTodo = new AssetCounter(this.game);
			tempEnemyTodo.create(this.x + gap, 50, 'emptyAsset');
			if (j + 1 > this.maxEnemy) {
				tempEnemyTodo.getSprite().visible = false;
			}
			this.enemyToDo.push(tempEnemyTodo);
			// add fill asset
			var tempEnemyDone = new AssetCounter(this.game);
			tempEnemyDone.create(this.x + gap, 50, 'fillAsset');
			tempEnemyDone.getSprite().visible = false;
			this.enemyDone.push(tempEnemyDone);

			gap += tempEnemyTodo.getSprite().width + 2;
		}
	},

	update : function() {
		for (var k = 0; k < this.enemyDone.length; k++) {
			this.enemyDone[k].update();
		}
	},

	incrementEnemy : function() {
		this.enemyCount++;
		this.enemyToDo[this.enemyCount - 1].getSprite().visible = false;
		var sprite = this.enemyDone[this.enemyCount - 1].getSprite();
		sprite.visible = true;
		this.game.physics.arcade.enable(sprite);
		sprite.enableBody = true;
		sprite.body.gravity.y = -40;
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
		this.game.time.events.add(Phaser.Timer.SECOND * 2, this.changeText, this);
	},

	changeText : function() {
		this.itemCounter.changeText(++this.itemCount);
	},

	changeMaxEnemy : function(newMax) {
		this.maxEnemy = newMax;
	}
}
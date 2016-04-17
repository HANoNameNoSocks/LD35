function CounterManager(game, data) {
	this.game = game;
	this.itemCounter = null;
	this.enemyCounter = [];
	this.enemyCount = null;
	this.itemCount = null;
	this.maxItem = data.maxItem;
	this.maxEnemy = data.maxEnemy;
	this.x = data.x;
}

CounterManager.prototype = {

	create : function() {
		this.itemCount = 0;
		this.itemCounter = new TextCounter(this.game);
		this.itemCounter.create(10, 10, 0, this.maxItem);

		this.enemyCount = 0;
		for (var k = 1; k <= this.maxEnemy; k++) {
			if (k <= this.enemyCount) {
				var tempEnemyCounter = new AssetCounter(this.game);
				tempEnemyCounter.create(this.x + k * 25, 50, 'fillAsset');
				this.enemyCounter.push(tempEnemyCounter);
			} else {
				var tempEnemyCounter = new AssetCounter(this.game);
				tempEnemyCounter.create(this.x + k * 25, 50, 'emptyAsset');
				this.enemyCounter.push(tempEnemyCounter);
			}
		}
	},

	update : function() {
	},

	incrementEnemy : function() {
		this.enemyCount++;
		enemyCounter.foreach(function (elt, idx, array) {
			elt.kill();
		});
		for (var k = 1; k <= this.max; k++) {
			if (k <= this.enemyCount) {
				var tempEnemyCounter = new AssetCounter(this.game);
				tempEnemyCounter.create(this.x + k * 25, 50, 'fillAsset');
				this.enemyCounter.push(tempEnemyCounter);
			} else {
				var tempEnemyCounter = new AssetCounter(this.game);
				tempEnemyCounter.create(this.x + k * 25, 50, 'emptyAsset');
				this.enemyCounter.push(tempEnemyCounter);
			}
		}
	},

	reinitEnemy : function() {
		this.enemyCount = 0;
		enemyCounter.foreach(function (elt, idx, array) {
			elt.kill();
		});
		for (var k = 1; k <= this.max; k++) {
			if (k <= this.enemyCount) {
				var tempEnemyCounter = new AssetCounter(this.game);
				tempEnemyCounter.create(this.x + k * 25, 50, 'fillAsset');
				this.enemyCounter.push(tempEnemyCounter);
			} else {
				var tempEnemyCounter = new AssetCounter(this.game);
				tempEnemyCounter.create(this.x + k * 25, 50, 'emptyAsset');
				this.enemyCounter.push(tempEnemyCounter);
			}
		}
	},

	incrementItem : function() {
		this.itemCounter.kill();
		this.itemCount++;
		this.itemCounter = new TextCounter(this.game);
		this.itemCounter.create(10, 10, itemCount, this.maxItem);
	}
}
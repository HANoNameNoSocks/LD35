var EnnemyManager = function(game) {
	this.currentSpeed = -50;
	this.upSpeed = 20;
	this.currentEnnemy = null;
}

EnnemyManager.prototype = {
    create: function() {
		this.currentEnnemy = new Ennemy(game, this.currentSpeed, this.randomIntFromInterval(1,3) - 1);
		this.currentEnnemy.create();
    },

    update: function() {
        if(this.currentEnnemy == null){
			this.initEnnemy();
		}else{
			if(this.currentEnnemy.isDead == true){
				this.currentEnnemy.kill();
				this.initEnnemy();
			}else if(this.currentEnnemy.getPosX() <= 0){
				this.currentEnnemy.destroy();
				this.initEnnemy();
			}else{
				this.currentEnnemy.update();
			}		
		}
    },
	
	initEnnemy : function(){
		this.currentEnnemy = new Ennemy(game, this.currentSpeed, this.randomIntFromInterval(1,3) -1);
		this.currentEnnemy.create();
		this.currentEnnemy.update();
	},
	
	getEnnemy: function(){
		return this.currentEnnemy;
	},
	
	randomIntFromInterval: function(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
}
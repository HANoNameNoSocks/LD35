var EnnemyManager = function(game) {
	this.currentSpeed = -300;
	this.upSpeed = -20;
	this.currentEnnemy = null;
	this.outOfGamePosition = 50;
	this.spawnClock = null;
	this.maxSpeed = -700;
}

EnnemyManager.prototype = {
    create: function() {
		this.currentEnnemy = new Ennemy(game, this.currentSpeed, this._randomType());
		this.currentEnnemy.create();
		this.spawnClock = new SpawnClock(game);
    },

    update: function() {
		if(this._isEnnnemyDead()){
			this._killEnnemy();
			this._startSpawnClock();
		}else if(this._OutOfGamePosition()){
			this._destroyEnnemy();
			this._startSpawnClock();
		}else{
			this.currentEnnemy.update();
		}		
		
		this._initEnnemyAndStopClock();
    },
	
	_initEnnemyAndStopClock : function (){
		if(this.spawnClock.isSpawnAllowed==true){
			this._initEnnemy();
			this.spawnClock.stopTimer();
		}
	},
	
	_startSpawnClock : function (){
		if(this.spawnClock.isRunning==false){
			this.spawnClock.startTimer();
		}
	},
	
	_destroyEnnemy : function (){
		this.currentEnnemy.destroy();
	},
	
	_killEnnemy : function (){
		this.currentEnnemy.kill();
	},
	
	_initEnnemy : function(){
		this._upCurrentSpeed();
		this.currentEnnemy = new Ennemy(game, this.currentSpeed, this._randomType());
		this.currentEnnemy.create();
		this.currentEnnemy.update();
	},
	
	_upCurrentSpeed : function(){
		if(this.currentSpeed > (this.maxSpeed -1)){
			this.currentSpeed += this.upSpeed;
		}else{
			this.currentSpeed = this.maxSpeed;
		}
	},
	
	getEnnemy: function(){
		return this.currentEnnemy;
	},
	
	_isEnnnemyDead : function(){
		return (this.currentEnnemy.isDead == true);
	},
	
	_OutOfGamePosition : function(){
		return (this.currentEnnemy.getPosX() <= this.outOfGamePosition);
	},
	
	_randomType : function(){
		return (this._randomIntFromInterval(1,3) -1);
	},
	
	_randomIntFromInterval: function(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
}
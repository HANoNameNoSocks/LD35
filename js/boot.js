var boot = function(game){
	console.log("%cStarting game");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/img/loading.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
<<<<<<< HEAD
		this.scale.setScreenSize();
=======
>>>>>>> dev
		this.game.state.start("Preload");
	}
}
<<<<<<< HEAD
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
=======
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
>>>>>>> dev

function preload() {
	
}

function create() {
<<<<<<< HEAD
=======
	game.time.advancedTiming = true;
>>>>>>> dev
	game.state.add("Boot",boot);
	game.state.add("Preload",preload);
	game.state.add("GameTitle",gameTitle);
	game.state.add("TheGame",theGame);
	game.state.add("GameOver",gameOver);
	game.state.add("Victory",victory);
	game.state.start("Boot");
}

function update() {
	

}
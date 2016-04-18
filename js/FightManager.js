function FightManager(game) {
	this.game = game ;
};

FightManager.prototype.create = function create() {
	drawsound = game.add.audio('draw');
};

FightManager.prototype.fight = function fight(player,ennemy) {

	if( ( ennemy.getPosX() <= 350 ) && ( ennemy.getPosX() >= 250 ) )
	{
		if( ((player.getType() == 'fire') && (ennemy.getType() == 'plant')) || ((player.getType() == 'plant') && (ennemy.getType() == 'water')) || ((player.getType() == 'water') &&  (ennemy.getType() == 'fire')))
		{
			ennemy.setisDead(true);
			return 1;
		}
		else if( player.getType() == ennemy.getType() )
		{
			ennemy.setisDraw(true);
			drawsound.play();
			return 0;
		}
		else if ( ((player.getType() == 'fire') && (ennemy.getType() == 'water')) ||  ((player.getType() == 'plant') && (ennemy.getType() == 'fire')) || ((player.getType() == 'water') && (ennemy.getType() == 'plant')))
		{
			player.setIsDead(true);
			return -1;
		}
	}
	else if((player.getType() == null) && ( ennemy.getPosX() < 250 )  && ( ennemy.getisDraw() == false ))
	{
			player.setIsDead(true);
			return -1;
	}
	else
	{
		return null;
	}
};

FightManager.prototype.update = function update() {
	
};
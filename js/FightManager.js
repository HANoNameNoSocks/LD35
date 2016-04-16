function FightManager(game,ennemy,player) {
	this.game = game ;
	this.ennemy = ennemy ;
	this.player = player ;
	
};

FightManager.prototype.create = function create() {
	
};

FightManager.prototype.update = function update() {

	if( ( ennemy.getPosX < 500 ) && ( ennemy.getPosX > 300 ) && ( player.isDead == false ) && ( ennemy.isDead() == false ) )
	{

		if( (player.getType == 'fire') && (ennemy.getType == 'plant') || (player.getType == 'plant') && (ennemy.getType == 'water') || (player.getType == 'water') &&  (ennemy.getType == 'fire') )
		{
			ennemy.isDead() = true;
			return 1;
		}
		else if( player.getType == ennemy.getType )
		{
			ennemy.isDead() = true;
			return 0;
		}
		else if ( (player.getType == 'fire') && (ennemy.getType == 'water') ||  (player.getType == 'plant') && (ennemy.getType == 'fire') || (player.getType == 'water') && (ennemy.getType == 'plant') )
		{
			player.isDead() = true;
			return -1;
		}

	}
	else
	{
		return null;
	}

};

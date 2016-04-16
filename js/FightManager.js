function FightManager(game,ennemy,player) {
	this.game = game ;
	this.ennemy = ennemy ;
	this.player = player ;
	
};

FightManager.prototype.create = function create() {
	
};

FightManager.prototype.update = function update() {

	if(ennemy.getPosX < 500 && ennemy.getPosX > 300 && player.isAlive() && ennemy.isAlive()) {

		if( (player.getType == 'Feu') && (ennemy.getType == 'Plante') || (player.getType == 'Plante') && (ennemy.getType == 'Eau') || (player.getType == 'Eau') &&  (ennemy.getType == 'Feu') )
		{
			ennemy.isAlive() = false;
			return 1;
		}
		else if( player.getType == ennemy.getType )
		{
			ennemy.isAlive() = false;
			return 0;
		}
		else if ( (player.getType == 'Feu') && (ennemy.getType == 'Eau') ||  (player.getType == 'Plante') && (ennemy.getType == 'Feu') || (player.getType == 'Eau') && (ennemy.getType == 'Plante') )
		{
			return -1;
		}

	}
	else
	{
		return null;
	}

};

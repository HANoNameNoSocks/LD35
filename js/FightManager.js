function FightManager(game) {
	this.game = game ;
};

FightManager.prototype.create = function create() {
	
};

FightManager.prototype.fight = function fight(player,ennemy) {

	if( ( ennemy.getPosX() <= 350 ) && ( ennemy.getPosX() >= 250 ) )
	{
		 //&& ( player.isDead == false ) && ( ennemy.isDead() == false )
	
		console.log('fight processing');
		console.log('ennemy type : ' + ennemy.getType());
		console.log('player type : ' + player.getType());

		if( ((player.getType() == 'fire') && (ennemy.getType() == 'plant')) || ((player.getType() == 'plant') && (ennemy.getType() == 'water')) || ((player.getType() == 'water') &&  (ennemy.getType() == 'fire')))
		{
			ennemy.setisDead(true);
			console.log('dead ennemy');
			return 1;
		}
		else if( player.getType() == ennemy.getType() )
		{
			console.log('draw');
			return 0;
		}
		else if ( ((player.getType() == 'fire') && (ennemy.getType() == 'water')) ||  ((player.getType() == 'plant') && (ennemy.getType() == 'fire')) || ((player.getType() == 'water') && (ennemy.getType() == 'plant')))
		{
			player.setIsDead(true);
			console.log('dead player');
			return -1;
		}

	}
	else
	{
		console.log('Null : Position = '+ennemy.getPosX() );
		return null;
	}

};

FightManager.prototype.update = function update() {
	
};


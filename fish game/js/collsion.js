//判断大鱼和果实的碰撞
function momFruitsCollision(){
	for (var i = 0; i< fruits.num; i++) {
		if(!data.gameOver)
		{
			if (fruits.alive[i]){
				//calculate length
				var l = calLength2(fruits.x[i],fruits.y[i],mom.x,mom.y);


				if (l < 900){
					fruits.dead(i);
					if(mom.bigBodyCounter < 7)mom.bigBodyCounter++;
					data.fruitNum++;
					if(fruits.fruitType[i] == 'blue'){
						data.double ++;
					}
				}
			}
		}
		
	};
}

//mom and baby's collision
function momBabyCollision(){
	if(data.fruitNum && !data.gameOver)
	{
		var l = calLength2(mom.x,mom.y,baby.x,baby.y)
		if (l<900){
			baby.babyBodyCounter = 0;
			mom.bigBodyCounter = 0;
			//add score
			data.addScore();
		}
	}
	
}

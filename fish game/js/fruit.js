var fruitObj = function()
{
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.speed = [];
	this.orange = new Image();
	this.blue = new Image();
	this.fruitType = [];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.fruitType[i] = 'orange';
		this.speed[i] = Math.random()*0.017+0.005;//[0.005,0.015)
		
	}
	this.orange.src = './src/fruit.png';

	this.blue.src = './src/blue.png';
}
fruitObj.prototype.draw = function()
{
	for (var i = 0; i < this.num; i++) {
		//draw
		//find an ane.fly up
		if(this.fruitType[i] == 'orange'){
			var pic = this.orange;
		}else
		{
			var pic = this.blue;
		}
		if(this.alive[i]){
			if(this.l[i]<=14)
			{
				this.l[i] += this.speed[i] * deltaTime * 0.5;
			}else
			{
				this.y[i] -= this.speed[i] * 5 * deltaTime;
			}
			ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);
			if(this.y[i]< -10)
			{
				this.alive[i] = false;
			}
		}
	}
}

fruitObj.prototype.born = function(i)
{
	var aneId = Math.floor(Math.random() * ane.num);
	this.x[i] =  ane.x[aneId];
	this.y[i] = canHeight - ane.len[aneId];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran =  Math.random();
	if (ran < 0.3) {
		this.fruitType[i] = 'blue'	
	}
	else
		{
		this.fruitType[i] = 'orange'	
		};
	
}
fruitObj.prototype.dead = function(i){
	console.log(i);
	this.alive[i] = false;
}
function fruitMonitor(){
	var num = 0;
	for (var i = 0; i < fruits.num; i++) 
	{
		if(fruits.alive[i])num++;
		
	}
	if(num < 15)
	{
		sendFruit();
		return;
	}
}
function sendFruit()
{
	for (var i = 0; i < fruits.num; i++) 
	{
		if(!fruits.alive[i])
		{
			fruits.born(i);
			return;
		};
		
	}
}
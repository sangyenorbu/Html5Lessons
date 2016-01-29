var momObj = function()
{
	this.x;
	this.y;

	this.bigTailTimer;
	this.bigTailCounter;
	
	this.bigEyeTimer;
	this.bigEyeCounter;
	this.bigEyeInterval;

	this.bigBodyCounter;
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;

	this.bigTailCounter = 0;
	this.bigTailTimer = 0;

	this.bigEyeTimer = 0;
	this.bigEyeCounter = 0;
	this.bigEyeInterval = 1000;

	this.bigBodyCounter = 0;
}
momObj.prototype.draw = function(){
	//lerp x,y
	this.x = lerpDistance(mx,this.x,0.98);
	this.y = lerpDistance(my,this.y,0.98);

	
	
	//bigTail
	this.bigTailTimer += deltaTime;
	if(this.bigTailTimer > 50)
		{
			this.bigTailCounter +=1;
			this.bigTailTimer = 0;
		}
		

	//bigEye
	this.bigEyeTimer += deltaTime;
	if(this.bigEyeTimer > this.bigEyeInterval)
	{
		console.log(this.bigEyeTimer);
		this.bigEyeCounter = (this.bigEyeCounter += 1) %2;
		this.bigEyeTimer = 0;
		if(this.bigEyeCounter == 1)
		{
			this.bigEyeInterval = 200;
		}
		else
		{
			this.bigEyeInterval = Math.random()*1500 + 3000;
		}
	}



	//delta.angle
	//Math.atan2(y,x)
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.9);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var bigTailCounter = this.bigTailCounter % 8;
	ctx1.drawImage(momTail[bigTailCounter],-momTail[bigTailCounter].width * 0.5+30,-momTail[bigTailCounter].height * 0.5);
	
	var bigBodyCounter = this.bigBodyCounter;
	if(data.double == 1)
	{
		ctx1.drawImage(momBodyOra[bigBodyCounter],-momBodyOra[bigBodyCounter].width * 0.5,-momBodyOra[bigBodyCounter].width * 0.5);
	}
	else
	{
		ctx1.drawImage(momBodyBlue[bigBodyCounter],-momBodyBlue[bigBodyCounter].width * 0.5,-momBodyBlue[bigBodyCounter].height * 0.5);
	}
	
	var bigEyeCounter = this.bigEyeCounter;
	ctx1.drawImage(momEye[bigEyeCounter],-momEye[bigEyeCounter].width * 0.5,-momEye[bigEyeCounter].height * 0.5);
	// console.log(momEye[bigEyeCounter]);
	
	ctx1.restore();
}
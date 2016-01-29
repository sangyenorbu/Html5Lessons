var babyObj = function(){
	this.x;
	this.y;
	this.angle;

	this.babyTailTimer;
	this.babyTailCounter;

	this.babyEyeTimer;
	this.babyEyeCounter;
	this.babyEyeInterval;

	this.babyBodyTimer;
	this.babyBodyCounter;

}
babyObj.prototype.init = function() {
	// init
	this.x = canWidth * 0.5 + 50;
	this.y = canHeight * 0.5 - 50;
	this.angle = 0;

	this.babyTailCounter = 0;
	this.babyTailTimer = 0;

	this.babyEyeCounter = 0;
	this.babyEyeTimer = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyCounter = 0;
	this.babyBodyTimer = 0;
};
babyObj.prototype.draw = function() {

	//lerp x,y
	this.x = lerpDistance(mom.x,this.x,0.98);
	this.y = lerpDistance(mom.y,this.y,0.98);
	
	//babyTail
	this.babyTailTimer += deltaTime;
	//console.log(this.babyTailCounter);
	if(this.babyTailTimer > 50)
		{
			this.babyTailCounter +=1;
			this.babyTailTimer = 0;
		}

	//babyEye
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval)
	{	
		this.babyEyeCounter = (this.babyEyeCounter + 1)% 2;
		this.babyEyeTimer = 0;
		if(this.babyEyeCounter == 1)
		{
			this.babyEyeInterval = 200;
		}else{
			this.babyEyeInterval = Math.random()*1500 + 2000;
		}
	}

	//babyBody
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > 400)
		{
			this.babyBodyCounter += 1;
			this.babyBodyTimer %= 400;
			if(this.babyBodyCounter > 19)
				{	
					//game over
					this.babyBodyCounter = 19;
					data.gameOver = true;
				}
		}
	
	//angle
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.9);



	ctx1.save();

	ctx1.translate(this.x,this.y);
	// body...
	ctx1.rotate(this.angle);
	var babyTailCounter = this.babyTailCounter % 8;
	ctx1.drawImage(babyTail[babyTailCounter],-babyTail[babyTailCounter].width * 0.5+26,-babyTail[babyTailCounter].height * 0.5);
	var babyBodyCounter = this.babyBodyCounter;
	// console.log(babyBodyCounter);
	ctx1.drawImage(babyBody[babyBodyCounter],-babyBody[babyBodyCounter].width * 0.5,-babyBody[babyBodyCounter].height * 0.5);
	var babyEyeCounter = this.babyEyeCounter ;
	ctx1.drawImage(babyEye[babyEyeCounter],-babyEye[babyEyeCounter].width * 0.5,-babyEye[babyEyeCounter].height * 0.5);
	ctx1.restore();

};
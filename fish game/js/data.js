var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.aphla = 0;
}
dataObj.prototype.draw = function() {
	// body...

	
	if(this.gameOver){
		ctx1.save();
		this.aphla += 0.007;
		ctx1.font = "35px verdana";
		ctx1.fillStyle = "rgba(255,255,255," + this.aphla +")";
		ctx1.fillText('GAMEOVER',canWidth * 0.5, canHeight * 0.5);
		ctx1.fillText('ཐོབ་སྐར་ ' + this.score,canWidth * 0.5, canHeight * 0.3);
		ctx1.restore();
	}else{
		ctx1.fillText ('འབྲུ་གྲངས ' + this.fruitNum,canWidth * 0.5,canHeight - 50);
		ctx1.fillText('ལྡབ་གྲངས ' + this.double,canWidth * 0.5,canHeight - 80);
		ctx1.fillText('ཐོབ་སྐར་ ' + this.score,canWidth * 0.5, 100);
	}
};
dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
	// body...
};
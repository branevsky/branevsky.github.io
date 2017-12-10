function Ball() 
{
	this.r = this.radius = 20;
	this.x = canvas.width / 2;
	this.y = canvas.height - this.radius;
	
	this.draw = function(ctx) {
		ctx.fillStyle = 'red';
		ctx.beginPath();
		
		ctx.arc(
			this.x,
			this.y,
			this.radius,
			0,
			Math.PI*2,
			false
		);
		
		ctx.closePath();
		ctx.fill();
	}
}

function Player(x, y, w, h)
{
	this.x = x;
	this.y = y;
	
	this.w = w;
	this.h = h;
	
	this.draw = function(ctx) 
	{
		ctx.fillStyle = 'blue';
		ctx.beginPath();
		ctx.rect(this.x, this.y, w, h);
		ctx.closePath();
		ctx.fill();
	}
}
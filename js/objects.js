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

function Menu()
{
	this.width = 700;
	this.height = 400;
	this.x = (canvas.width/2 - this.width/2);
	this.y = (canvas.height/2 - this.height/2);
	
	this.draw = function(ctx) 
	{
		ctx.beginPath(); 
		ctx.lineWidth = 15;
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.x + this.width, this.y);
		ctx.lineTo(this.x + this.width, this.y + this.height);
		ctx.lineTo(this.x, this.y + this.height);
		ctx.lineTo(this.x,this.y);
		ctx.stroke();	
		ctx.fillStyle = 'white';
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
		ctx.fillStyle = 'black';
		ctx.font = '48px serif';
		ctx.textAlign = 'center';
		ctx.fillText("Instruções", canvas.width / 2, this.y + 50);
		ctx.font = '30px serif';
		ctx.textAlign = 'left';
		ctx.fillText("Navegador:", this.x + 50, this.y + 120);
		ctx.font = '20px serif';
		ctx.fillText("Aperte espaço para começar e as setas para cima e para baixo para jogar.", this.x + 70, this.y + 150);
		ctx.font = '30px serif';
		ctx.fillText("Mobile:", this.x + 50, this.y + 200);
		ctx.font = '20px serif';
		ctx.fillText("Clique na tela para começar e incline o celular para jogar.", this.x + 70, this.y + 230);
		ctx.font = '30px serif';
		ctx.fillText("Desenvolvedor:", this.x + 50, this.y + 280);
		ctx.font = '20px serif';
		ctx.fillText("Bruno Ranevsky.", this.x + 70, this.y + 310);
		
		console.log(ctx.measureText("Aperte espaço para começar e as setas para cima e para baixo para jogar."));
	}
}

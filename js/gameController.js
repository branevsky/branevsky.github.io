(function renderFrame() {
	requestAnimationFrame(renderFrame);
	ctx.clearRect(0, 0, W, H);
	
	UpdateUI();
	
	if(gameStarted && !IsMenuOpen())
	{
		UpdateBall();	
	}
	
	UpdatePlayer1();
	
	UpdatePlayer2();
}());

function UpdateBall()
{
	ball.x += gameDifficult[gameMode].ballVelocityX * directionx;
	ball.y += ballVelocityY * directiony;
	
	if (ball.x + ball.radius > canvas.width) 
	{
		ScorePlayer(1);
	}
	if (ball.x - ball.radius < 0)
	{
		ScorePlayer(2);
	}
	if (ball.y + ball.radius > canvas.height || ball.y - ball.radius  < 0) {
		directiony = -directiony;
	}
	
	var testColidePlayer1 = collideTest(ball, player1);
	var testColidePlayer2 = collideTest(ball, player2);
	var colided = (testColidePlayer1 && lastPlayerCollided != 1) || (testColidePlayer2 && lastPlayerCollided != 2);
	if (colided)
	{
		directionx = -directionx;
		if(testColidePlayer1)
		{
			if (playerVely > 0 && directiony > 0)
			{
				ballVelocityY -= 2;
			}
			if (playerVely > 0 && directiony < 0)
			{
				ballVelocityY += 2;
			}
			if (playerVely < 0 && directiony > 0)
			{
				ballVelocityY += 2;
			}
			if (playerVely < 0 && directiony < 0)
			{
				ballVelocityY -= 2;
			}
		}
		if(testColidePlayer1)
		{
			lastPlayerCollided = 1;
		}
		if(testColidePlayer2)
		{
			lastPlayerCollided = 2;
		}
	}

	ball.draw(ctx);
}

function UpdatePlayer1()
{
	if(playerVely != 0)
	{
		player1.y += playerVely;
	}
	
	if(player1.y + player1.h > canvas.height)
	{
		player1.y = canvas.height - player1.h;
	}
	if(player1.y < 0)
	{
		player1.y = 0;
	}
	
	player1.draw(ctx);
}

function UpdatePlayer2()
{
	if(gameStarted)
	{
		if(ball.y + ball.radius > player2.y + player2.h/2)
		{
			player2.y += gameDifficult[gameMode].opponentSpeed;
		}
		else if(ball.y - ball.radius < player2.y)
		{
			player2.y -= gameDifficult[gameMode].opponentSpeed;
		}

		if(player2.y + player2.h > canvas.height)
		{
			player2.y = canvas.height - player2.h;
		}
		if(player2.y < 0)
		{
			player2.y = 0;
		}
	}
	
	player2.draw(ctx);
}

function UpdateUI()
{
	ctx.font = '48px serif';
	ctx.fillText(scorePlayer1, canvas.width / 2 - 50 - 24, 50);
	ctx.fillText(scorePlayer2, canvas.width / 2 + 50, 50);
	
	ctx.fillText("Menu", canvas.width - 200, 50);

	//draw water mark
	ctx.drawImage(imageObj, canvas.width/2 - imageObj.width/2, canvas.height/2 - imageObj.height / 2);
	
	//draw line in the middle
	ctx.beginPath(); 
	ctx.lineWidth = 2;
	ctx.moveTo(canvas.width/2,0);
	ctx.lineTo(canvas.width/2,canvas.height);
	ctx.stroke();	
}

function ScorePlayer(num)
{
	if(num == 1)
	{
		scorePlayer1 += 1;
	}
	if(num == 2)
	{
		scorePlayer2 += 1;
	}
	gameStarted = false;
}

function StartGame()
{
	gameStarted = true;
	ball.x = player1.x + player1.w + ball.radius;
	ball.y = player1.y + player1.h/2;
	ballVelocityY = getRandom(-10, 10);
}

function OpenMenu()
{
	document.getElementById('menuOverlay').style.visibility = 'visible';
}

function CloseMenu()
{
	document.getElementById('menuOverlay').style.visibility = 'hidden';
}

function IsMenuOpen()
{
	if(document.getElementById('menuOverlay').style.visibility == 'visible')
	{
		return true;
	}
	else
	{
		return false;
	}
}
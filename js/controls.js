canvas.addEventListener("mousedown", doMouseDown, false);
function doMouseDown(event)
{
	var posX = event.pageX;
	var posY = event.pageY;
	console.log("event = " + event.pageX + " - " + event.pageY);
	if(openMenu)
	{
		openMenu = false;
		return;
	}
	if(posX > canvas.width - 200 && posX < (canvas.width) && posY > 16 && posY < 51)
	{
		openMenu = true;
	}
	
	if(deviceType == "mobile")
	{
		StartGame();
	}
}

if(deviceType == "pc")
{
	document.addEventListener('keydown', (event) => 
	{
		const keyName = event.key;

		if (keyName === ' ') {
			StartGame();
		}
		if (keyName === 'ArrowUp')
		{
			playerVely = -playerVelocity;
		}
		if (keyName === 'ArrowDown')
		{
			playerVely = playerVelocity;
		}
	});
	
	document.addEventListener('keyup', (event) => 
	{
		const keyName = event.key;

		if ((keyName === 'ArrowUp') || (keyName === 'ArrowDown'))
		{
			playerVely = 0;
		}
	});
}
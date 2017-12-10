
document.addEventListener('mousedown', doMouseDown, false);
function doMouseDown(event)
{
	var posX = event.pageX;
	var posY = event.pageY;
	if(posX > canvas.width - 200 && posX < (canvas.width) && posY > 16 && posY < 51)
	{
		OpenMenu();
		return;
	}
	if(event.target.id.toLowerCase().indexOf("input") == -1)
	{
		CloseMenu();
	}
}

document.getElementById("menuOverlay").addEventListener('input', function (evt) {
	var value = evt.target.value.toLowerCase();
    var id = evt.target.id;
    if(id == "startInput")
    {
    	if(value == "espaco" || value == "espaço")
    	{
    		value = " ";
    	}
    	startKey = value;
    }
    if(id == "upInput")
    {
    	upKey = value;
    }
    if(id == "downInput")
    {
    	downKey = value;
    }
});

if(deviceType == "pc")
{
	document.addEventListener('keydown', (event) => 
	{
		const keyName = event.key.toLowerCase();

		if (keyName === startKey) {
			StartGame();
		}
		if (keyName === upKey)
		{
			playerVely = -playerVelocity;
		}
		if (keyName === downKey)
		{
			playerVely = playerVelocity;
		}
	});
	
	document.addEventListener('keyup', (event) => 
	{
		const keyName = event.key.toLowerCase();

		if ((keyName === upKey) || (keyName === downKey))
		{
			playerVely = 0;
		}
	});
}

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
	if(event.target.id.toLowerCase().indexOf("closemenu") != -1)
	{
		CloseMenu();
	}
}

document.getElementById("menuOverlay").addEventListener('input', InputTextChange, false);
function InputTextChange (evt) {
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
}

document.getElementById("menuOverlay").addEventListener('mousedown', mouseDownRadioButton, false);
function mouseDownRadioButton(event)
{
	if(event.target.type == "radio")
	{
		event.target.checked = true;
		gameMode = parseInt(event.target.value);
	}
}

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
			playerVely = -gameDifficult[gameMode].playerVelocity;
		}
		if (keyName === downKey)
		{
			playerVely = gameDifficult[gameMode].playerVelocity;
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
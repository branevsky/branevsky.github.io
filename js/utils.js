			
function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}
			
function handleOrientation(event) 
{
	var val = 0;
	if(window.innerHeight > window.innerWidth)
	{
		val = (playerVelocity * event.beta/10);
	}
	else
	{
		val = (playerVelocity * -event.gamma/5);
	}
	playerVely = val;
}
window.addEventListener("deviceorientation", handleOrientation);

			
function collideTest(circle, rect) {
	var distX = Math.abs(circle.x - rect.x-rect.w/2);
	var distY = Math.abs(circle.y - rect.y-rect.h/2);

	if (distX > (rect.w/2 + circle.r)) { return false; }
	if (distY > (rect.h/2 + circle.r)) { return false; }

	if (distX <= (rect.w/2)) { return true; } 
	if (distY <= (rect.h/2)) { return true; }

	var dx=distX-rect.w/2;
	var dy=distY-rect.h/2;
	return (dx*dx+dy*dy<=(circle.r*circle.r));
}
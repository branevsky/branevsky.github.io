var deviceType = "pc";

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;

var ballVelocityY;

var directionx = 1;
var directiony = 1;
var lastPlayerCollided = 0;

var playerBorder = 10;
var playerWidth = 40;
var playerHeight = canvas.height/5;

var gameStarted = false;

var playerVely = 0;

var scorePlayer1 = 0;
var scorePlayer2 = 0;

var imageObj = new Image();
imageObj.src = 'imgs/gazeus.png';

var ball = new Ball();
var player1 = new Player(playerBorder, canvas.height / 2 - playerHeight/2, playerWidth, playerHeight);
var player2 = new Player(canvas.width - playerWidth - playerBorder, canvas.height / 2 - playerHeight / 2, playerWidth, playerHeight);

var startKey = " ";
var upKey = "arrowup";
var downKey = "arrowdown";

var gameDifficult = [
	{
		playerVelocity : 15,
		ballVelocityX : 15,
		opponentSpeed : 5
	},
	{
		playerVelocity : 20,
		ballVelocityX : 20,
		opponentSpeed : 10
	},
	{
		playerVelocity : 25,
		ballVelocityX : 25,
		opponentSpeed : 15
	},
];
var gameMode = 0;
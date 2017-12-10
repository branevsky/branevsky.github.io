var deviceType = "pc";

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;

var ballVelocityX = 15;
var ballVelocityY;

var directionx = 1;
var directiony = 1;
var lastPlayerCollided = 0;

var playerBorder = 10;
var playerWidth = 40;
var playerHeight = canvas.height/5;

var gameStarted = false;

var playerVelocity = 15;
var playerVely = 0;

var opponentSpeed = 5;

var scorePlayer1 = 0;
var scorePlayer2 = 0;

var imageObj = new Image();
imageObj.src = 'imgs/gazeus.png';

var openMenu = false;

var ball = new Ball();
var player1 = new Player(playerBorder, canvas.height / 2 - playerHeight/2, playerWidth, playerHeight);
var player2 = new Player(canvas.width - playerWidth - playerBorder, canvas.height / 2 - playerHeight / 2, playerWidth, playerHeight);
var menu = new Menu();
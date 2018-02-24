/**
 * 
 */
var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

var app = new Application({ 
    width: 1280,         // default: 800
    height: 1024,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);
app.renderer.backgroundColor = 0x061639;
document.body.appendChild(app.view);

loader
	.add("images/cat.png")
	.load(setup);

//This `setup` function will run when the image has loaded
function setup() {

	//Create the cat sprite
	var rectangle = new PIXI.Graphics();
	rectangle.lineStyle(4, 0xFF3300, 1);
	rectangle.beginFill(0x66CCFF);
	rectangle.drawRect(0, 0, 64, 64);
	rectangle.endFill();
	rectangle.x = 170;
	rectangle.y = 170;
	var button = rectangle;
	button.interactive = true;
	button.click = function(event){
		app.stage.removeChild(button);
		cat = new Sprite(resources["images/cat.png"].texture);
		area = { x:50, y:50, width:1180, height:924};
		cat.x = 96;
		cat.y = 96;
		cat.vx = 0;
		cat.vy = 0;
		//Add the cat to the stage
		app.stage.addChild(cat);
		setupKeyboard();
		
		state = play;
	}
	app.stage.addChild(button);
	//move_direction = "right";
	state = login;
	
	app.ticker.add(gameLoop);
}

function gameLoop(delta){
	  state(delta);
}
function login(delta){
	
}
function play(delta){
	  cat.x += cat.vx;
	  cat.y += cat.vy;
	  var impact = contain(cat, area);
}

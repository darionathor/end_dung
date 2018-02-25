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

	state = new State();
	
	app.ticker.add(gameLoop);
}

function gameLoop(delta){
	  state.loop(delta);
}

function State(){
	var self = this;
	var focusedText = null;
	this.loop = function(delta){
		
	}
	
	var login_loop = function(delta){
		
	}
	
	var play = function(delta){
		  cat.x += cat.vx;
		  cat.y += cat.vy;
		  var impact = contain(cat, area);
	}
	var fieldInput = function(event){
		if(focusedText!=null){
			text = focusedText;
	    	if(event.key == 'Backspace'){
	    		text.text = text.text.substring(0,text.text.length-1)
	    	}else if(event.key!='Control' && event.key!='Alt')
	    		text.text+=event.key;
		}
	}
	
	var focusEntryField = function(event,text){
		focusedText = text;
	}
	
	var createEntryField = function(options){
		var text = new PIXI.Text();
		var rectangle = new PIXI.Graphics();
		var width = options.width;
		var height = options.height;
		rectangle.lineStyle(4, 0xFF3300, 1);
		rectangle.beginFill(0x66CCFF);
		rectangle.drawRect(0, 0, width, height);
		rectangle.endFill();
		rectangle.x = options.x;
		rectangle.y = options.y;
		rectangle.addChild(text);
		var button = rectangle;
		button.interactive = true;
		button.click = function(event){
			focusEntryField(event,text);
		}
		window.removeEventListener(
				"keypress",
			    fieldInput,
			    false
			    );
		window.addEventListener(
			    "keypress",
			    fieldInput,
			    false
			  );
		 
		app.stage.addChild(button);
	}
	var createLabel = function(options){
		var style = new PIXI.TextStyle({
			fontFamily: 'Arial',
		    fontSize: 36,
		    fontStyle: 'italic',
		    fontWeight: 'bold',
		    fill: ['#ffffff', '#00ff99'], // gradient
//		    stroke: '#4a1850',
//		    strokeThickness: 5,
//		    dropShadow: true,
//		    dropShadowColor: '#000000',
//		    dropShadowBlur: 4,
//		    dropShadowAngle: Math.PI / 6,
//		    dropShadowDistance: 6,
//		    wordWrap: true,
//		    wordWrapWidth: 440
		});
		var label = new PIXI.Text(options.text, style);
		label.x = options.x;
		label.y = options.y;
		
		app.stage.addChild(label);
	}
	
	var createButton = function(options){
		var rectangle = new PIXI.Graphics();
		var width = options.width;
		var height = options.height;
		rectangle.lineStyle(4, 0xFF3300, 1);
		rectangle.beginFill(0x66CCFF);
		rectangle.drawRect(0, 0, width, height);
		rectangle.endFill();
		rectangle.x = options.x;
		rectangle.y = options.y;
		var button = rectangle;
		button.interactive = true;
		button.click = options.onClick;
		var label = new PIXI.Text(options.text);
		rectangle.addChild(label);
		
		
		app.stage.addChild(button);
	}
	
	function login_setup(){
		self.loop = login_loop;
		createLabel({x:320,y:150,text:'Username'});
		createEntryField({x:320,y:200,width:640,height:100});
		createLabel({x:320,y:450,text:'Password'});
		createEntryField({x:320,y:500,width:640,height:100});
		createButton({x:340, y:650, width:600, height:50, text:'Login', onClick:login});
		
	}
	var login = function(event){
		app.stage = new PIXI.Container();
		cat = new Sprite(resources["images/cat.png"].texture);
		area = { x:50, y:50, width:1180, height:924};
		cat.x = 96;
		cat.y = 96;
		cat.vx = 0;
		cat.vy = 0;
		//Add the cat to the stage
		app.stage.addChild(cat);
		setupKeyboard();
		
		self.loop = play;
	}
	
	login_setup();
}
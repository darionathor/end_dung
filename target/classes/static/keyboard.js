/**
 * 
 */
function setupKeyboard(){
	left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
	left.press = function(){
	    //Change the cat's velocity when the key is pressed
	    cat.vx = -5;
	  };
	  
	  //Left arrow key `release` method
	  left.release = function() {
	    //If the left arrow has been released, and the right arrow isn't down,
	    //and the cat isn't moving vertically:
	    //Stop the cat
	    if (!right.isDown) {
	      cat.vx = 0;
	    }
	  };

	  //Up
	  up.press = function() {
	    cat.vy = -5;
	  };
	  up.release = function() {
	    if (!down.isDown) {
	      cat.vy = 0;
	    }
	  };

	  //Right
	  right.press = function() {
	    cat.vx = 5;
	  };
	  right.release = function() {
	    if (!left.isDown) {
	      cat.vx = 0;
	    }
	  };

	  //Down
	  down.press = function(){
	    cat.vy = 5;
	  };
	  down.release = function() {
	    if (!up.isDown) {
	      cat.vy = 0;
	    }
	  };
}
function keyboard(keyCode) {
	  var key = {};
	  key.code = keyCode;
	  key.isDown = false;
	  key.isUp = true;
	  key.press = undefined;
	  key.release = undefined;
	  //The `downHandler`
	  key.downHandler = function(event){
	    if (event.keyCode === key.code) {
	      if (key.isUp && key.press) key.press();
	      key.isDown = true;
	      key.isUp = false;
	    }
	    event.preventDefault();
	  };

	  //The `upHandler`
	  key.upHandler = function(event){
	    if (event.keyCode === key.code) {
	      if (key.isDown && key.release) key.release();
	      key.isDown = false;
	      key.isUp = true;
	    }
	    event.preventDefault();
	  };

	  //Attach event listeners
	  window.addEventListener(
	    "keydown", key.downHandler.bind(key), false
	  );
	  window.addEventListener(
	    "keyup", key.upHandler.bind(key), false
	  );
	  return key;
	}
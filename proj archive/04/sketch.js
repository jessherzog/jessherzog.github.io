var buttons = [];
var backgroundText;
var numPressed = 0;
var theText = "tell me about the dream where we pull the bodies out of the lake and dress them in warm clothes again. how it was late, and no one could sleep, the horses running until they forget that they are horses. it’s not like a tree where the roots have to end somewhere, it’s more like a song on a policeman’s radio, how we rolled up the carpet so we could dance, and the days were bright red, and every time we kissed there was another apple to slice into pieces. look at the light through the windowpane. that means it’s noon, that means we’re inconsolable. tell me how all this, and love too, will ruin us. these, our bodies, possessed by light. tell me we’ll never get used to it.";
var words = theText.split(" ");

function setup() {
	noCanvas();
	for (var i = 0; i < 200; i++) {
		buttons[i] = new ButtonObj();
	}
}

function draw() {
	if (buttons[0] != undefined) {
		for (var i = 0; i < 200; i++) {
			buttons[i].display();
		}
	}
}

function pressed() {
	
	numPressed++;

	console.log(this.x);
	var newX = this.x; 
	var newY = this.y; 

	// this.b = createButton('&#128154');

	var randomWord = round(random(words.length));
	var wordThing = createP(words[randomWord]);
	wordThing.position(newX, newY);
}

// function over() {
// }

// function off() {
// 	// select('body').style('background-color', 'crimson');
// }

function ButtonObj() {
	this.x = random(windowWidth - 90);
	this.y = random(windowHeight - 30);
	this.b = createCheckbox();
	this.b.mousePressed(pressed);
	// this.b.mouseOver(over);
	// this.b.mouseOut(off);

	this.display = function() {
		this.b.position(this.x, this.y);
	};


}
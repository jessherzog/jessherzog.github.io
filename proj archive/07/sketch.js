var input, button;
var theTxt;
var concordance = {};
var tokens;
var keys = [];

var W = 800;
var H = 600;
var ogSize = 50;
var s = 1;
var w = 5;
var j = 0;

var ogCirc;

function setup() {
  createCanvas(W, H);
  stroke('#222222');
  strokeWeight(5);
  noFill();
  ogCirc = ellipse(W/2, H/2, ogSize, ogSize);
  input = select('#textinput');
  button = select('#done');
  button.mousePressed(handleInput);
}

function handleInput() {
	theTxt = input.value();
	processTxt(theTxt);

	function processTxt(data) {
	  var len = data.length;
	  if (data.length === 0) {
	    createP("Cmon put in some stuff!");
	  } else {
	  	var splitty = theTxt.replace(/&nbsp;/g,'');
	  	tokens = splitty.split(/\W+/);
	    countTxt(tokens);
	  }
	}

	function countTxt(txt){
	  for (var i = 0; i < tokens.length; i++) {
	    var word = tokens[i];
	    if (concordance[word] === undefined) {
	      concordance[word] = 1;
	      keys.push(word); //adds new word to the array
	      newCirc(); //new circ for each new word
	    } else {
	      concordance[word]++;
	      j = concordance[word];
	      w++;
	    }
	  }
	}
  	
  	function concordanceSort(a, b) {
	  return (concordance[b] - concordance[a]);
	}

	var countedTxt = keys.sort(concordanceSort);
	for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + concordance[keys[i]]);
  	}
}


function newCirc() {
	var r = random(255);
	var g = random(255);
	var b = random(255);

	s+=5;
	strokeWeight(w+j);
	stroke(r, g, b);
	noFill();
	ellipse(W/2, H/2, ogSize+s, ogSize+s); 
}








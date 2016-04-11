var input, button;
var theTxt;

function setup() {
  noCanvas();
  input = select('#textinput');
  button = select('#pic');
  button.mousePressed(handleInput);
}


function handleInput() {
  theTxt = input.value();
  processTxt(theTxt);
}

function processTxt(data) {
  var len = data.length;
  if (data.length === 0) {
    createP("Nothing eggntered 🍳");
  } else {
    var voweledTxt = findVowels(theTxt);
    createP(voweledTxt);
  }
}

function findVowels(txt){
	var eggex = /([aeiou])/gi;

	var findAtVowels = theTxt.replace(eggex, "egg");

	var newString = "";
	for(var i=0; i<findAtVowels.length; i++){
		newString += (findAtVowels[i]);
	}

  // if ((i == 'e' || i == 'E') && i != 1){
  //   i != eggex;
  // }

	console.log(findAtVowels);
	return findAtVowels;
}




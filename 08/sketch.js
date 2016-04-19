var url1 = "http://api.wordnik.com/v4/word.json/";
var word = "soft";
var url2 = "relatedWords?useCanonical=true&limitPerRelationshipType=100&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var link;
var can;

function setup() {
  can = createCanvas(400, 500);
  can.parent('sprinkles');
  cher = select('input');
  cher.mousePressed(askWordnik);
}

function gotData(data) {
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2];
}

function askWordnik() {
  loadJSON(url1 + word + "/" + url2, gotData);
  doThis(word);
}

function doThis(word) {
  var colors = 
  ["cyan", "yellow", "darkorange", "deeppink", "lightcoral", 
  "mediumaquamarine", "lightpink", "orangered", "royalblue"];
  var randColor = colors[Math.floor(Math.random() * colors.length)];

  var deg = [1,2,3,4,5,6,7,8,9];
	var randDeg = deg[Math.floor(Math.random() * deg.length)];
	var stringDeg = randDeg + "deg";
	console.log(stringDeg);

	link = createElement("span", word);
	link.style('transform', 'rotate(stringDeg)');
	link.style('background-color', randColor);
}

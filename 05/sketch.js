var input, button;
var theText;

function setup() {
  noCanvas();
  input = select('#textinput');
  button = select('#submit');
  button.mousePressed(handleInput);
}

function handleInput() {
  theText = input.value();
  processText(theText);
}

var totalCount = 0; 

function processText(data) {
  var len = data.length;
  if (data.length === 0) {
    alert("Nothing entered");
  } else {

    var report = "";
    
    report += "Total Facebooks: " + totalCounts(data, "facebook") + "<br>";
    report += "Total Twitters: " + totalCounts(data, "twitter") + "<br>";
    report += "Total Tumblrs: " + totalCounts(data, "tumblr") + "<br>";
    report += "Diagnosis: " + diag(totalCount) + "\n";
    
    var grade = createP(report);
  }
}

//count syllables of a word based on number of vowels
function totalCounts(data, match) {
  if (matchAll(data, match).length != 0) {
    totalCount += matchAll(data, match).length;
    return matchAll(data, match).length;
  } else {
    return "0";
  }
}

function diag(tc){
  if (tc == 0) {"looking good!"}
  if (tc >= 0 && tc <= 5){
    return "eh ... it happens.";
  } if (tc >= 10){
    return "back to real life !";
  };
}

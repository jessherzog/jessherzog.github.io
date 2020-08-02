var ctx = c.getContext("2d"),
    stack = [],                  // undo-redo stack
    sp = 0,                      // stack pointer
    isDown = false;              // for drawing (demo)

capture();                       // create an initial undo capture (blank)

ctx.lineCap = "round";           // setup line for demo, ideally replace with text!
ctx.lineWidth = 4;

var u = document.getElementById("undo-contained");

// simple draw mechanism
c.onmousedown = function(e) {
  sp++;                          // on mouse down, move stack pointer to next slot
  isDown = true;                 // NOTE: clear any snapshots after this point (not shown)
  var pos = getXY(e);            // start drawing some line - how you draw is up to you
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

window.onmousemove = function(e) {
  if (!isDown) return;           // only for drawing
  var pos = getXY(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

window.onmouseup = function() {
  if (!isDown) return;
  isDown = false;
  capture();                     // capture an undo state
  makeThumb();                   // create and insert a thumbnail of state
};

function capture() {
  stack[sp] = c.toDataURL();     // one way, you could use getImageData, 
                                 // or store points instead.. it's up to you
}

// Creates a thumbnail of current canvas and insert into visible undo stack
function makeThumb() {
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 140;
  var ctxTmp = canvas.getContext("2d");
  ctxTmp.drawImage(c, 0, 0, canvas.width, canvas.height);
  u.appendChild(canvas);
}

// UNDO button clicked
undo.onclick = function() {
  var img = new Image;           // restore previous state/snapshot
  img.onload = function() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(this, 0, 0);
  }
  
  // move stack pointer back and get previous snapshot
  if (sp > 0) img.src = stack[--sp];
};

// REDO button clicked
redo.onclick = function() {
  
  // anything we can redo?
  if (sp < stack.length) {
    var img = new Image;
    img.onload = function() {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(this, 0, 0);
    }
  
    // move stack pointer forward and get next snapshot
    img.src = stack[++sp];
  }
};

function getXY(e) {
  var r = c.getBoundingClientRect();
  return {x: e.clientX - r.left, y: e.clientY - r.top}
}
//  
// OG RCStream code from: 
// https://github.com/Krinkle
// .
// Documentation:
// https://wikitech.wikimedia.org/wiki/RCStream 
// 

var textStore;

function  yoText() {
  
  var socket = io.connect('stream.wikimedia.org/rc');
  
  var feedNode = document.getElementById('feed');
  var errorNode = document.createElement('div');
  errorNode.className = 'alert alert-danger';

  var node = document.getElementById("feed");
  var node_stream;
  var nodeVal;
  var nodeString = "";

  storeEvent({
    type: 'info',
    'message': '...'
  });
  socket.on('connect', function() {
    socket.emit('subscribe', '*.wikipedia.org');
  });
  socket.on('change', function(rc) {
    if (rc.type == 'edit') {
      storeEvent({
        type: 'rc',
        data: rc.title
      });
    }
  });
  socket.on('error', function(data) {
    storeEvent({
      type: 'error',
      data: data
    });
  });
  function storeEvent(event) {
    if (event.type === 'rc') {
      return finalString(event);
    } else {
      console.log("!!!!");
    }
  };
  function finalString(e) {
    node_stream = document.createTextNode(JSON.stringify(e.data));
    nodeVal = node_stream.nodeValue;
    nodeString = nodeVal.replace(/['"]+/g, '');
    console.log(nodeString); // must be before the return
    //textStore = nodeString;
    // return nodeString;
  };

};


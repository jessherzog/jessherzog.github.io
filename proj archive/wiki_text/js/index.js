function  yoText() {

  var socket = io.connect('stream.wikimedia.org/rc');
  
  var feedNode = document.getElementById('feed');
  var errorNode = document.createElement('div');
  errorNode.className = 'alert alert-danger';

  var nodeString;

  storeEvent({
    type: 'info',
    'message': '...'
  });

  socket.on('connect', function() {
    // socket.emit('subscribe', '*');
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
      var node = document.getElementById("feed");
      var node_stream = document.createTextNode(JSON.stringify(event.data));
      node.appendChild(node_stream);
      node_stream.normalize();
      var nodeVal = node_stream.nodeValue;
      nodeString = nodeVal.replace(/['"]+/g, '');
      return nodeString;
    }
  }
};

yoText();
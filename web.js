var http = require('http');

var PythonShell = require('python-shell');
 

var options = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: '/home/pi/Desktop/script_io',
  args: ['value1', 'value2', 'value3']
};





var socket = require('socket.io-client')('http://mobirummy.com:8080');
  socket.on('connect', function(){
console.log('connected');

  });
socket.on('switch', function(){


 
PythonShell.run('sc2.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results);
});



});


  socket.on('event', function(data){});
  socket.on('disconnect', function(){});




//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code
  res.end('Hello World\n');
  //outputs string with line end symbol
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
// }).listen(1337, "127.0.0.1");
//sets port and IP address of the server
console.log('Server running at http://127.0.0.1:1337/');


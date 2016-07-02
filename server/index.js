var express = require('express')
var http = require('http')
var config = require('./config')
var path = require('path')

var app = express()

var server = http.createServer(app)

server.listen(config.port, function(){
  console.log('Express server listening on %d port', config.port)
})

app.use(express.static(path.join(config.root, '/client/dist')))
app.use(express.static(path.join(config.root, '/client/src')))

app.route('/*')
  .get(function(req, res) {
    return res.sendFile(path.resolve(config.root, 'client/dist/index.html'));
  });

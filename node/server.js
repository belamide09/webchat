
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/', proxied: false});

server.on('connection', function(id) { 
	console.log( 'someone has connected' );
});
server.on('disconnect', function(id) { 
	console.log( 'someone has disconnected' );
});

var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

var ExpressPeerServer = require('peer').ExpressPeerServer;

app.get('/', function(req, res, next) { res.send('Hello world!'); });


var options = {
    debug: true
}

app.use('/api', ExpressPeerServer(server, options));
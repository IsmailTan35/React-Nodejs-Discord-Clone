module.exports.httpsServer= function () {
	const https = require('https')

	const fs = require('fs');
	const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8')
	const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8')
	const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8')
	
	const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
	};
	

	const httpsServer = https.createServer(credentials,app)
	httpServers.listen(80, () => {
		console.log('HTTP Server running on port 80');
		return httpsServer
	});	
}

module.exports.httpServer= function (app) {
	const http = require('http')
	const httpServer = http.createServer(app)
	httpServer.listen(8080, function() {
		console.log((new Date()) + ' Server is listening on port 8080');
	});
	return httpServer
}

module.exports.webSocket =function(server){
	const webSocketServer = require('websocket').server

	const wsServer = new webSocketServer({
		httpServer: server,
		autoAcceptConnections: false
	  })
	
	wsServer.on('request', function (req) {
		var userID = require("./app_server/helper/helperGetUniqueID")
		console.log((new Date()) + ' Recieved a new connection from origin ' + req.origin + '.')
	
		const connection = req.accept(null, req.origin)
		clients[userID] = connection
		console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
	
		connection.on('message', function(message) {
			console.log(message)
			
			if (message.type === 'socket') {
			connection.send(JSON.stringify({
				devices:{},
				positions:{},
				events:{}      
			}))   
		}
		})
	})
	
	
}
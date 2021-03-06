module.exports = function() {
	// vendor
	const express = require('express');
	const app = express();
	const server = require('http').createServer(app);

	// user
	const routes = require("./routes");
	const osc = require("../osc/osc");
	const oscCallback = require('../osc/oscCallback');
	const sockets = require('../osc/sockets')(server);

	// routes
	routes(app, express);

	// initialise osc
	osc.init(oscCallback.cb);

	// server
	server.listen(8000, function() {
		console.log("Server listening on " + 8000);
	});
}

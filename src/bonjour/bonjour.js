const bonjour = require('bonjour')();

const options = {
	name: 'DigiControl',
	port: 3546,
	type: 'digicontrol',
	protocol: 'udp',
}

var service = bonjour.publish(options)
service.start();
console.log(service.name);
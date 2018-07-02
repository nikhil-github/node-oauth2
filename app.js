/*
 * Simple node app to get an token for an OAUTH API
 * Provide values for your id,oauth url and secret
 */
var request = require('request');
var client_id = 'client-id';
var client_secret = 'client-id-secret';
var auth_string = new Buffer(client_id + ":" + client_secret).toString('base64'); // base64 encoded
console.log(auth_string);
request({
	method: 'POST',
    url: 'OAUTH2-URL',
	headers: {
		'Authorization': 'Basic ' + auth_string,
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: ''
}, function (error, response, body) {
	console.log('Status: ', response.statusCode);
	console.log('Headers: ', JSON.stringify(response.headers));
	console.log('Response: ', body);
	console.log('Error: ', error);
});

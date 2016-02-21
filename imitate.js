//var restify = require('restify');
var request = require('request');
var unirest = require('unirest');
var async = require('async');

var server = require('express')();
server.set('view engine', 'jade');

/*server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser()); */


server.get('/sendImage', function (req, res, next) {

	async.waterfall([
		function (callback) {
			console.log('https://images.google.com/searchbyimage?image_url=' + req.query.imgurl);

			var r = request('https://images.google.com/searchbyimage?image_url=' + req.query.imgurl, 
				function (error, response, body){
					callback(null, response.request.uri.href);
			}); 

		},

		function (url, callback) {
			url = url.replace('webhp', 'search');
			url = url.replace('webhp', 'search');
			request(url, function (error, response, body) {
				
				//console.log(body);
				//console.log(JSON.stringify(response.body).indexOf('Visually similar images') > -1);

				// parse response to get partial URL
				var firstSectionList = response.body.split('Visually similar images')[0].split('<');
				//console.log('first section list: ' + firstSectionList);
				
				var lastTag = firstSectionList[firstSectionList.length-1];

				//console.log('last tag: ' + lastTag);
				var partialURL =  lastTag.split('"')[1]; 
				//console.log('partial URL: ' + partialURL);

				callback(null);
			});
		}]);

	return next(); 
});

server.listen( (process.env.PORT || 8080), function () {
    console.log('%s listening at %s', server.name, server.url);
});
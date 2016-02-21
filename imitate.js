var restify = require('restify');
var request = require('request');

var googleVisionAPIkey = "AIzaSyBuyuSHHKhU3epASvI5baj3EgvfQBNYDSw";

var server = restify.createServer({
    name: 'imitate',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/sendImage', function (req, res, next) {
    res.send({imgurl: req.params.imgurl});
    return next();
});

var port = process.env.PORT || 8080;
    server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
});
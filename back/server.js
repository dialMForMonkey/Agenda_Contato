var Hapi = require('hapi');
var server = new Hapi.Server();
var Joi = require('joi');
var fs = require('fs');
var path = require('path');
var config = require('./config.json');
var dirRouter = fs.readdirSync(path.resolve(config.router));
var dirRegister = fs.readdirSync(path.resolve(config.register));

server.connection({
    port: 3000,
    labels: ['apiContatos']
});

var modulosARegistrados = [];
dirRegister.forEach(function(item) {
    modulosARegistrados = modulosARegistrados.concat(require(`${path.resolve(config.register)}\\${item}`)());
});
server.register(
  modulosARegistrados, {
      select: 'apiContatos'
  },
  function(err) {
    if (err) {
        console.log('Erro ao inciar registros', err);
        throw err;
    }
    dirRouter.forEach(function(item) {
        server.route(require(`${path.resolve(config.router)}\\${item}`)(Joi));
    });
});

server.start(function() {
    console.log('Rodando');
});

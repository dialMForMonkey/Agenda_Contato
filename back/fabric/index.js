console.log('aaaa');

var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:27017');
var schemas;
var mg = mongoose.connection;
mg.on('error', function(err) {
    console.log('Erro ao conectar ao banco', err);
});
mg.once('open', function(err) {
    console.log('conecao ativa');
    schemas = require('../schemas')(mongoose);
});
module.exports = function(dados,modulo, schema, call) {
    require(modulo)(dados,mongoose,schemas[schema] ,call);
};

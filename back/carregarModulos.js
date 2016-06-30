var fs = require('fs');
var arquivos = [];

function add(caminho) {
    var x = fs.readdirSync(caminho);
    x.map(function(item) {
        if (/\.js$/.test(item)) {
            return caminho + '/' + item;
        } else {
            add(caminho + '/' + item);
        }
    });
}

module.exports = function(caminho) {
    add(caminho);
    return arquivos;
};

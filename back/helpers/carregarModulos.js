var fs = require('fs');
var path = require('path')
var arquivos = [];

function add(caminho) {
  debugger
    var array = arguments[1]||[];
    var x = fs.readdirSync(caminho);

    x.map(function(item) {
        if (/\.js$/.test(item)) {
            array.push(caminho + '/' + item);
        } else {
            add(caminho + '/' + item , array);
        }
    });

    return array;
}

module.exports = function(caminho) {
    debugger
    var arquivos = add(path.resolve(caminho));
    console.log('arquivos' , arquivos);
    return arquivos;
};

var fs = require('fs');
var path = require('path');

function add(caminho) {
  var array = arguments[1] || [];
  var x = fs.readdirSync(caminho);

  x.map(function(item) {
    if (/\.js$/.test(item)) {
      array.push(caminho + '/' + item);
    } else {
      add(caminho + '/' + item, array);
    }
  });
  return array;
}

module.exports = function(caminho) {
  var arquivos = add(path.resolve(caminho));
  return arquivos;
};

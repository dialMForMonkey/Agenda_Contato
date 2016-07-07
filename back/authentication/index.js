var jwt = require('jsonwebtoken');
var key = require('./config').chaves.tokenKey;

function gerarToken(data) {
  // authorization
  return jwt.sing(data, key, {
    algorithm: 'HS256',
    expiresIn: '6H'
  });
}

const definicaoHapiToken = {
  key: key,
  maxAge: '6H',
  verifyOptions: {
    algorithms: ['HS256']
  },
  validateFunc: function(request, decodedToken, callback) {
    var error,
      credentials = decodedToken.user || {};

    if (!credentials) {
      return callback(error, false, credentials);
    }

    return callback(error, true, credentials);
  }
};

module.export = {
  verificar: definicaoHapiToken,
  gerar: gerarToken
};

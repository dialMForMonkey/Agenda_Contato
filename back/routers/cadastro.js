var schema = require('../fabric'),
    cript = require('crypto'),
    chave = require('../config.json').chaveCriptorgrafia;

module.exports = function(validate) {
    return {
        method: 'POST',
        path: '/cadastrar',
        config: {
            tags: ['api'], //verificar pq nao pode ser outro valor
            description: 'Cadastrar Usuario',
            notes: 'usuario e senha com letra , numeros e parafitas',
            validate: {
                payload: {
                    usuario: validate.string().max(40).min(1).alphanum(),
                    senha: validate.string().max(40).min(1).alphanum()
                }
            },
            handler: function(req, reply) {
                //modulo, schema, call
                cript.createHmac('sha512', chave);
                cript.update(req.payload.senha);
                req.payload.senha = cript.digest('hex');
                schema(req.payload, '../model/cadastro.js', 'usuario', function(err) {
                    if (err) {
                        return reply(500, {
                            'erro': 'usuario nao pode ser cadastrado'
                        });

                    }
                    return reply({
                        "testrando": 'OK'
                    });
                });
            }
        }
    };
};

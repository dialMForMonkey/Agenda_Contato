module.exports = function() {
    return [
        require('vision'),
        require('inert'), {
            register: require('hapi-swaggered'),
            options: {
                tags: {
                    'foobar/test': 'example foobar description'
                },
                info: {
                    title: 'Agenda de contatos',
                    description: 'Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui',
                    version: '1.0'
                }
            }
        }, {
            register: require('hapi-swaggered-ui'),
            options: {
                title: 'Agenda de contatos',
                path: '/docs',
                authorization: {
                    field: 'apikey',
                    scope: 'query',
                    placeholder: 'Enter your apiKey here'
                },
                swaggerOptions: {
                    validatorUrl: null
                }
            }
        }
    ];
};

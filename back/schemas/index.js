module.exports = function(mongo) {
    return {
        usuario: new mongo.Schema({
            usuario: 'string',
            senha: 'string'
        })
    };
};

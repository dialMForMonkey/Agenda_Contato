module.exports = function(usuario, mongoose, schemaUsuario, call) {
    debugger
    var User = mongoose.model('User', schemaUsuario);
    var proc = new User(usuario);
    proc.save(function(err) {
        if (err) {
            return call(err);
        }
        return call('criado');
    });
};

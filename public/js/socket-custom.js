var socket = io();

socket.on('connect', function() {
    console.log('Conectando al servidor')
});



socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Mario Leal',
    mensaje: 'Hola mundo',
}, function(resp) {
    console.log('respuesta', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del servidor', mensaje)
})
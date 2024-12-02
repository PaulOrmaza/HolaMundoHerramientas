//PROTOCOLO DE INTERCAMBIO
var http=require('http');

//CREANDO EL SERVIDOR MEDIANTE EL USO DE PROTOCOLO HTTP
var server=http.createServer();


// SERVICIO WEB 
function mensaje(req,resp){
    //ESTADO 200 SATISFACTORIO ,MENSAJE DE TIPO TEXTO PLANO CONFIGURADO MEDIANTE JSON
    resp.writeHead(200,{'content-type':'text/plain'});
    //ESCRIBO EL MENSAJE 
    resp.write('HOLA MUNDO PAUL ORMAZA');
    resp.end();


}

server.on('request',mensaje);
server.listen(3000,function(){

    console.log("LA SOLICITUD FUE REALIZADA MEDIANTE EL PUERTO 3000");

});